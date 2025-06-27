import {
  Bodies,
  Body,
  Composite,
  Constraint,
  Vector,
  Vertices,
} from "matter-js";
import { Windmill } from "./entities/windmill";
import { GravityWell } from "./entities/gravity-well";
import { GravityField } from "./entities/gravity-field";
import { Door } from "./door";
import { critterDefs } from "./critters";
import { Hopper } from "./entities/hopper";
import config from "./config";
import { PushController } from "./push-controller";
import { Entity } from "./entities/entity";
import { Challenge } from "./challenge";
import { Critter } from "./entities/critter";
import { Pushable } from "./entities/pushable";
import { HitSounder } from "./entities/hit-sounder";
import { Destroyer } from "./entities/destroyer";
import { Destroyable } from "./entities/destroyable";
import { DestroyEntityScenario } from "./entities/destroy-entity-scenario";
import { DeathDoor } from "./death-door";
import { CritterSpawner } from "./critter-spawner";

export class LevelProcessor {
  constructor(challenge) {
    this.challenge = challenge;
    this.engine = challenge.engine;
  }

  /**
   * @param {Matter.Engine} engine
   * @param {*} obj
   * @returns {Entity[]}
   */
  processLevelDef(levelDef) {
    for (const objDef of levelDef) {
      this._processDefinition(objDef);
    }
  }

  _processDefinition(obj) {
    const engine = this.engine;

    switch (obj.type) {
      case "DestroyEntityScenario": {
        const ent = new DestroyEntityScenario(this.challenge);
        this.challenge.addEntity(ent);
        return ent;
      }
      case "Windmill": {
        if (Math.random() < 0.1) return null;
        const ent = this._createWindmill(engine, obj);
        this.challenge.addEntity(ent);
        return ent;
      }
      case "GravityWell": {
        const ent = this._createGravityWell(engine, obj);
        this.challenge.addEntity(ent);
        return ent;
      }
      case "GravityField": {
        const ent = this._createGravityField(engine, obj);
        this.challenge.addEntity(ent);
        return ent;
      }
      case "Destroyer": {
        const ent = this._createDestroyer(engine, obj);
        this.challenge.addEntity(ent);
        return ent;
      }
      case "Door": {
        const ent = this._createDoor(engine, obj);
        this.challenge.addEntity(ent);
        return ent;
      }
      case "DeathDoor": {
        const ent = this._createDeathDoor(engine, obj);
        this.challenge.addEntity(ent);
        return ent;
      }
      case "Critter": {
        const ent = this.createCritter(engine, obj);
        this.challenge.addEntity(ent);
        return ent;
      }
      case "CritterSpawner": {
        const ent = this._createCritterSpawner(obj);
        this.challenge.addEntity(ent);
        return ent;
      }
      case "PushController": {
        const ent = this._createPushController(engine, obj);
        this.challenge.addEntity(ent);
        return ent;
      }
      default:
        return this._processBody(engine, obj);
    }
  }

  /**
   * @param {Matter.Engine} engine
   * @param {*} obj
   * @returns {Windmill}
   */
  _createWindmill(engine, obj) {
    const bodyDef = obj.children.find((e) => e.isBody === true);
    const body = this._processBody(engine, bodyDef);

    const pinDef = obj.children.find((e) => e.type === "Pin");

    const pin = Bodies.circle(
      pinDef.globalPosition.x,
      pinDef.globalPosition.y,
      0,
      {
        isStatic: true,

        collisionFilter: {
          group: 0,
          category: 0,
          mask: 0,
        },
      }
    );
    const constraint = Constraint.create({
      bodyA: body,
      bodyB: pin,
    });
    Composite.add(engine.world, [pin, constraint]);

    return new Windmill(this.challenge, body, bodyDef.constantTorque ?? 0.0);
  }

  /**
   *
   * @param {Matter.Engine} engine
   * @param {*} obj
   * @returns {GravityWell}
   */
  _createGravityWell(engine, obj) {
    const body = this._processBody(engine, obj);

    return new GravityWell(this.challenge, body, obj.gravity);
  }

  /**
   *
   * @param {Matter.Engine} engine
   * @param {*} obj
   * @returns {GravityField}
   */
  _createGravityField(engine, obj) {
    const body = this._processBody(engine, obj);

    return new GravityField(this.challenge, body, Vector.clone(obj.direction));
  }

  /**
   *
   * @param {Matter.Engine} engine
   * @param {*} obj
   * @returns {Destroyer}
   */
  _createDestroyer(engine, obj) {
    const body = this._processBody(engine, obj);

    return new Destroyer(this.challenge, body);
  }

  /**
   * @param {Matter.Engine} engine
   * @param {*} obj
   * @returns {Door}
   */
  _createDoor(engine, obj) {
    const body = this._processBody(engine, obj);

    return new Door(this.challenge, body);
  }

  /**
   * @param {Matter.Engine} engine
   * @param {*} obj
   * @returns {DeathDoor}
   */
  _createDeathDoor(engine, obj) {
    const body = this._processBody(engine, obj);

    return new DeathDoor(this.challenge, body);
  }

  /**
   * @param {Matter.Engine} engine
   * @param {*} obj
   * @returns {Critter}
   */
  createCritter(engine, obj) {
    const def = critterDefs.find((e) => e.critterType == obj.critterType);

    const body = this._processBody(engine, def);
    Body.setPosition(
      body,
      Vector.create(obj.globalPosition.x, obj.globalPosition.y)
    );
    Body.setAngle(body, obj.rotation);

    const spriteDef = def.children.find((e) => e.type == "Sprite2D");
    const image = getFileNameWithoutExtension(spriteDef.path);
    const critter = new Critter(
      this.challenge,
      body,
      image,
      obj.critterType,
      obj
    );

    return critter;
  }

  /**
   * @param {*} obj
   * @returns {CritterSpawner}
   */
  _createCritterSpawner(obj) {
    return new CritterSpawner(
      this.challenge,
      Vector.create(obj.globalPosition.x, obj.globalPosition.y)
    );
  }

  /**
   *
   * @param {Matter.Engine} engine
   * @param {*} obj
   * @returns {PushController}
   */
  _createPushController(engine, obj) {
    const touchDef = obj.children.find((e) => e.name == "Touch");
    const mouseDef = obj.children.find((e) => e.name == "Mouse");

    const touch = this._processDefinition(touchDef);
    console.assert(touch instanceof GravityWell);

    const mouse = this._processDefinition(mouseDef);
    console.assert(mouse instanceof GravityWell);

    return new PushController(this.challenge, touch, mouse, window);
  }

  _processBody(engine, obj) {
    switch (obj.type) {
      case "StaticBody2D":
        return this._createBody(engine, obj, true, false);
      case "GravityWell":
      case "GravityField":
      case "Destroyer":
      case "Door":
      case "DeathDoor":
      case "Area2D":
        return this._createBody(engine, obj, true, true);
      case "Critter":
      case "RigidBody2D":
        return this._createBody(engine, obj, false, false);
      default:
        return null;
    }
  }
  /**
   *
   * @param {Matter.Engine} engine
   * @param {*} obj
   * @param {bool} isStatic
   * @param {bool} isSensor
   * @returns {Matter.Body}
   */
  _createBody(engine, obj, isStatic, isSensor) {
    const friction = obj.friction;
    const bounce = obj.bounce;
    var parts = [];
    /**
     *
     * @returns {Matter.ICollisionFilter}
     */
    function collisionFilter() {
      return {
        mask: obj.collisionMask ?? 1,
        group: obj.collisionLayer ?? 1,
      };
    }

    for (const child of obj.children) {
      switch (child.type) {
        case "CollisionShape2D":
          switch (child.shape) {
            case "rectangle": {
              let body = Bodies.rectangle(
                child.globalPosition.x,
                child.globalPosition.y,
                child.size.x,
                child.size.y,
                {
                  mass: child.mass,
                  isStatic: isStatic,
                  isSensor: isSensor,
                  angle: child.globalRotation,
                  friction: friction,
                  restitution: bounce,
                  label: child.name,
                  collisionFilter: collisionFilter(),
                }
              );
              body.gravityScale = obj.gravityScale;

              parts.push(body);

              break;
            }
            case "circle": {
              const body = Bodies.circle(
                child.globalPosition.x,
                child.globalPosition.y,
                child.radius,
                {
                  mass: child.mass,
                  isStatic: isStatic,
                  isSensor: isSensor,
                  angle: child.globalRotation,
                  friction: friction,
                  restitution: bounce,
                  label: child.name,
                  collisionFilter: collisionFilter(),
                }
              );
              body.gravityScale = obj.gravityScale;
              parts.push(body);
              break;
            }
          }

          break;
        case "CollisionPolygon2D": {
          for (const polygon of child.polygons) {
            const verts = Vertices.fromPath(polygon.verts);

            const body = Bodies.fromVertices(
              child.globalPosition.x,
              child.globalPosition.y,
              verts,
              {
                mass: child.mass,
                isStatic: isStatic,
                isSensor: isSensor,
                friction: friction,
                restitution: bounce,
                label: child.name,
                collisionFilter: collisionFilter(),
              }
            );

            Body.setPosition(
              body,
              Vector.create(
                child.globalPosition.x + polygon.center.x,
                child.globalPosition.y + polygon.center.y
              )
            );
            body.gravityScale = obj.gravityScale;
            parts.push(body);
          }

          break;
        }
      }
    }

    // Composite.add(engine.world, [...parts]);
    if (parts.length > 1) {
      const compound = Body.create({
        parts: [...parts],
        isStatic: isStatic,
        isSensor: isSensor,
        friction: friction,
        restitution: bounce,
      });
      compound.label = obj.name;
      Composite.add(engine.world, [compound]);
      compound.gravityScale = obj.gravityScale;
      return compound;
    } else if (parts.length == 1) {
      parts[0].label = obj.name;
      Composite.add(engine.world, parts);
      return parts[0];
    } else {
      return null;
    }
  }
}

function getFileNameWithoutExtension(path) {
  const fileName = path.split("/").pop();
  return fileName.split(".").slice(0, -1).join(".");
}
