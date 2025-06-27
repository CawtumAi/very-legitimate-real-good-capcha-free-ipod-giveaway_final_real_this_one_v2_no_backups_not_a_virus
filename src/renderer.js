import { default as rough } from "roughjs/bin/rough.js";
import { Sprite } from "./sprite";
import { Vector } from "matter-js";
import { RoughCanvas } from "roughjs/bin/canvas";
import {
  easeInOutBounce,
  easeOutBack,
  easeOutBounce,
  easeOutCubic,
  formatStr,
  lerp,
} from "./utils";

export class Renderer {
  /**
   * @param {HTMLCanvasElement} canvas
   */
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.rc = rough.canvas(canvas, {
      options: {
        seed: 100,
      },
    });
  }

  newSeed() {
    rough.newSeed();
  }

  clear() {
    const ctx = this.canvas.getContext("2d");

    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.fillStyle = "#f0f0f0";
    ctx.rect(0, 0, 390, 300);
    ctx.fill();
  }

  rectangle(x, y, width, height) {
    this.rc.rectangle(x - width / 2, y - height / 2, width, height, {
      fill: "red",
      bowing: 6,
      stroke: "green",
      strokeWidth: 3,
    });
  }

  circle(x, y, radius, seed, angle) {
    this.rc.circle(x, y, radius * 2, {
      fill: "red",
      bowing: 6,

      stroke: "green",
      strokeWidth: 0,
      hachureGap: 4 - Math.random(),
      hachureAngle: angle,
      roughness: 2,
      seed: seed,
    });
  }

  /**
   * @param {import("./sprite").Sprite} sprite
   * @param {DrawSvgOptions} options
   */
  sprite(sprite, options) {
    this.ctx.save();

    const cell =
      sprite.variations[Math.floor(Math.random() * sprite.variations.length)];

    const scale = options.scale ?? 1;
    const rotation = options.rotation ?? 0; //Math.PI * 2 * (frame / 30);

    this.ctx.scale(scale, scale);
    const offset = Vector.create(cell.sWidth * 0.5, cell.sHeight * 0.5);

    this.ctx.rotate(rotation);
    this.ctx.translate(-offset.x, -offset.y);
    const inv = inverseRotatePoint(
      options.x * (1 / scale),
      options.y * (1 / scale),
      -offset.x * 0,
      -offset.y * 0,
      rotation
    );

    this.ctx.translate(inv.x, inv.y);

    this.ctx.drawImage(
      sprite.spriteSheet,
      cell.xOff,
      cell.yOff,
      cell.sWidth,
      cell.sHeight,
      0,
      0,
      cell.sWidth,
      cell.sHeight
    );

    this.ctx.restore();
  }
}

export function inverseRotatePoint(px, py, cx, cy, angle) {
  // Translate point to origin
  const dx = px - cx;
  const dy = py - cy;

  // Apply inverse rotation (negative angle)
  const cos = Math.cos(-angle);
  const sin = Math.sin(-angle);

  const xNew = dx * cos - dy * sin;
  const yNew = dx * sin + dy * cos;

  // Translate back
  return {
    x: xNew + cx,
    y: yNew + cy,
  };
}

/**
 * @param {number} px
 * @param {number} py
 * @param {Matter.Body} body
 * @returns {number}
 */
export function toWorld(px, py, body) {
  const point = inverseRotatePoint(px, py, 0, 0, body.angle);
  point.x += body.position.x;
  point.y += body.position.y;
  return point;
}

function resetText(ctx) {
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
}

/**
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {*} messages
 * @param {number} time
 * @param {Object} contextVariables
 */
export function drawMessages(ctx, messages, time, contextVariables) {
  ctx.resetTransform();

  for (const line of messages) {
    let text = line.text;
    if (contextVariables !== undefined) {
      text = formatStr(text, contextVariables);
    }

    if (line.bevel !== false) {
      drawMessage(ctx, line, text, "black", 1, 1, time);
      resetText(ctx);
      drawMessage(ctx, line, text, "white", -1, -1, time);
      resetText(ctx);
    }
    drawMessage(ctx, line, text, null, 0, 0, time);
    resetText(ctx);
  }
}

/**
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {*} line
 * @param {string} text
 * @param {string} fillStyle
 * @param {number} xOff
 * @param {number} yOff
 * @param {number} time
 */
function drawMessage(ctx, line, text, fillStyle, xOff, yOff, time) {
  let x = line.x;
  let y = line.y;
  let rotation = line.rotation ?? 0;
  let visible = line.visible !== false ? 1.0 : 0.0;

  const to = line.to;
  if (to) {
    let t = Math.max(time - (to.delay ?? 0.0), 0.0) / to.duration;
    switch (to.loop) {
      case "repeat":
        t = t % 1.0;
        break;
      case "pingpong":
        t = Math.abs(1 - ((t + 1) % 2));
        break;
      default:
        t = Math.max(Math.min(t, 1.0), 0.0);
    }
    switch (to.easing) {
      case "easeOutBounce":
        t = easeOutBounce(t);
        break;
      case "easeOutBack":
        t = easeOutBack(t);
        break;
      case "easeInOutBounce":
        t = easeInOutBounce(t);
        break;
      case "easeOutCubic":
        t = easeOutCubic(t);
        break;
    }

    x = lerp(x, to.x ?? x, t);
    y = lerp(y, to.y ?? y, t);
    rotation = lerp(rotation, to.rotation ?? rotation, t);
    visible = lerp(visible, to.visible ?? visible ? 1.0 : 0.0, t);
  }

  if (fillStyle) {
    ctx.fillStyle = fillStyle;
  } else if (line.style) {
    ctx.fillStyle = line.style;
  }

  if (line.font) {
    ctx.font = line.font;
  }

  if (line.textAlign) {
    ctx.textAlign = line.textAlign;
  }

  if (line.textBasline) {
    ctx.textBaseline = line.textBaseline;
  }

  if (Math.round(visible)) {
    ctx.rotate(rotation);

    const p = inverseRotatePoint(x + xOff, y + yOff, 0, 0, rotation);
    ctx.fillText(text, p.x, p.y);

    ctx.resetTransform();
  }
}

export function drawGradient(ctx, width, height, cfg) {
  ctx.beginPath();

  const gradient = ctx.createLinearGradient(
    width * cfg.x0,
    height * cfg.y0,
    width * cfg.x1,
    height * cfg.y1
  );

  // Add color stops
  for (const [offset, color] of cfg.stops) {
    gradient.addColorStop(offset, color);
  }

  // Use the gradient as fill style
  ctx.rect(0, 0, width, height);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.closePath();
}

/**
 * @param {number} ctx
 * @param {number} x
 * @param {number} y
 * @param {number} radius
 * @param {number} lineWidth
 * @param {number} progress
 */
export function drawProgress(ctx, x, y, radius, lineWidth, progress) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.strokeStyle = "#eee";
  ctx.lineWidth = lineWidth;
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x, y, radius, -Math.PI / 2, -Math.PI / 2 + progress * Math.PI * 2);

  ctx.strokeStyle = "#09f";
  ctx.lineWidth = lineWidth;
  ctx.stroke();
  ctx.closePath();
}

/**
 * @param {number} ctx
 * @param {number} x
 * @param {number} y
 * @param {number} radius
 * @param {number} lineWidth
 * @param {number} speed
 * @param {number} offset
 */
export function drawIndeterminateProgress(
  ctx,
  x,
  y,
  radius,
  lineWidth,
  speed,
  offset
) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.strokeStyle = "#eee";
  ctx.lineWidth = lineWidth;
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  offset = speed * Math.PI * 2 * offset;
  ctx.arc(
    x,
    y,
    radius,
    -Math.PI / 2 + offset,
    -Math.PI / 2 + offset + Math.PI * 0.5
  );

  ctx.strokeStyle = "#09f";
  ctx.lineWidth = lineWidth;
  ctx.stroke();
  ctx.closePath();
}
