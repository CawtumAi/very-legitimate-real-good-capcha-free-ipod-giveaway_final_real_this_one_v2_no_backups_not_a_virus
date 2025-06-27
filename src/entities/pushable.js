import { Vector } from "matter-js";
import { Component } from "./component";
import { Critter } from "./critter";
import { GravityWell } from "./gravity-well";
import { GravityField } from "./gravity-field";

export class Pushable extends Component {
  /**
   * @param {Critter} critter
   */
  constructor(critter) {
    super();
    this.critter = critter;
    /** @type {number[]} */
    this.gravityManipulators = [];

    this.subscribeTo(this.critter.challenge, "afterUpdate", this.onAfterUpdate);
    this.subscribeTo(this.critter, "collisionStart", this.onCollisionStart);
    this.subscribeTo(this.critter, "collisionEnd", this.onCollisionEnd);
  }

  onAfterUpdate() {
    const manipulators = this.gravityManipulators
      .map((id) => this.critter.challenge.getEntity(id))
      .filter((e) => e != null);

    if (manipulators.length == 0) {
      this.critter.body.plugin.gravity = null;
      return;
    }

    const sum = Vector.create(0, 0);

    for (const manipulator of manipulators) {
      if (manipulator instanceof GravityWell) {
        const diff = Vector.sub(
          this.critter.body.position,
          manipulator.body.position
        );

        let v = Vector.mult(Vector.normalise(diff), manipulator.gravity);
        v.x = Math.round(v.x / 0.25) * 0.25;
        v.y = Math.round(v.y / 0.25) * 0.25;

        sum.x += v.x;
        sum.y += v.y;
      } else if (manipulator instanceof GravityField) {
        sum.x += manipulator.direction.x;
        sum.y += manipulator.direction.y;
      }
    }

    this.critter.body.plugin.gravity = Vector.div(sum, manipulators.length);
  }

  /**
   * @param {EntityCollision} collision
   */
  onCollisionStart(collision) {
    if (
      collision.other instanceof GravityWell ||
      collision.other instanceof GravityField
    ) {
      const id = collision.other.id;
      const index = this.gravityManipulators.indexOf(id);
      if (index != -1) return;
      this.gravityManipulators.push(id);
    }
  }

  /**
   * @param {EntityCollision} collision
   */
  onCollisionEnd(collision) {
    if (
      collision.other instanceof GravityWell ||
      collision.other instanceof GravityField
    ) {
      const id = collision.other.id;
      const index = this.gravityManipulators.indexOf(id);
      if (index == -1) return;

      this.gravityManipulators.splice(index, 1);
    }
  }
}
