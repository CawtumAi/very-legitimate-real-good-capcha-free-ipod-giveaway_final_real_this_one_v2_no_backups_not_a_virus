import { Events } from "matter-js";
import config from "../../config";
import { drawGradient, drawMessages, drawProgress } from "../../renderer";
import { AdChallengeState } from "../ad-challenge-state";
import { AdPlayScreen } from "./ad-play-screen";
import { easeInExpo, lerp } from "../../utils";

import { default as rough } from "roughjs/bin/rough.js";
export class AdEducationScreen extends AdChallengeState {
  /**
   * @param {AdChallenge} challenge
   */
  constructor(challenge) {
    super(challenge);

    this.timePresent = 0.0;
    this.completeTime = 10.0;
  }

  /**
   * @returns {number}
   */
  get progress() {
    return Math.min(this.timePresent / this.completeTime);
  }

  enter() {
    super.enter();
    const presence = this.challenge.presence;

    presence.steering = Math.random() * Math.PI * 2;
    presence.position.x = 390 / 2;
    presence.position.y = 300 / 2;
    this.challenge.video.style.display = "block";
    this.challenge.configurePresence();
  }

  /**
   * @param {number} delta
   */
  update(delta) {
    const presence = this.challenge.presence;

    const t = this.timePresent / this.completeTime;

    presence.update(
      delta,
      lerp(presence.moveSpeed.min * 0.1, presence.moveSpeed.min, t),
      lerp(presence.steeringSpeed.min * 0.1, presence.steeringSpeed.min, t)
    );
    if (presence.pointIsInRadius(this.challenge.inputController.mousePos)) {
      this.timePresent += delta;
    }

    if (this.timePresent >= this.completeTime) {
      this.challenge.changeState(new AdPlayScreen(this.challenge));
    }
  }

  /**
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    ctx.save();
    const cfg = config.ad.education;

    ctx.clearRect(
      0,
      0,
      this.challenge.canvas.width,
      this.challenge.canvas.height
    );

    let alpha = 1.0 - easeInExpo(this.progress);

    ctx.globalAlpha = alpha;
    if (cfg.gradient) {
      drawGradient(
        ctx,
        this.challenge.canvas.width,
        this.challenge.canvas.height,
        cfg.gradient
      );
    }
    ctx.globalAlpha = 1.0;

    const r = rough.canvas(this.challenge.canvas);
    drawProgress(
      ctx,
      this.challenge.presence.position.x,
      this.challenge.presence.position.y,
      this.challenge.presence.radius,
      5,
      this.progress,
      r
    );

    this.challenge.presence.draw(ctx, this.challenge.mouse);

    drawMessages(ctx, cfg.messages ?? [], this.timePresent);

    ctx.restore();
  }
}
