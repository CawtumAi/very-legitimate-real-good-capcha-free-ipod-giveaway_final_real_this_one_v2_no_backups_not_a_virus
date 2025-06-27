import { Body, Common, Composite } from "matter-js";
import { Entity } from "./entity";
import { CaptchaPlugin } from "../captcha-plugin";
import config from "../config";
import { Hopper } from "./hopper";
import { Pushable } from "./pushable";
import { HitSounder } from "./hit-sounder";
import { Destroyable } from "./destroyable";

export class Critter extends Entity {
  /**
   *
   * @param {Challenge} challenge
   * @param {Matter.Body} body
   * @param {string} image
   * @param {string} type
   * @param {*} def
   */
  constructor(challenge, body, image, type, def) {
    super(challenge);
    body.plugin = new CaptchaPlugin(this.id);
    this.body = body;

    this.image = image;
    this.type = type;
    this.def = Common.clone(def);

    this.registerDraw(this._onDraw, 100);

    if (config.hoppers.some((e) => this.type == e)) {
      this.components.push(new Hopper(this));
    }
    this.components.push(new Pushable(this));
    this.components.push(new HitSounder(this));
    this.components.push(new Destroyable(this));
  }

  onRemoved() {
    Composite.remove(this.world, this.body);
    super.onRemoved();
  }

  _onDraw() {
    this.challenge.renderer.sprite(this.challenge.sprites[this.image], {
      rotation: this.body.angle,
      x: this.body.position.x,
      y: this.body.position.y,
    });
  }
}
