import { Events } from "matter-js";

export class Subscription {
  constructor(object, event, callback) {
    console.assert(object != null);
    console.assert(event != null);
    console.assert(callback != null);

    this.object = object;
    this.event = event;
    this.callback = callback;
    Events.on(object, event, callback);
  }

  dispose() {
    if (this.object == null) return;

    Events.off(this.object, this.event, this.callback);
    this.object = null;
    this.event = null;
    this.callback = null;
  }
}
