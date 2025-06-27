import { Events } from "matter-js";

import { SpriteSheetGenerator } from "./sprite-sheet-generator";
import { levels } from "./levels";
import { AdChallenge } from "./ad-challenge/ad-challenge";
import { DoorChallenge } from "./door-challenge/door-challenge";
import config, { debugConfig } from "./config";
import { LoadingChallenge } from "./loading-challenge";

export class Manager {
  constructor() {
    this.onChallengeComplete = this.onChallengeComplete.bind(this);
    this.onLoadingChallengeComplete =
      this.onLoadingChallengeComplete.bind(this);

    /** @type {HTMLCanvasElement} */
    this.canvas = document.getElementById("challenge");

    /** @type {import("./ad-challenge/ad-challenge").Challenge} */
    this._challenge = null;

    this.spritesheet = new OffscreenCanvas(2048, 4096);

    this.loadingChallengeCompleter = createCompleter();

    /** @type {import("./sprite").Sprites} */
    this.sprites = null;

    this.onKeyUp = this.onKeyUp.bind(this);
    this.startTime = performance.now();

    this.numChallengesCompleted = 0;

    this.plan = [
      () => {
        console.log("Challenge 0");
        if (!config.doorChallenge) return false;
        this.startDoorChallenge(0);
        return true;
      },
      () => {
        console.log("Challenge 1");
        if (!config.doorChallenge) return false;
        this.startDoorChallenge(1);
        return true;
      },
      () => {
        console.log("Challenge 2");
        if (!config.doorChallenge) return false;
        if (
          this.runTime < config.destroy.advancedDifficultyExpiry &&
          this.numChallengesCompleted < 5
        ) {
          return () => {
            this.startDoorChallenge(2);
            return true;
          };
        }
        return false;
      },
      () => {
        console.log("Challenge 3");
        if (!config.adChallenge) return false;
        this.startAdChallenge();
        return true;
      },
    ];
  }

  get runTime() {
    return (performance.now() - this.startTime) * 0.001;
  }

  planDifficulty(index) {
    return config.planDifficulty[
      index < config.planDifficulty.length
        ? index
        : config.planDifficulty.length - 1
    ];
  }

  async start() {
    const challenge = this.startLoadingChallenge();

    /** @type {HTMLScriptElement} */
    const configElement = document.getElementById("data-config");
    config.setValues(JSON.parse(configElement.textContent));

    challenge.configureLoadTime();

    await this._createSpriteSheet();
    await this.loadingChallengeCompleter.promise;

    window.addEventListener("keyup", this.onKeyUp);

    this.nextChallenge();
  }

  async _createSpriteSheet() {
    /** @type {HTMLScriptElement} */
    const element = document.getElementById("data-sprites");
    const definitions = JSON.parse(element.textContent);

    const generator = new SpriteSheetGenerator();
    this.sprites = await generator.create(this.spritesheet, definitions);
    console.log("Loaded sprites");
  }

  startLoadingChallenge() {
    const challenge = new LoadingChallenge(this.canvas);
    Events.on(challenge, "complete", this.onLoadingChallengeComplete);
    this.startChallenge(challenge);
    return challenge;
  }

  /**
   * @param {number} difficulty
   */
  startDoorChallenge(difficulty) {
    console.assert(this.sprites != null);

    const challenge = new DoorChallenge(
      this.canvas,
      this.sprites,
      levels.level,
      difficulty
    );
    Events.on(challenge, "complete", this.onChallengeComplete);

    this.startChallenge(challenge);
  }

  startAdChallenge() {
    const challenge = new AdChallenge(
      this.canvas,
      document.getElementById("captcha-video"),
      document.getElementById("image-mouse"),
      this.sprites
    );
    Events.on(challenge, "complete", this.onChallengeComplete);

    this.startChallenge(challenge);
  }

  /**
   * @param {import("./ad-challenge/ad-challenge").Challenge} challenge
   */
  startChallenge(challenge) {
    console.log("Start new challenge");
    this._challenge?.dispose();
    this._challenge = challenge;
  }

  completeCaptcha() {
    window.top.postMessage("success", "*");
  }

  onLoadingChallengeComplete() {
    this.loadingChallengeCompleter.resolve();
  }

  onChallengeComplete() {
    console.log(`Challenge completed in ${this.runTime}`);
    this.numChallengesCompleted++;

    this._challenge?.dispose();
    this._challenge = null;

    this.nextChallenge();
  }

  nextChallenge() {
    while (this.plan.length > 0) {
      const next = this.plan[0];

      const result = next();
      if (result === true) {
        this.plan.shift();
        return;
      } else if (result === false) {
        this.plan.shift();
      } else {
        this.plan.unshift(result);
      }
    }
    this.completeCaptcha();
  }

  /**
   * @param {KeyboardEvent} event
   */
  onKeyUp(event) {
    if (!debugConfig.isEnabled) return;

    switch (event.code) {
      case "KeyQ":
        this.startDoorChallenge(0);
        break;
      case "KeyW":
        this.startDoorChallenge(1);
        break;
      case "KeyE":
        this.startDoorChallenge(2);
        break;

      case "KeyR":
        this.startAdChallenge();
        break;

      case "KeyT":
        this.onChallengeComplete();
    }
  }
}

function createCompleter() {
  let resolve, reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });

  return { promise, resolve, reject };
}
