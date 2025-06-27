import { Vector } from "matter-js";
import config, { debugConfig } from "../config";
import { zzfx } from "zzfx";
import { playSound, zzfxIndex } from "../utils";

export class AdPresence {
  /**
   * @param {Matter.Vector} position
   * @param {number} radius
   * @param {number} steering
   * @param {import('../speed-slider').SpeedSlider} steeringSpeed
   * @param {import('../speed-slider').SpeedSlider} moveSpeed
   */
  constructor(position, radius, steering, steeringSpeed, moveSpeed) {
    this.position = position;
    this.radius = radius;
    this.steering = steering;
    this.steeringSpeed = steeringSpeed;
    this.moveSpeed = moveSpeed;
  }

  get visualPosition() {
    return Vector.add(this.position, Vector.create(-16, -16));
  }

  /**
   * @param {Matter.Vector} position
   * @returns {boolean}
   */
  pointIsInRadius(position) {
    return Vector.magnitude(Vector.sub(this.position, position)) <= this.radius;
  }

  /**
   *
   * @param {number} delta
   * @param {number} fixedMoveSpeed
   * @param {number} fixedSteering
   */
  update(delta, fixedMoveSpeed, fixedSteering) {
    if (fixedMoveSpeed !== undefined) {
      this.moveSpeed.value = fixedMoveSpeed;
    } else {
      this.moveSpeed.update(delta);
    }

    if (fixedSteering !== undefined) {
      this.steeringSpeed.value = fixedSteering;
    } else {
      this.steeringSpeed.update(delta);
    }

    const moveSpeed = this.moveSpeed.value;
    const steeringSpeed = this.steeringSpeed.value;

    this.steering += (Math.random() * 2.0 - 1.0) * steeringSpeed * delta;
    const x = Math.cos(this.steering) * moveSpeed;
    const y = Math.sin(this.steering) * moveSpeed;

    this.position.x += x;
    this.position.y += y;

    if (
      this.position.x > 370 ||
      this.position.x < 20 ||
      this.position.y > 280 ||
      this.position.y < 20
    ) {
      this.steering = Math.atan2(
        150 - this.position.y,
        390 / 2 - this.position.x
      );

      const sound = [...config.ad.play.presenceBounceSound];
      const percent =
        (moveSpeed - this.moveSpeed.min) /
        (this.moveSpeed.max - this.moveSpeed.min);
      sound[zzfxIndex.volume] += percent;

      playSound(sound);
    }
  }

  /**
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx, mouse) {
    ctx.save();
    const pos = this.visualPosition;
    ctx.drawImage(mouse, pos.x, pos.y);
    ctx.restore();
  }
}
