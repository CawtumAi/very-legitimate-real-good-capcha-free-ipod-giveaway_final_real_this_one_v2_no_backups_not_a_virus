import { Composite, Engine, Events, Runner } from "matter-js";

import { EntityCollision } from "./entities/entity.js";

import { Renderer } from "./renderer.js";
import { Challenge } from "./challenge.js";
import config from "./config.js";
import { LevelProcessor } from "./level-processor.js";
import { CaptchaPlugin } from "./captcha-plugin.js";

export class PhysicsChallenge extends Challenge {
  /**
   * @typedef {Object} DrawCallback
   * @property {function(): void} callback
   * @property {number} depth
   */

  /**
   * @param {HTMLCanvasElement} canvas
   * @param {import("../sprite").Sprites} sprites
   * @param {Object[]} levelDef
   * @param {number} difficulty
   */
  constructor(canvas, sprites, levelDef, difficulty) {
    super();
    this.renderer = new Renderer(canvas);
    this.levelDef = levelDef;
    console.log(`Challenge difficulty: ${difficulty}`);
    this.difficulty = difficulty;

    this.delta = 0.0;

    /** @type {import('./entities/entity').Entity[]} */
    this.entities = [];

    this.entityCache = {};
    this.sprites = sprites;
    this.maxFps = config.physics.maxFps;

    /** @type {DrawCallback[]} */
    this.drawCallbacks = [];

    this.collisionCount = {};

    /** @type {Matter.Engine} */
    this.engine = Engine.create();
    this.engine.enableSleeping = false;

    this.onCollisionStart = this.onCollisionStart.bind(this);
    this.onCollisionEnd = this.onCollisionEnd.bind(this);
    this.beforeUpdate = this.beforeUpdate.bind(this);
    this.onAfterUpdate = this.onAfterUpdate.bind(this);

    this.runner = Runner.create();
  }

  run() {
    Runner.run(this.runner, this.engine);

    Events.on(this.engine, "collisionStart", this.onCollisionStart);
    Events.on(this.engine, "collisionEnd", this.onCollisionEnd);

    Events.on(this.engine, "beforeUpdate", this.beforeUpdate);
    Events.on(this.engine, "afterUpdate", this.onAfterUpdate);
  }

  /**
   * @param {Matter.Engine} engine
   * @param {Renderer} renderer
   */
  loadLevel() {
    this.timeToNewSeed = 0;
    console.log("Initialize challenge");

    new LevelProcessor(this).processLevelDef(this.levelDef);
  }

  dispose() {
    console.log("Dispose door challenge");
    this.state.dispose();
    for (const ent of this.entities) {
      ent.onRemoved();
    }
    this.entities.length = 0;

    Engine.clear(this.engine);

    if (this.runner.enabled) {
      Runner.stop(this.runner);
    }

    Events.off(this.engine);
    Events.off(this);
    super.dispose();
  }

  /**
   * @param {Matter.IEventCollision} event
   */
  onCollisionStart(event) {
    for (const pair of event.pairs) {
      const parentA = _getBaseParent(pair.bodyA);
      const parentB = _getBaseParent(pair.bodyB);
      const entA = this.getEntity(parentA.plugin?.entity);
      const entB = this.getEntity(parentB.plugin?.entity);

      if (entA && entB) {
        this.trackCollisionStart(pair, entA, entB);
        this.trackCollisionStart(pair, entB, entA);
      } else {
        if (entA && !pair.bodyB.isSensor) {
          Events.trigger(entA, "bodyCollision", event);
        }
        if (entB && !pair.bodyA.isSensor) {
          Events.trigger(entB, "bodyCollision", event);
        }
      }
    }
  }

  /**
   * @param {Matter.Pair} pair
   * @param {Entity} entA
   * @param {Entity} entB
   */
  trackCollisionStart(pair, entA, entB) {
    this.collisionCount[entA.id] ??= {};
    this.collisionCount[entA.id][entB.id] =
      (this.collisionCount[entA.id][entB.id] ?? 0) + 1;
    if (this.collisionCount[entA.id][entB.id] == 1) {
      Events.trigger(
        entA,
        "collisionStart",
        new EntityCollision(pair, pair.bodyB, entB)
      );
    }
  }

  /**
   * @param {Matter.Pair[]} event
   */
  onCollisionEnd(event) {
    for (const pair of event.pairs) {
      const parentA = _getBaseParent(pair.bodyA);
      const parentB = _getBaseParent(pair.bodyB);
      const entA = this.getEntity(parentA.plugin?.entity);
      const entB = this.getEntity(parentB.plugin?.entity);

      if (entA && entB) {
        this.trackCollisionEnd(pair, entA, entB);
        this.trackCollisionEnd(pair, entB, entA);
      }
    }
  }

  /**
   * @param {Matter.Pair} pair
   * @param {Entity} entA
   * @param {Entity} entB
   */
  trackCollisionEnd(pair, entA, entB) {
    this.collisionCount[entA.id] ??= {};
    this.collisionCount[entA.id][entB.id] =
      (this.collisionCount[entA.id][entB.id] ?? 1) - 1;
    if (this.collisionCount[entA.id][entB.id] <= 0) {
      Events.trigger(
        entA,
        "collisionEnd",
        new EntityCollision(pair, pair.bodyB, entB)
      );
    }
  }

  addEntity(ent) {
    console.assert(ent != null);
    this.entities.push(ent);
    this.entityCache[ent.id] = ent;
  }

  /**
   * @param {number} id
   * @returns {Entity}
   */
  getEntity(id) {
    if (!id) return null;
    return this.entityCache[id];
  }

  /**
   * @param {import("matter-js").IEventTimestamped<Matter.Engine>} event
   */
  beforeUpdate(event) {
    this.delta = event.source.timing.lastDelta * 0.001;
    Events.trigger(this, "beforeUpdate");
  }
  seed = 1;
  framesSinceClear = 0;

  onAfterUpdate() {
    for (let i = this.entities.length - 1; i >= 0; i--) {
      const ent = this.entities[i];
      if (!ent.queueFree) continue;

      Events.trigger(this, "removingEntity", { id: ent.id });
      this.entities.splice(i, 1);
      delete this.entityCache[ent.id];
      ent.onRemoved();
      Events.trigger(this, "removedEntity", ent);
    }

    Events.trigger(this, "afterUpdate");

    this.timeToNewSeed -= this.delta;
    if (this.timeToNewSeed <= 0) {
      this.timeToNewSeed = 1 / this.maxFps;
      this.renderer.newSeed();
      this.seed += 1;
    } else {
      return;
    }
    if (this.framesSinceClear >= 0) {
      this.renderer.clear();
      this.framesSinceClear = 0;
    } else {
      this.framesSinceClear++;
    }

    for (const body of Composite.allBodies(this.engine.world)) {
      this.renderBody(body, this.renderer, this.seed);
    }

    for (const { callback } of this.drawCallbacks) {
      callback();
    }
    Events.trigger(this, "draw");
  }

  registerDraw(callback, depth) {
    this.drawCallbacks.push({ callback: callback, depth: depth });
    this.drawCallbacks.sort((a, b) => a.depth - b.depth);
  }

  unregisterDraw(callback) {
    const index = this.drawCallbacks.findIndex((e) => e.callback == callback);
    if (index == -1) return;

    this.drawCallbacks.splice(index, 1);
  }

  /**
   * @param {Matter.Body} body
   * @param {number[]} set
   */
  renderBody(body, renderer, seed) {
    if (body.plugin instanceof CaptchaPlugin) return;

    for (const part of body.parts) {
      if (part.id == body.id) continue;
      this.renderBody(part, renderer, seed);
    }
    if (body.parts.length > 1) return;
    if (body.isSensor) return;
    if (body.circleRadius) {
      renderer.circle(
        body.position.x,
        body.position.y,
        body.circleRadius,
        body.id ^ seed,
        -45 + (Math.random() * 45 - 22.5)
      );
    } else {
      this.renderer.rc.polygon(
        body.vertices.map((e) => [e.x, e.y]),
        {
          seed: body.id ^ this.seed,
        }
      );
    }
  }
}

/**
 * @param {Matter.Body} body
 */
function _getBaseParent(body) {
  let parent = body;
  while (parent.parent != null && parent.parent != parent) {
    parent = parent.parent;
  }
  return parent;
}
