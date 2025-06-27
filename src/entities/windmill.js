import { Body, Composite, Vector } from "matter-js";
import { Entity } from "./entity";
import { Challenge } from "../challenge";

export class Windmill extends Entity {
  /**
   * @type {Body}
   */
  body;

  /**
   * @type {number}
   */
  speed;

  /**
   *
   * @param {Challenge} challenge
   * @param {Matter.Body} body
   * @param {number} speed
   */
  constructor(challenge, body, speed) {
    super(challenge);
    speed *= Math.sign(Math.random() - 0.5);

    this.body = body;
    this.speed = speed;

    this.subscribeTo(this.challenge, "beforeUpdate", this._onUpdate);
  }

  onRemoved() {
    Composite.remove(this.world, this.body);
    super.onRemoved();
  }

  _onUpdate() {
    Body.setAngularVelocity(this.body, this.speed);
  }
}
