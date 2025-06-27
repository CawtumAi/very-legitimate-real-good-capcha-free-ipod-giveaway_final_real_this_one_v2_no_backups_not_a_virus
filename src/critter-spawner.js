import Matter, { Common, Vector } from "matter-js";
import { Entity } from "./entities/entity";
import { Challenge } from "./challenge";
import { LevelProcessor } from "./level-processor";
import { randItem } from "./utils";
import config from "./config";
import { Critter } from "./entities/critter";

let nextId = 1000000;

export class CritterSpawner extends Entity {
  /**
   * @param {Challenge} challenge
   * @param {Matter.Vector} position
   */
  constructor(challenge, position) {
    super(challenge);
    this.position = Vector.clone(position);
    this.queue = [];
    this.spawnCooldown = 0.0;
    this.maxQueueSize = config.maxSpawnerQueue;

    this.subscribeTo(this.challenge, "afterUpdate", this.onAfterUpdate);
  }

  onAfterUpdate() {
    this.spawnCooldown -= this.challenge.delta;
    if (this.spawnCooldown <= 0 && this.queue.length > 0) {
      const def = this.queue.shift();
      this.spawn(def);
    }
  }

  queueSpawn(type) {
    const id = nextId;
    nextId++;
    const def = {
      bounce: Math.random(),
      collisionLayer: 1,
      collisionMask: 1,
      critterType: type,
      friction: 1.0,
      globalPosition: {
        x: this.position.x,
        y: this.position.y,
      },
      globalRotation: 0.0,
      gravityScale: 1.0,
      id: id,
      isBody: true,
      mass: 1.0,
      name: "Critter" + id,
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      rotation: 0.0,
      type: "Critter",
    };
    this.queue.push(def);
    if (this.queue.length > this.maxQueueSize) {
      this.queue.splice(0, this.queue.length - this.maxQueueSize);
    }
  }

  spawn(def) {
    this.spawnCooldown = config.spawnerCooldown;

    const numCritters = this.challenge.entities.reduce(
      (acc, ent) => (ent instanceof Critter ? acc + 1 : acc),
      0
    );
    if (numCritters >= config.maxCritters) {
      console.log("Max critters reached.");
      return;
    }

    const critter = new LevelProcessor(this.challenge).createCritter(
      this.challenge.engine,
      {
        ...Common.clone(def),
        globalPosition: Vector.clone(this.position),
      }
    );

    this.challenge.addEntity(critter);
  }
}
