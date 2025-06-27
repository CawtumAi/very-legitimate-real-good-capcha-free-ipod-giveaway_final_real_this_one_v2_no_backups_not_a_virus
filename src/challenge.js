import { Events } from "matter-js";

export class Challenge {
  _challengeIsComplete = false;

  dispose() {
    Events.off(this);
  }

  complete() {
    if (this._challengeIsComplete) return;

    this._challengeIsComplete = true;
    console.log("Challenge has completed");
    Events.trigger(this, "complete");
  }
}
