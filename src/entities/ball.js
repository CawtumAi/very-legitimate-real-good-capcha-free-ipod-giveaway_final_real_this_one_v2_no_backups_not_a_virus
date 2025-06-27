import { zzfx } from "zzfx";
import { Entity, EntityCollision } from "./entity";
import { Composite, Vector } from "matter-js";
import { CaptchaPlugin } from "../captcha-plugin";
import { Challenge } from "../challenge";
import { GravityWell } from "./gravity-well";
import { GravityField } from "./gravity-field";

export class Ball extends Entity {
  /**
   * @type {Matter.Body}
   */
  body;

  /**
   *
   * @param {Challenge} challenge
   * @param {Matter.Body} body
   */
  constructor(challenge, body) {
    super(challenge);
    body.plugin = new CaptchaPlugin(this.id);
    this.body = body;
    this.prevVelocity = Vector.create(0, 0);
    this.prevPosition = Vector.clone(body.position);
    this.hitSoundTimeout = 0.0;
    this._gravityManipulator = 0;

    this.subscribeTo(challenge, "afterUpdate", this.onBeforeUpdate);
    this.subscribeTo(challenge, "draw", this.onDraw);
    this.subscribeTo(this, "collisionStart", this.onCollisionStart);
    this.subscribeTo(this, "collisionEnd", this.onCollisionEnd);
  }

  onRemoved() {
    Composite.remove(this.world, this.body);
    super.onRemoved();
  }

  update(delta) {
    this.hitSoundTimeout = Math.max(this.hitSoundTimeout - delta, 0.0);
    this.time += delta;
  }

  onBeforeUpdate() {
    this.prevVelocity.x = this.body.velocity.x;
    this.prevVelocity.y = this.body.velocity.y;
    this.prevPosition.x = this.body.position.x;
    this.prevPosition.y = this.body.position.y;
    const manipulator = this.challenge.getEntity(this._gravityManipulator);
    if (manipulator instanceof GravityWell) {
      const diff = Vector.sub(this.body.position, manipulator.body.position);

      let v = Vector.mult(Vector.normalise(diff), manipulator.gravity);
      v.x = Math.round(v.x / 0.25) * 0.25;
      v.y = Math.round(v.y / 0.25) * 0.25;
      this.body.plugin.gravity = v;
    } else if (manipulator instanceof GravityField) {
      this.body.plugin.gravity = Vector.clone(manipulator.direction);
    } else {
      this.body.plugin.gravity = null;
    }
  }

  /**
   * @param {EntityCollision} collision
   */
  onCollisionStart(collision) {
    if (collision.other instanceof GravityWell) {
      this._gravityManipulator = collision.other.id;
      return;
    }

    if (collision.other instanceof GravityField) {
      this._gravityManipulator = collision.other.id;
      return;
    }
    if (collision.otherBody.isSensor) return;

    const posDiff = Vector.magnitude(
      Vector.sub(this.prevPosition, this.body.position)
    );

    if (posDiff < 1) return;
    if (this.hitSoundTimeout > 0.0) return;
    this.hitSoundTimeout = 0.3;

    zzfx(
      ...[
        ,
        ,
        116,
        0.02,
        0.04,
        0.04,
        ,
        3.2,
        ,
        ,
        7,
        0.09,
        ,
        ,
        0.7,
        ,
        ,
        0.73,
        0.02,
        ,
        -1388,
      ]
    );
  }

  onCollisionEnd(collision) {
    if (collision.other instanceof GravityWell) {
      this._gravityManipulator = 0;
    }
    if (collision.other instanceof GravityField) {
      this._gravityManipulator = 0;
    }
  }

  onDraw() {
    // this.challenge.renderer.circle(
    //   this.body.position.x,
    //   this.body.position.y,
    //   this.body.circleRadius,
    //   this.id
    // );
  }
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}
