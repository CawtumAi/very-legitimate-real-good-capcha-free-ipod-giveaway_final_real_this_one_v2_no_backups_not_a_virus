import { Events, Vector } from "matter-js";
import { BgSprite, EducationState, EllipticalButton } from "../ad-challenge";
import config from "../../config";
import {
  drawGradient,
  drawMessages,
  inverseRotatePoint,
  Renderer,
} from "../../renderer";
import { zzfx } from "zzfx";
import {
  distance,
  easeOutBounce,
  lerp,
  lerpVector,
  playSound,
} from "../../utils";
import { AdChallengeState } from "../ad-challenge-state";
import { AdEducationScreen } from "./ad-education-screen";
import { CaptchaButton } from "../../captcha-button";

export class AdFailureScreen extends AdChallengeState {
  /**
   * @param {AdChallenge} challenge
   */
  constructor(challenge) {
    super(challenge);
    this.canvas = this.challenge.canvas;
    this.timeSpent = 0.0;

    this.retry = new CaptchaButton(config.ad.failure.retry);
    this.buttons = [this.retry];

    this.renderer = new Renderer(this.canvas);

    this.bgSprites = config.ad.failure.bgSprites?.map((e) => {
      return new BgSprite(e, this.challenge.sprites);
    });
    this.bounceSoundCooldown = 0.5;
    this.prevRetryDot = 0.0;

    this.onClick = this.onClick.bind(this);
    this.onRetry = this.onRetry.bind(this);
    Events.on(this.retry, "click", this.onRetry);
  }

  enter() {
    Events.on(this.challenge.inputController, "click", this.onClick);

    playSound(config.ad.failure.failureSound);
  }

  dispose() {
    Events.off(this.challenge.inputController, "click", this.onClick);
    super.dispose();
  }

  onClick(position) {
    for (const button of this.buttons) {
      button.checkClick(position);
    }
  }

  onRetry() {
    this.challenge.changeState(new AdEducationScreen(this.challenge));
  }

  updateRetryPosition(time) {
    let t = Math.max(
      Math.min(
        (time - config.ad.failure.retryPosition.delay) /
          config.ad.failure.retryPosition.duration,
        1.0
      ),
      0.0
    );
    t = easeOutBounce(t);

    const pos = lerpVector(
      config.ad.failure.retryPosition.start,
      config.ad.failure.retryPosition.end,
      t
    );

    const playBounceSound =
      distance(pos, config.ad.failure.retryPosition.end) < 10 && t < 1.0;

    if (playBounceSound && this.bounceSoundCooldown <= 0.0) {
      this.bounceSoundCooldown = 0.1;

      playSound(config.ad.failure.retryBounceSound);
    }

    this.retry.position = pos;
  }

  update(delta) {
    this.timeSpent += delta;

    this.updateRetryPosition(this.timeSpent);

    this.bounceSoundCooldown = Math.max(this.bounceSoundCooldown - delta, 0);

    // this.retry.update(delta, this.challenge.inputController.mousePos);
    for (const button of this.buttons) {
      button.update(delta, this.challenge.inputController.mousePos);
    }
  }
  /**
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    ctx.save();

    const cfg = config.ad.failure;

    drawGradient(
      ctx,
      this.challenge.canvas.width,
      this.challenge.canvas.height,
      cfg.gradient
    );

    for (const bgSprite of this.bgSprites) {
      bgSprite.draw(ctx, this.timeSpent, this.renderer);
    }

    ctx.fillStyle = "yellow";

    drawMessages(ctx, cfg.messages, this.timeSpent);

    for (const button of this.buttons) {
      button.draw(ctx);
    }

    ctx.restore();
  }
}
