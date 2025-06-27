import { Runner } from "matter-js";
import { DoorChallengeState } from "./door-challenge-state";
import { DoorChallenge } from "../door-challenge";

export class DoorPlayScreen extends DoorChallengeState {
  /**
   * @param {DoorChallenge} challenge
   */
  constructor(challenge) {
    super();
    this.challenge = challenge;
  }

  enter() {
    this.challenge.run();
    this.challenge.loadLevel();
  }
  dispose() {}
  update(delta) {}
}
