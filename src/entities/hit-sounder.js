import { zzfx } from "zzfx";
import config from "../config";
import { distance, playSound } from "../utils";
import { Component } from "./component";
import { Critter } from "./critter";
import { Vector } from "matter-js";

export class HitSounder extends Component {
  /**
   * @param {Critter} critter
   */
  constructor(critter) {
    super();
    this.critter = critter;

    this.prevPosition = Vector.create(
      this.critter.body.position.x,
      this.critter.body.position.y
    );

    this.subscribeTo(this.critter.challenge, "afterUpdate", this.onAfterUpdate);
    this.subscribeTo(this.critter, "collisionStart", this.onCollisionStart);
    this.subscribeTo(this.critter, "bodyCollision", this.onBodyCollision);
  }

  onAfterUpdate() {
    this.timeSinceHitSoundPlayed += this.critter.challenge.delta;

    this.prevPosition.x = this.critter.body.position.x;
    this.prevPosition.y = this.critter.body.position.y;
  }

  /**
   * @param {EntityCollision} collision
   */
  onCollisionStart(collision) {
    if (collision.otherBody.isSensor) return;

    if (this.timeSinceHitSoundPlayed < config.hitSoundCritterCooldown) return;
    this.playHitSound();
  }

  onBodyCollision() {
    if (this.timeSinceHitSoundPlayed < config.hitSoundBodyCooldown) return;
    if (
      distance(this.prevPosition, this.critter.body.position) <=
      config.hitSoundMinPositionDiff
    )
      return;

    this.playHitSound();
  }

  playHitSound() {
    const hitSound = config.critterSounds.hit[this.critter.type];
    if (!hitSound) return;

    this.timeSinceHitSoundPlayed = 0;
    playSound(hitSound);
  }
}
