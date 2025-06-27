import { Common } from "matter-js";
import config from "../config";
import { CritterSpawner } from "../critter-spawner";
import { PhysicsChallenge } from "../physics-challenge";
import { drawMessages } from "../renderer";
import { formatStr, playSound, randItem, shuffle } from "../utils";
import { Critter } from "./critter";
import { Entity } from "./entity";

export class DestroyEntityScenario extends Entity {
  /**
   * @param {PhysicsChallenge} challenge
   * @param {number} difficulty
   */
  constructor(challenge) {
    super(challenge);
    this.difficulty = this.challenge.difficulty ?? 1;

    this.lifeTime = 0;
    this.challengeCompleteChargeUp = 0.0;

    if (config.destroy.difficulty[this.difficulty].desireHoppers) {
      this.desiredType = randItem(config.hoppers);
    } else {
      const availableTypes = config.critters.filter((e) => {
        return config.hoppers.indexOf(e) == -1 && e != "moose";
      });
      this.desiredType = randItem(availableTypes);
    }
    this.numDesiredEvicted = 0;

    const evictCritters = [...config.critters];
    evictCritters.splice(evictCritters.indexOf(this.desiredType), 1);

    this.initialSpawn = [
      ...Array.from(
        {
          length:
            config.destroy.difficulty[this.difficulty].initialDesiredSpawnCount,
        },
        () => this.desiredType
      ),
      ...Array.from(
        {
          length:
            config.destroy.difficulty[this.difficulty].initialEvictSpawnCount,
        },
        () => randItem(evictCritters)
      ),
    ];

    shuffle(this.initialSpawn);

    this.spawnDelay = 0;

    this.subscribeTo(challenge, "beforeUpdate", this.onBeforeUpdate);
    this.subscribeTo(challenge, "afterUpdate", this.onAfterUpdate);
    this.subscribeTo(challenge, "removingEntity", this.onRemovingEntity);
    this.registerDraw(this.onDraw, 1000000);
  }

  onBeforeUpdate() {
    this.lifeTime += this.challenge.delta;
    this.spawnDelay -= this.challenge.delta;

    if (this.spawnDelay > 0.0) return;

    if (this.initialSpawn.length > 0) {
      this.queueSpawn(1, [this.initialSpawn.pop()]);

      this.spawnDelay =
        config.destroy.difficulty[this.difficulty].populateCooldown;
    } else if (this.spawnDelay <= 0.0) {
      let numDesired = 0;
      for (const ent of this.challenge.entities) {
        if (ent instanceof Critter) {
          if (ent.type == this.desiredType) {
            numDesired++;
          }
        }
      }

      if (
        numDesired < config.destroy.difficulty[this.difficulty].minDesiredCount
      ) {
        this.queueSpawn(1, [this.desiredType]);
        this.spawnDelay =
          config.destroy.difficulty[this.difficulty].populateCooldown;
      }
    }
  }

  onAfterUpdate() {
    if (this.lifeTime <= 4) return;

    let numToEvict = 0;
    for (const ent of this.challenge.entities) {
      if (ent instanceof Critter) {
        if (ent.type != this.desiredType) {
          numToEvict++;
        }
      }
    }
    if (numToEvict == 0) {
      this.challengeCompleteChargeUp += this.challenge.delta;
    } else {
      this.challengeCompleteChargeUp = 0;
    }

    if (this.challengeCompleteChargeUp > 2) {
      this.challenge.complete();
    }
  }

  onDraw() {
    /** @type {CanvasRenderingContext2D} */
    const ctx = this.challenge.renderer.ctx;

    let critterCount = this.challenge.entities.reduce(
      (acc, ent) => {
        if (ent instanceof Critter) {
          if (this.desiredType == ent.type) {
            acc.numDesired++;
          } else {
            acc.numToEvict++;
          }
          acc.total++;
        }
        return acc;
      },
      {
        numDesired: 0,
        numToEvict: 0,
        total: 0,
      }
    );

    ctx.save();

    drawMessages(ctx, config.destroy.messages, this.lifeTime, {
      ...critterCount,
      desiredType: this.desiredType,
      numDesiredEvicted: this.numDesiredEvicted,
    });

    ctx.restore();
  }

  /**
   * @param {{id: number}} id
   */
  onRemovingEntity(event) {
    const ent = this.challenge.getEntity(event.id);
    if (ent instanceof Critter) {
      let numToSpawn = 0;
      if (ent.type == this.desiredType) {
        playSound(config.badDestroySound);
        this.numDesiredEvicted++;
        const ramp = config.destroy.difficulty[this.difficulty].spawnCountRamp;
        let index = this.numDesiredEvicted - 1;
        if (index >= ramp.length) {
          index = ramp.length - 1;
        }

        numToSpawn = ramp[index];
      } else {
        playSound(config.destroySound);
      }

      let respawnTypes;
      if (config.destroy.difficulty[this.difficulty].canRespawnEvictTypes) {
        if (Math.random() > 0.66) {
          respawnTypes = [...config.critters];
          respawnTypes.splice(respawnTypes.indexOf("moose"), 1);
        } else {
          respawnTypes = config.critters;
        }
      } else {
        respawnTypes = [this.desiredType];
      }

      this.queueSpawn(numToSpawn, respawnTypes);
    }
  }

  queueSpawn(numToSpawn, critterPool) {
    if (numToSpawn == 0) return;
    const spawners = [];
    for (const ent of this.challenge.entities) {
      if (ent instanceof CritterSpawner) {
        spawners.push(ent);
      }
    }
    for (let i = 0; i < numToSpawn; i++) {
      randItem(spawners).queueSpawn(randItem(critterPool));
    }
  }
}
