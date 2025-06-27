import { Composite } from "matter-js";
import { Entity } from "./entity";
import { Challenge } from "../challenge";
import { CaptchaPlugin } from "../captcha-plugin";

export class Destroyer extends Entity {
  /**
   * @param {Challenge} challenge
   * @param {Matter.Body} body
   */
  constructor(challenge, body, gravity) {
    console.assert(body != null);
    super(challenge);
    this.body = body;
    body.plugin = new CaptchaPlugin(this.id);
  }

  onRemoved() {
    Composite.remove(this.world, this.body);
    super.onRemoved();
  }
}
