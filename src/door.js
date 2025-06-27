import { Composite } from "matter-js";
import { Entity } from "./entities/entity";
import { Critter } from "./entities/critter.js";
import { CaptchaPlugin } from "./captcha-plugin";
import { zzfx } from "zzfx";
import config from "./config.js";
import { playSound } from "./utils.js";

export class Door extends Entity {
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

    this.subscribeTo(this.challenge, "beforeUpdate", this._beforeUpdate);
    this.subscribeTo(this, "collisionStart", this._onCollisionStart);
    this.subscribeTo(this, "collisionEnd", this._onCollisionEnd);
    this.registerDraw(this._onDraw, -10000);
  }

  onRemoved() {
    Composite.remove(this.world, this.body);
    super.onRemoved();
  }

  _onDraw() {
    this.challenge.renderer.sprite(
      this.crittersInDoor.length > 0
        ? this.challenge.sprites.door
        : this.challenge.sprites.doorClosed,
      {
        x: this.body.position.x,
        y: this.body.position.y,
        rotation: this.body.angle,
        baked: true,
      }
    );
  }

  _beforeUpdate() {
    if (this.crittersInDoor.length > 0) {
      this.timeCritterInDoor += this.challenge.delta;
      if (this.timeCritterInDoor > 5.0) {
        this.challenge.complete();
      }
    } else {
      this.timeCritterInDoor = 0;
    }
  }

  /**
   * @param {import('./entities/entity').EntityCollision} collision
   */
  _onCollisionStart(collision) {
    if (collision.other instanceof Critter) {
      console.log("Critter entered door");
      playSound(config.doorOpenSound);

      if (this.crittersInDoor.indexOf(collision.other) != -1) return;

      this.crittersInDoor.push(collision.other);
    }
  }

  /**
   * @param {import('./entities/entity').EntityCollision} collision
   */
  _onCollisionEnd(collision) {
    if (collision.other instanceof Critter) {
      playSound(config.doorOpenSound);
      console.log("Critter left door");

      const index = this.crittersInDoor.indexOf(collision.other);

      if (index == -1) return;

      this.crittersInDoor.splice(index, 1);
    }
  }
}
