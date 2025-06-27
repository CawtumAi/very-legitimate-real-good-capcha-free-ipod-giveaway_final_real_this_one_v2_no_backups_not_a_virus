import { AdChallenge } from "./ad-challenge";

export class AdChallengeState {
  /**
   * @param {AdChallenge} challenge
   */
  constructor(challenge) {
    this.challenge = challenge;
  }
  dispose() {}

  enter() {}

  /**
   * @param {number} delta
   */
  update(delta) {}

  draw() {}
}
