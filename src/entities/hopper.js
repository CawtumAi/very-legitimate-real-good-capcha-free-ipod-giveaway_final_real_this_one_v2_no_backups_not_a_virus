import { Body, Events, Vector } from "matter-js";
import config from "../config";
import { playSound, randRange } from "../utils";
import { inverseRotatePoint } from "../renderer";
import { zzfx } from "zzfx";
import { Component } from "./component";

export class Hopper extends Component {
  /**
   * @param {import('./critter').Critter} critter
   */
  constructor(critter) {
    super();
    this.critter = critter;

    this.critter.challenge;
    this.beforeUpdate = this.beforeUpdate.bind(this);
    this.hopCooldown = randRange(config.hopCooldown[0], config.hopCooldown[1]);
    this.hopChargeUp = 0.0;

    Events.on(this.critter.challenge, "beforeUpdate", this.beforeUpdate);
  }

  dispose() {
    Events.off(this.critter.challenge, "beforeUpdate", this.beforeUpdate);
    super.dispose();
  }

  beforeUpdate() {
    if (this.hopCooldown > 0.0) {
      this.hopCooldown -= this.critter.challenge.delta;
      if (this.hopCooldown <= 0.0) {
        playSound(config.hopSound);
      }
      return;
    }

    this.hopChargeUp += this.critter.challenge.delta;
    if (this.hopChargeUp < config.hopChargeTime) return;

    this.hopCooldown = randRange(config.hopCooldown[0], config.hopCooldown[1]);
    this.hopChargeUp = 0.0;

    const body = this.critter.body;

    let vel = inverseRotatePoint(
      0,
      randRange(config.hopSpeed[0], config.hopSpeed[1]),
      0,
      0,
      -body.angle
    );
    vel = Vector.add(vel, body.velocity);

    Body.setVelocity(body, vel);
  }
}
