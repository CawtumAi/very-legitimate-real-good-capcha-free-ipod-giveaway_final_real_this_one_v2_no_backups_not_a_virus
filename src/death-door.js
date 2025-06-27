import { Composite } from "matter-js";
import { Entity } from "./entities/entity";
import { Critter } from "./entities/critter.js";
import { CaptchaPlugin } from "./captcha-plugin";
import { zzfx } from "zzfx";
import config from "./config.js";
import { playSound } from "./utils.js";

export class DeathDoor extends Entity {
  /**
   * @param {import('./challenge.js').Challenge} challenge
   * @param {Matter.Body} body
   */
  constructor(challenge, body) {
    console.assert(challenge != null);
    console.assert(body != null);

    super(challenge);

    this.challenge = challenge;
    this.body = body;
    this.timeCritterInDoor = 0;

    /** @type {Critter[]} */
    this.crittersInDoor = [];

    body.plugin = new CaptchaPlugin(this.id);

    this.registerDraw(this._onDraw, -10000);
  }

  onRemoved() {
    Composite.remove(this.world, this.body);
    super.onRemoved();
  }

  _onDraw() {
    this.challenge.renderer.sprite(this.challenge.sprites.door, {
      x: this.body.position.x,
      y: this.body.position.y,
      rotation: this.body.angle,
      baked: true,
    });
  }
}
