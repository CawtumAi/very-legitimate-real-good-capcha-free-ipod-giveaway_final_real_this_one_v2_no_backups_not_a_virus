import { lerp, randRange } from "./utils";

export class SpeedSlider {
  /**
   * @param {number} min
   * @param {number} max
   * @param {number} changePeriod
   * @param {number} changeRandomness
   */
  constructor(min, max, changePeriod, changeRandomness) {
    this.min = min;
    this.max = max;

    this.start = min;
    this.target = randRange(min, max);
    this.value = this.start;

    this.timeSinceChange = 0.0;
    this.changePeriod = changePeriod;
    this.changeRandomness = changeRandomness;

    this.interval =
      this.changePeriod +
      randRange(-this.changeRandomness * 0.5, this.changeRandomness * 0.5);
  }

  /**
   * @param {number} delta
   */
  update(delta) {
    this.timeSinceChange += delta;
    if (this.timeSinceChange >= this.interval) {
      this.start = this.target;
      this.target = randRange(this.min, this.max);
      this.timeSinceChange = 0;
      this.interval =
        this.changePeriod +
        randRange(-this.changeRandomness * 0.5, this.changeRandomness * 0.5);
    }
    let t = Math.min(this.timeSinceChange / this.interval, this.interval);
    // t = easeOutBounce(t);
    this.value = lerp(this.start, this.target, t);
  }
}
