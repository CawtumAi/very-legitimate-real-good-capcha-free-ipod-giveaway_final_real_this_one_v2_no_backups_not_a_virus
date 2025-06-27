import { zzfx } from "zzfx";
import config from "../config";
import { distance, playSound } from "../utils";
import { Component } from "./component";
import { Critter } from "./critter";
import { Vector } from "matter-js";
import { EntityCollision } from "./entity";
import { Destroyer } from "./destroyer";
import { DeathDoor } from "../death-door";

export class Destroyable extends Component {
  /**
   * @param {Critter} critter
   */
  constructor(critter) {
    super();
    this.critter = critter;

    this.subscribeTo(critter.challenge, "beforeUpdate", this.onBeforeUpdate);
    this.subscribeTo(critter, "collisionStart", this.onCollisionStart);
  }

  onBeforeUpdate() {
    if (Vector.magnitude(this.critter.body.position) > 2000.0) {
      console.log(
        `Entity out of bounds ${this.critter.id} ${this.critter.type} ${this.critter.body.position.x} ${this.critter.body.position.y}`
      );
      this.critter.queueFree = true;
    }
  }

  /**
   * @param {EntityCollision} collision
   */
  onCollisionStart(collision) {
    if (
      collision.other instanceof Destroyer ||
      collision.other instanceof DeathDoor
    ) {
      this.critter.queueFree = true;
    }
  }
}
