import { PhysicsChallenge } from "../physics-challenge.js";
import { DoorPlayScreen } from "./states/door-play-screen.js";

export class DoorChallenge extends PhysicsChallenge {
  /**
   * @param {HTMLCanvasElement} canvas
   * @param {import("../sprite").Sprites} sprites
   * @param {Object[]} levelDef
   * @param {number} difficulty
   */
  constructor(canvas, sprites, levelDef, difficulty) {
    super(canvas, sprites, levelDef, difficulty);

    this.state = new DoorPlayScreen(this);

    this.state.enter();
  }
}
