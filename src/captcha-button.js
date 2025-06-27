import { Events, Vector } from "matter-js";
import { isPointInRotatedEllipse, playSound } from "./utils";
import { inverseRotatePoint } from "./renderer";
import { zzfx } from "zzfx";
import config from "./config";

export class CaptchaButton {
  /**
   * @param {EllipticalButtonConfig} cfg
   */
  constructor(cfg) {
    this.cfg = cfg;

    this._isHovered = false;
    this.rotation = 0.0;
    this.position = Vector.create(cfg.position?.x ?? 0, cfg.position?.y ?? 0);
    this.timeSpent = 0.0;
    this.spinSpeed = cfg.spinSpeed ?? 0.0;
    this.rotationScale = cfg.rotationScale ?? 0.0;
    this.clickSound = cfg.clickSound ?? config.defaultButtonClickSound;
  }

  get isHovered() {
    return this._isHovered;
  }

  dispose() {
    Events.off(this);
  }

  set isHovered(value) {
    if (value == this._isHovered) return;
    this._isHovered = value;
    playSound(config.ad.failure.retryHoverSound);
  }

  /**
   * @param {number} x
   * @param {number} y
   * @returns {boolean}
   */
  pointIntersects(x, y) {
    return isPointInRotatedEllipse(
      x,
      y,
      this.position.x,
      this.position.y,
      this.cfg.radiusX,
      this.cfg.radiusY,
      this.rotation
    );
  }

  /**
   * @param {number} delta
   * @param {Matter.Vector} mousePos
   */
  update(delta, mousePos) {
    this.timeSpent += delta;
    let r = Math.sin(this.timeSpent * this.spinSpeed) * this.rotationScale;
    this.rotation = r;

    if (mousePos && this.pointIntersects(mousePos.x, mousePos.y)) {
      this.isHovered = true;
    } else {
      this.isHovered = false;
    }
  }

  checkClick(mousePos) {
    if (this.pointIntersects(mousePos.x, mousePos.y)) {
      playSound(this.clickSound);
      Events.trigger(this, "click");
    }
  }

  /**
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    ctx.save();
    ctx.rotate(this.rotation);

    const cfg = this.cfg;

    const pos = this.position;
    let { x: x0, y: y0 } = inverseRotatePoint(
      pos.x - 2,
      pos.y - 2,
      0,
      0,
      this.rotation
    );
    let { x: x1, y: y1 } = inverseRotatePoint(
      pos.x + 2,
      pos.y + 2,
      0,
      0,
      this.rotation
    );
    let { x, y } = inverseRotatePoint(pos.x, pos.y, 0, 0, this.rotation);

    const style = this.isHovered ? cfg.hoverStyle : cfg.style;

    ctx.strokeStyle = "#333";
    ctx.lineWidth = style.lineWidth;
    ctx.fillStyle = "#333";
    ctx.beginPath();
    ctx.ellipse(x1, y1, cfg.radiusX, cfg.radiusY, 0, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.strokeStyle = "#eee";
    ctx.lineWidth = style.lineWidth;
    ctx.fillStyle = "#eee";
    ctx.beginPath();
    ctx.ellipse(x0, y0, cfg.radiusX, cfg.radiusY, 0, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.strokeStyle = style.stroke;
    ctx.lineWidth = style.lineWidth;
    ctx.fillStyle = style.fillStyle;

    ctx.beginPath();
    ctx.ellipse(x, y, cfg.radiusX, cfg.radiusY, 0, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.font = style.font;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Shadow (bottom-right, dark)
    ctx.fillStyle = "#333";
    ctx.fillText(cfg.text, x + 2, y + 2);

    // Highlight (top-left, light)
    ctx.fillStyle = "#eee";
    ctx.fillText(cfg.text, x - 2, y - 2);

    // Main text (middle, colored)

    ctx.fillStyle = style.color;

    ctx.fillText(this.cfg.text, x, y);

    ctx.restore();
  }
}
