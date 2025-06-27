import { Events } from "matter-js";
import { Challenge } from "./challenge";
import config from "./config";
import {
  drawIndeterminateProgress,
  drawMessages,
  drawProgress,
} from "./renderer";
import { randRange } from "./utils";

export class LoadingChallenge extends Challenge {
  /**
   * @param {HTMLCanvasElement} canvas
   */
  constructor(canvas) {
    super();
    this.canvas = canvas;
    this.isDisposed = false;
    this.timeSpent = 0;
    this.minLoadingTime = NaN;

    this.onUpdate = this.onUpdate.bind(this);

    this.lastUpdate = performance.now();

    requestAnimationFrame((timestamp) => {
      if (this.isDisposed) return;
      this.lastFrame = timestamp;
      requestAnimationFrame(this.onUpdate);
    });
  }

  dispose() {
    this.isDisposed = true;
    super.dispose();
  }

  get progress() {
    if (isNaN(this.minLoadingTime)) return 0.0;
    return Math.min(this.timeSpent / this.minLoadingTime, 1.0);
  }

  configureLoadTime() {
    this.minLoadingTime = randRange(
      config.loading.duration[0],
      config.loading.duration[1]
    );
  }

  onUpdate() {
    if (this.isDisposed) return;
    const now = performance.now();
    const delta = (now - this.lastUpdate) * 0.001;
    this.timeSpent += delta;

    this.lastUpdate = now;

    this.onDraw();
    if (!isNaN(this.minLoadingTime) && this.timeSpent >= this.minLoadingTime) {
      Events.trigger(this, "complete");
    }

    requestAnimationFrame(this.onUpdate);
  }

  onDraw() {
    const ctx = this.canvas.getContext("2d");

    ctx.save();
    drawMessages(ctx, config.loading.messages, this.timeSpent);

    drawIndeterminateProgress(
      ctx,
      config.loading.progress.x,
      config.loading.progress.y,
      config.loading.progressRadius,
      config.loading.progressThickness,
      config.loading.progressSpeed,
      this.timeSpent
    );

    ctx.restore();
  }
}
