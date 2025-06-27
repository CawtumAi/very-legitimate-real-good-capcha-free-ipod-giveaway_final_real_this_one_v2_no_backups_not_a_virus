import { Body, Composite, Vector } from "matter-js";
import { Challenge, renderSvg } from "./challenge";
import { Entity } from "./entities/entity";
import { GravityWell } from "./entities/gravity-well";

export class PushController extends Entity {
  /**
   * @type {Date}
   */
  _touchStart;

  /**
   * @param {Challenge} challenge
   * @param {GravityWell} touch
   * @param {GravityWell} mouse
   * @param {HTMLElement} element
   * @param {number} gravityScalar
   */
  constructor(challenge, touch, mouse, element, gravityScalar) {
    console.assert(challenge != null);
    console.assert(touch != null);
    console.assert(mouse != null);
    console.assert(element != null);

    super(challenge);
    this.touch = touch;
    this.mouse = mouse;
    this.element = element;

    this.touch.gravity *= gravityScalar ?? 1.0;
    this.mouse.gravity *= gravityScalar ?? 1.0;

    this._onMouseMove = this._onMouseMove.bind(this);
    this._onTouchStart = this._onTouchStart.bind(this);
    this._onTouchMove = this._onTouchMove.bind(this);
    this._onTouchEnd = this._onTouchEnd.bind(this);
    this._onTouchCancel = this._onTouchCancel.bind(this);

    this.element.addEventListener("mousemove", this._onMouseMove);
    this.element.addEventListener("touchstart", this._onTouchStart, {
      passive: false,
    });
    this.element.addEventListener("touchmove", this._onTouchMove, {
      passive: false,
    });
    this.element.addEventListener("touchend", this._onTouchEnd);
    this.element.addEventListener("touchcancel", this._onTouchCancel);

    Body.setPosition(this.touch.body, _outOfBounds());
    Body.setPosition(this.mouse.body, _outOfBounds());

    this.registerDraw(this._onDraw, 10000);
  }

  onRemoved() {
    this.element.removeEventListener("mousemove", this._onMouseMove);
    this.element.removeEventListener("touchstart", this._onTouchStart);
    this.element.removeEventListener("touchmove", this._onTouchMove);
    this.element.removeEventListener("touchend", this._onTouchEnd);
    this.element.addEventListener("touchcancel", this._onTouchCancel);

    super.onRemoved();
  }

  /**
   * @param {MouseEvent} event
   */
  _onMouseMove(event) {
    if (this._touchStart != null && new Date() - this._touchStart < 500) {
      return;
    }

    const tl = Vector.create(this.canvas.x, this.canvas.y);
    let rel = Vector.sub(Vector.create(event.clientX, event.clientY), tl);
    Body.setPosition(this.mouse.body, rel);
    Body.setPosition(this.touch.body, _outOfBounds());
  }

  /**
   * @param {TouchEvent} event
   */
  _onTouchStart(event) {
    Body.setPosition(this.mouse.body, _outOfBounds());
    this._touchStart = new Date();
    event.preventDefault();
  }

  /**
   * @param {TouchEvent} event
   */
  _onTouchMove(event) {
    this._moveToTouchEvent(event);
    event.preventDefault();
  }

  /**
   * @param {TouchEvent} event
   */
  _onTouchEnd(event) {
    Body.setPosition(this.touch.body, _outOfBounds());
  }

  /**
   * @param {TouchEvent} event
   */
  _onTouchCancel(event) {
    Body.setPosition(this.touch.body, _outOfBounds());
  }

  _moveToTouchEvent(event) {
    const tl = Vector.create(this.canvas.x, this.canvas.y);
    let rel = Vector.sub(
      Vector.create(event.touches[0].clientX, event.touches[0].clientY),
      tl
    );
    Body.setPosition(this.touch.body, rel);
  }

  frame = 0;
  frames = ["cursor0", "cursor0", "cursor1", "cursor2", "cursor2", "cursor2"];
  touchFrames = [
    "touchCursor0",
    "touchCursor0",
    "touchCursor1",
    "touchCursor2",
    "touchCursor2",
    "touchCursor2",
  ];
  rotation = 0;
  _onDraw() {
    let body = null;
    let frames = this.frames;
    if (
      Vector.magnitude(Vector.sub(this.mouse.body.position, _outOfBounds())) >
      1.0
    ) {
      body = this.mouse.body;
    } else if (
      Vector.magnitude(Vector.sub(this.touch.body.position, _outOfBounds())) >
      1.0
    ) {
      body = this.touch.body;

      frames = this.touchFrames;
    }

    if (body == null) return;
    this.challenge.renderer.sprite(this.challenge.sprites[frames[this.frame]], {
      x: body.position.x,
      y: body.position.y,

      rotation: this.rotation,
    });
    this.frame = (this.frame + 1) % this.frames.length;
    this.rotation += Math.PI / 4;
  }
}

function _outOfBounds() {
  return Vector.create(-10000, -10000);
}
