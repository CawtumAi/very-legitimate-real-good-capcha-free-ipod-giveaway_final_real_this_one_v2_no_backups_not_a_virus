import { Engine } from "matter-js";
import { Manager } from "./manager";
import config, { debugConfig } from "./config";
import { playSound } from "./utils";

/**
 * Applies gravitational acceleration to all `bodies`.
 * This models a [uniform gravitational field](https://en.wikipedia.org/wiki/Gravity_of_Earth), similar to near the surface of a planet.
 *
 * @method _bodiesApplyGravity
 * @private
 * @param {Matter.Body[]} bodies
 * @param {Matter.Vector} gravity
 */
Engine._bodiesApplyGravity = function (bodies, gravity) {
  var gravityScale =
      typeof gravity.scale !== "undefined" ? gravity.scale : 0.001,
    bodiesLength = bodies.length;

  for (var i = 0; i < bodiesLength; i++) {
    var body = bodies[i];

    if (body.isStatic || body.isSleeping) continue;
    let scale = gravityScale * (body.plugin?.gravityScale ?? 1.0);
    if (scale === 0) continue;
    let bodyGravity = body.plugin?.gravity ?? gravity;

    // add the resultant force of gravity
    body.force.y += body.mass * bodyGravity.y * scale;
    body.force.x += body.mass * bodyGravity.x * scale;
  }
};

(async () => {
  const prevKeys = [];
  window.addEventListener("keyup", (event) => {
    if (!config.allowDebug) return;

    prevKeys.push(event.code);
    if (prevKeys.length > 5) {
      prevKeys.splice(0, prevKeys.length - 5);
    }
    if (
      prevKeys[0] == "KeyD" &&
      prevKeys[1] == "KeyB" &&
      prevKeys[2] == "KeyG" &&
      prevKeys[3] == "KeyM" &&
      prevKeys[4] == "KeyD"
    ) {
      debugConfig.isEnabled = !debugConfig.isEnabled;
      console.log(`Debug mode: ${debugConfig.isEnabled}`);
      if (debugConfig.isEnabled) {
        playSound([
          1, 0.05, 234, 0.01, 0.26, 0.41, 0, 2.3, 0, 0, -184, 0.08, 0.02, 0, 0,
          0.1, 0, 0.84, 0.21, 0, 0,
        ]);
      } else {
        playSound([
          1.2, 0.05, 55, 0.08, 0.19, 0.5, 2, 1.5, 0, 0, 0, 0, 0, 0.9, 0, 0.8,
          0.3, 0.35, 0.29, 0, 1880,
        ]);
      }
    }
  });
  const manager = new Manager();
  await manager.start();
})();
