import { Events, Vector } from "matter-js";
import { Challenge } from "../challenge";
import config from "../config";
import { distance } from "../utils";
import { AnimatedSprite } from "../sprite";
import { AdPlayScreen } from "./states/ad-play-screen";
import { AdPresence } from "./ad-presence";
import { SpeedSlider } from "../speed-slider";
import { AdChallengeDebug } from "./ad-challenge-debug";
import { AdEducationScreen } from "./states/ad-education-screen";

export class AdChallenge extends Challenge {
  /**
   * @param {HTMLCanvasElement} canvas
   * @param {HTMLVideoElement} video
   * @param {HTMLImageElement} mouse
   * @param {import("../sprite").Sprites} sprites
   */
  constructor(canvas, video, mouse, sprites) {
    super();

    this.isDisposed = false;
    this.canvas = canvas;
    this.video = video;
    this.mouse = mouse;
    this.sprites = sprites;
    this.attempts = -1;

    this.onUpdate = this.onUpdate.bind(this);

    this.inputController = new InputController(this.canvas);

    this._state = new AdEducationScreen(this);
    // this._state = new AdSuccessScreen(this);
    // this._state = new AdPlayScreen(this);
    // this._state = new AdFailureScreen(this);

    this.lastUpdate = performance.now();

    this.configurePresence();

    this.debug = new AdChallengeDebug(this);

    requestAnimationFrame((timestamp) => {
      if (this.isDisposed) return;
      this._state.enter();
      this.lastFrame = timestamp;
      requestAnimationFrame(this.onUpdate);
    });
  }

  dispose() {
    console.log("Disposed ad challenge.");
    this.isDisposed = true;
    this._state.dispose();

    this.inputController.dispose();
    this.debug.dispose();
    super.dispose();
  }

  configurePresence() {
    const index = Math.max(
      Math.min(this.attempts + 1, config.ad.difficulties.length - 1),
      0
    );
    console.log(`Difficulty: ${index}`);
    const difficulty = config.ad.difficulties[index];

    const steeringConfig = difficulty.steeringSpeed;
    const moveSpeedConfig = difficulty.moveSpeed;

    this.presence = new AdPresence(
      Vector.create(390 / 2, 300 / 2),
      difficulty.presenceRadius ?? 10,
      0,
      new SpeedSlider(
        steeringConfig?.min ?? 10,
        steeringConfig?.max ?? 10,
        steeringConfig?.changePeriod ?? 1,
        steeringConfig?.changeRandomness ?? 0.0
      ),
      new SpeedSlider(
        moveSpeedConfig?.min ?? 1,
        moveSpeedConfig?.max ?? 1,
        moveSpeedConfig?.changePeriod ?? 1,
        moveSpeedConfig?.changeRandomness ?? 0.0
      )
    );
  }

  /**
   * @param {State} newState
   */
  changeState(newState) {
    this._queuedState = newState;
  }

  onUpdate(now) {
    if (this.isDisposed) return;

    const delta = (now - this.lastUpdate) * 0.001;
    this.lastUpdate = now;

    if (this._queuedState) {
      const oldState = this._state;
      oldState.dispose();
      this._state = this._queuedState;
      this._state.enter();
      this._queuedState = null;
    }

    const ctx = this.canvas.getContext("2d");

    if (this._state) {
      this._state.update(delta);
      this._state.draw(ctx);
    }

    if (this.inputController.showMouse) {
      ctx.drawImage(
        this.mouse,
        this.inputController.mousePos.x,
        this.inputController.mousePos.y
      );
    }

    requestAnimationFrame(this.onUpdate);
  }
}

class InputController {
  /**
   * @param {HTMLCanvasElement} canvas
   */
  constructor(canvas) {
    this.canvas = canvas;
    this.mousePos = Vector.create(-1000, -1000);

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onTouchCancel = this.onTouchCancel.bind(this);

    this._touchStart = null;
    this.showMouse = false;

    this.canvas.addEventListener("mousemove", this.onMouseMove);
    this.canvas.addEventListener("click", this.onClick);
    this.canvas.addEventListener("touchstart", this.onTouchStart, {
      passive: false,
    });
    this.canvas.addEventListener("touchmove", this.onTouchMove, {
      passive: false,
    });
    this.canvas.addEventListener("touchend", this.onTouchEnd);
    this.canvas.addEventListener("touchcancel", this.onTouchCancel);
  }

  dispose() {
    this.canvas.removeEventListener("mousemove", this.onMouseMove);
    this.canvas.removeEventListener("click", this.onClick);
    this.canvas.removeEventListener("touchstart", this.onTouchStart);
    this.canvas.removeEventListener("touchmove", this.onTouchMove);
    this.canvas.removeEventListener("touchend", this.onTouchEnd);
    this.canvas.addEventListener("touchcancel", this.onTouchCancel);

    Events.off(this);
  }

  /**
   * @param {MouseEvent} event
   */
  onMouseMove(event) {
    if (this._touchStart != null && new Date() - this._touchStart < 500) {
      return;
    }
    this.showMouse = true;
    this.mousePos.x = event.x;
    this.mousePos.y = event.y;
  }

  /**
   * @param {MouseEvent} event
   */
  onClick(event) {
    Events.trigger(this, "click", Vector.create(event.x, event.y));
  }

  /**
   * @param {TouchEvent} event
   */
  onTouchStart(event) {
    this.mousePos.x = event.touches[0].clientX;
    this.mousePos.y = event.touches[0].clientY;
    Events.trigger(
      this,
      "click",
      Vector.create(event.touches[0].clientX, event.touches[0].clientY)
    );
    event.preventDefault();
  }

  /**
   * @param {TouchEvent} event
   */
  onTouchMove(event) {
    this.mousePos.x = event.touches[0].clientX;
    this.mousePos.y = event.touches[0].clientY;
    event.preventDefault();
  }

  /**
   * @param {TouchEvent} event
   */
  onTouchEnd(event) {
    this.mousePos.x = -1000;
    this.mousePos.y = -1000;
  }

  /**
   * @param {TouchEvent} event
   */
  onTouchCancel(event) {
    this.mousePos.x = -1000;
    this.mousePos.y = -1000;
  }
}

export class MouseTrail {
  constructor(canvas, spread, trailLength) {
    this.canvas = canvas;
    this._spread = spread;

    this._points = Array.from(
      { length: trailLength },
      (_, __) => new MouseTrailPoint(Vector.create(0, 0), -Infinity)
    );
    this._lastIndex = 0;
  }

  _getPoint(offset) {
    let index = (this._lastIndex - offset) % this._points.length;
    if (index < 0) {
      index = this._points.length + index;
    }
    return this._points[index];
  }

  /**
   *
   * @param {Matter.Vector} mousePos
   */
  update(mousePos) {
    const pos = Vector.clone(mousePos);
    const now = performance.now();

    const prevMinus1 = this._getPoint(1);

    if (distance(prevMinus1.pos, pos) < this._spread) {
      const prev = this._getPoint(0);
      prev.pos = pos;
      prev.timestamp = now;
      return;
    }

    const point = new MouseTrailPoint(pos, now);

    const nextIndex = (this._lastIndex + 1) % this._points.length;
    this._points[nextIndex] = point;
    this._lastIndex = nextIndex;
  }

  /**
   * @param {CanvasRenderingContext2D} ctx
   * @param {HTMLCanvasElement} canvas
   * @param {number} maxAge
   */
  draw(ctx, mouse, maxAge) {
    maxAge ??= 0.0;

    if (maxAge == 0.0) return;
    if (this._points.length < 2) return;

    const lastPoint = this._getPoint(0);
    if (lastPoint == null) return;
    const now = performance.now();

    ctx.save();

    for (let offset = this._points.length - 1; offset >= 0; offset--) {
      const point = this._getPoint(offset);
      const age = (now - point.timestamp) * 0.001;
      if (age > maxAge) continue;
      ctx.globalAlpha = 1 - age / maxAge;
      ctx.drawImage(mouse, point.pos.x, point.pos.y);
    }
    ctx.restore();
  }
}

class MouseTrailPoint {
  /**
   * @param {Matter.Vector} pos
   * @param {number} timestamp
   */
  constructor(pos, timestamp) {
    this.pos = pos;
    this.timestamp = timestamp;
  }
}

export class BgSprite {
  constructor(cfg, sprites) {
    this.positions = cfg.positions.map((e) => Vector.create(e.x, e.y));
    this.bounceRate = cfg.bounceRate ?? 0.0;
    this.spinRate = cfg.spinRate ?? 0.0;
    this.spinRange = cfg.spinRange ?? 0.0;
    this.animatedSprite = new AnimatedSprite(
      cfg.sprites.map((name) => {
        const sprite = sprites[name];
        console.assert(sprite != null);
        return sprite;
      }),
      cfg.frameRate ?? 1.0
    );
  }

  /**
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} time
   * @param {import("../renderer").Renderer} renderer
   */
  draw(ctx, time, renderer) {
    const sprite = this.animatedSprite.getFrame(time);

    const posIndex = Math.floor(
      (time * this.bounceRate) % this.positions.length
    );

    const rotation = Math.sin(time * this.spinRate) * this.spinRange;

    renderer.sprite(sprite, {
      x: this.positions[posIndex].x,
      y: this.positions[posIndex].y,
      rotation: rotation,
    });
  }
}
