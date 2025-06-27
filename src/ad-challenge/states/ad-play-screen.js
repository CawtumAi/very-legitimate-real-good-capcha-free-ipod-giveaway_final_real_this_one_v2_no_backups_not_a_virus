import { Vector } from "matter-js";
import config from "../../config";
import { AdChallengeState } from "../ad-challenge-state";
import { MouseTrail } from "../ad-challenge";
import { AdFailureScreen } from "./ad-failure-screen";
import { AdPresence } from "../ad-presence";
import { SpeedSlider } from "../../speed-slider";
import { drawMessages, drawProgress } from "../../renderer";
import { AdSuccessScreen } from "./ad-success-screen";

export class AdPlayScreen extends AdChallengeState {
  /**
   * @param {AdChallenge} challenge
   */
  constructor(challenge) {
    super(challenge);

    this.timePresent = 0.0;
    this.timeAbsent = 0.0;

    // this._inputController = new InputController(this.canvas);

    this.mouseTrailLifeTime = config.ad.mouseTrailLifeTime ?? 1.0;
    this.timeSpent = 0;
    this._duration = 30;

    this.onEnded = this.onEnded.bind(this);

    if (this.mouseTrailLifeTime > 0.0) {
      this.mouseTrail = new MouseTrail(
        this.challenge.canvas,
        config.ad.mouseTrailSpread ?? 10,
        config.ad.maxMouseTrails
      );

      this.presenceTrail = new MouseTrail(
        this.challenge.canvas,
        config.ad.mouseTrailSpread ?? 10,
        config.ad.maxMouseTrails
      );
    }
  }

  /**
   * @returns {HTMLVideoElement}
   */
  get captchaVideo() {
    return this.challenge.video;
  }

  enter() {
    super.enter();
    this.captchaVideo.addEventListener("ended", this.onEnded);
    this.captchaVideo.style.display = "block";
    this.captchaVideo.currentTime = 0;
    this.captchaVideo.play();
    this.challenge.attempts++;
  }

  dispose() {
    this.captchaVideo.style.display = "none";
    this.captchaVideo.removeEventListener("ended", this.onEnded);
    this.captchaVideo.pause();
    this.captchaVideo.currentTime = 0;

    super.dispose();
  }

  onEnded() {
    config.ad.leniency;

    const index = Math.min(
      this.challenge.attempts,
      config.ad.leniency.length - 1
    );

    const minScoreRequired = config.ad.leniency[index];

    const score = this.timePresent / this.timeSpent;
    console.log(`Score ${score} min ${minScoreRequired}`);
    if (score >= minScoreRequired) {
      this.challenge.changeState(new AdSuccessScreen(this.challenge));
    } else {
      this.challenge.changeState(new AdFailureScreen(this.challenge));
    }
  }

  /**
   * @param {number} delta
   */
  update(delta) {
    this.timeSpent += delta;

    const presence = this.challenge.presence;
    presence.update(delta);
    this.mouseTrail?.update(this.challenge.inputController.mousePos);
    this.presenceTrail?.update(presence.visualPosition);

    if (presence.pointIsInRadius(this.challenge.inputController.mousePos)) {
      this.timePresent += delta;
    } else {
      this.timeAbsent += delta;
    }
  }

  /**
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    const progress = this.captchaVideo.currentTime / this.captchaVideo.duration;

    ctx.save();

    ctx.clearRect(
      0,
      0,
      this.challenge.canvas.width,
      this.challenge.canvas.height
    );

    drawMessages(ctx, config.ad.play.messages, this.timeSpent);

    this.challenge.presence.draw(ctx, this.challenge.mouse);
    if (this.mouseTrail) {
      this.mouseTrail.draw(ctx, this.challenge.mouse, this.mouseTrailLifeTime);
    }

    if (this.presenceTrail) {
      this.presenceTrail.draw(
        ctx,
        this.challenge.mouse,
        this.mouseTrailLifeTime
      );
    }

    ctx.beginPath();
    // ctx.rect(0, 20, this.presence.x, 40);
    ctx.strokeStyle = "#09f";
    ctx.lineWidth = 1;
    ctx.rect(0, 20, this.presence * 10, 40);
    ctx.strokeStyle = "#09f";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.closePath();

    ctx.resetTransform();

    const radius = config.ad.progressRadius ?? 10;
    const progressThickness = config.ad.progressThickness ?? 10;

    drawProgress(ctx, 370, 280, radius, progressThickness, progress);

    ctx.restore();
  }
}
