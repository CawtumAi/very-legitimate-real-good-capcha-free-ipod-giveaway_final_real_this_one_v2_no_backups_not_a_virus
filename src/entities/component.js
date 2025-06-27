import { Subscription } from "../subscription";

export class Component {
  constructor() {
    /**
     * @type {Subscription[]}
     */
    this._subscriptions = [];
  }

  dispose() {
    for (const subscription of this._subscriptions) {
      subscription.dispose();
    }
    this._subscriptions.length = 0;
  }

  subscribeTo(object, event, callback) {
    this._subscriptions.push(
      new Subscription(object, event, callback.bind(this))
    );
  }
}
