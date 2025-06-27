import { Events } from "matter-js";
import { CaptchaButton } from "../../captcha-button.js";
import config from "../../config.js";
import { drawGradient, drawMessages, Renderer } from "../../renderer.js";
import { AdChallengeState } from "../ad-challenge-state.js";
import { AdEducationScreen } from "./ad-education-screen.js";
import { zzfx } from "zzfx";
import { BgSprite } from "../ad-challenge.js";

export class AdSuccessScreen extends AdChallengeState {
  /**
   * @param {import('../ad-challenge.js').AdChallenge} challenge
   */
  constructor(challenge) {
    super(challenge);
    const yes = new CaptchaButton(config.ad.success.yes);
    const no = new CaptchaButton(config.ad.success.no);

    this.buttons = [yes, no];
    this.timeSpent = 0.0;
    this.bgSprites = config.ad.success.bgSprites?.map((e) => {
      return new BgSprite(e, this.challenge.sprites);
    });
    this.renderer = new Renderer(this.challenge.canvas);

    this.onClick = this.onClick.bind(this);
    this.onYes = this.onYes.bind(this);
    this.onNo = this.onNo.bind(this);

    Events.on(yes, "click", this.onYes);
    Events.on(no, "click", this.onNo);
  }

  enter() {
    Events.on(this.challenge.inputController, "click", this.onClick);
    zzfx(...config.ad.success.loadSound);
  }

  dispose() {
    Events.off(this.challenge.inputController, "click", this.onClick);
    for (const button of this.buttons) {
      button.dispose();
    }
    super.dispose();
  }

  /**
   * @param {number} delta
   */
  update(delta) {
    this.timeSpent += delta;
    for (const button of this.buttons) {
      button.update(delta, this.challenge.inputController.mousePos);
    }
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    ctx.save();
    const cfg = config.ad.success;
    if (cfg.gradient) {
      drawGradient(
        ctx,
        this.challenge.canvas.width,
        this.challenge.canvas.height,
        cfg.gradient
      );
    }

    for (const bgSprite of this.bgSprites) {
      bgSprite.draw(ctx, this.timeSpent, this.renderer);
    }
    drawMessages(ctx, cfg.messages, this.timeSpent);

    for (const button of this.buttons) {
      button.draw(ctx);
    }

    ctx.restore();
  }

  onClick(position) {
    for (const button of this.buttons) {
      button.checkClick(position);
    }
  }

  onYes() {
    this.challenge.changeState(new AdEducationScreen(this.challenge));
  }

  onNo() {
    this.challenge.complete();
  }
}
