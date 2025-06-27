import { Composite, Events } from "matter-js";
import { Entity, EntityCollision } from "./entity";
import { Challenge } from "../challenge";
import { CaptchaPlugin } from "../captcha-plugin";

export class GravityWell extends Entity {
  /**
   * @param {Challenge} challenge
   * @param {Matter.Body} body
   * @param {number} gravity
   */
  constructor(challenge, body, gravity) {
    console.assert(body != null);

    super(challenge);
    this.body = body;
    this.gravity = gravity;
    body.plugin = new CaptchaPlugin(this.id);
  }

  onRemoved() {
    Composite.remove(this.world, this.body);
    super.onRemoved();
  }
}
