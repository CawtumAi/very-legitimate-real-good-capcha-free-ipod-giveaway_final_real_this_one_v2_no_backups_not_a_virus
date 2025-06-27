import { Composite } from "matter-js";
import { CaptchaPlugin } from "../captcha-plugin";
import { Entity } from "./entity";
import { Challenge } from "../challenge";

export class GravityField extends Entity {
  /**
   * @type {Matter.Vector}
   */
  direction;

  /**
   *
   * @param {Challenge} challenge
   * @param {Matter.Body} body
   * @param {Matter.Vector} direction
   */
  constructor(challenge, body, direction) {
    super(challenge, body);
    console.assert(body != null);
    console.assert(direction != null);
    body.plugin = new CaptchaPlugin(this.id);
    this.body = body;
    this.direction = direction;
  }

  onRemoved() {
    Composite.remove(this.world, this.body);
    super.onRemoved();
  }
}
