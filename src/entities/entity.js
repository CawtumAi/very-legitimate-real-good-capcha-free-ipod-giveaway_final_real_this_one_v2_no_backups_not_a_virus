import { Events } from "matter-js";
import { Subscription } from "../subscription";

let _nextId = 1;

export class Entity {
  /**
   * @type {number}
   */
  id;

  queueFree;
  /**
   * @type {Challenge}
   */
  challenge;

  _drawSubscriptions = [];

  /**
   * @returns {Matter.World}
   */
  get world() {
    return this.challenge.engine.world;
  }

  get canvas() {
    return this.challenge.renderer.canvas;
  }

  /**
   *
   * @param {Challenge} challenge
   */
  constructor(challenge) {
    this.id = _nextId++;
    this.challenge = challenge;
    this.queueFree = false;
    /**
     * @type {Subscription[]}
     */
    this._subscriptions = [];
    /** @type {import('./component').Component[]}*/
    this.components = [];
  }

  /**
   *
   * @param {number} delta
   */
  update(delta) {}

  onRemoved() {
    for (const component of this.components) {
      component.dispose();
    }
    for (const subscription of this._subscriptions) {
      subscription.dispose();
    }
    this._subscriptions.length = 0;
    for (const callback of this._drawSubscriptions) {
      this.challenge.unregisterDraw(callback);
    }
    Events.off(this);
  }

  subscribeTo(object, event, callback) {
    this._subscriptions.push(
      new Subscription(object, event, callback.bind(this))
    );
  }

  registerDraw(callback, depth) {
    callback = callback.bind(this);
    this._drawSubscriptions.push(callback);

    this.challenge.registerDraw(callback, depth);
  }
}

export class EntityCollision {
  /**
   *
   * @param {Matter.pair} pair
   * @param {Matter.Body} otherBody
   * @param {Entity} other
   */
  constructor(pair, otherBody, other) {
    this.pair = pair;
    this.otherBody = otherBody;
    this.other = other;
  }
}
