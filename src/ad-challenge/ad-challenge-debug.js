import { debugConfig } from "../config";
import { AdEducationScreen } from "./states/ad-education-screen";
import { AdFailureScreen } from "./states/ad-failure-screen";
import { AdPlayScreen } from "./states/ad-play-screen";
import { AdSuccessScreen } from "./states/ad-success-screen";

export class AdChallengeDebug {
  /**
   * @param {import('./ad-challenge').AdChallenge} challenge
   */
  constructor(challenge) {
    this.challenge = challenge;

    this.onKeyUp = this.onKeyUp.bind(this);

    window.addEventListener("keyup", this.onKeyUp);
  }

  dispose() {
    window.removeEventListener("keyup", this.onKeyUp);
  }

  /**
   * @param {KeyboardEvent} event
   */
  onKeyUp(event) {
    if (!debugConfig.isEnabled) return;

    switch (event.code) {
      case "Digit1":
        this.challenge.changeState(new AdEducationScreen(this.challenge));
        break;
      case "Digit2":
        this.challenge.changeState(new AdPlayScreen(this.challenge));
        break;
      case "Digit3":
        this.challenge.changeState(new AdFailureScreen(this.challenge));
        break;
      case "Digit4":
        this.challenge.changeState(new AdSuccessScreen(this.challenge));
        break;
    }
  }
}
