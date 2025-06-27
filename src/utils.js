import { Vector } from "matter-js";
import { ZZFX, zzfx } from "zzfx";
import config from "./config";

/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} t
 * @returns {number}
 */
export function lerp(a, b, t) {
  return a + (b - a) * t;
}

/**

 * @param {Matter.Vector} a
 * @param {Matter.Vector} b
 * @param {number} t
 * @returns {Matter.Vector}
 */
export function lerpVector(a, b, t) {
  return Vector.create(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
}

/**
 * @param {number} x
 * @returns {number}
 */
export function easeOutBack(x) {
  const c1 = 1.70158;
  const c3 = c1 + 1;

  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
}

/**
 * @param {number} x
 * @returns {number}
 */
export function easeOutBounce(x) {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
}

export function easeOutCubic(x) {
  return 1 - Math.pow(1 - x, 3);
}

/**
 *
 * @param {number} x
 * @returns {number}
 */
export function easeInExpo(x) {
  return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
}

export function easeInOutBounce(x) {
  return x < 0.5
    ? (1 - easeOutBounce(1 - 2 * x)) / 2
    : (1 + easeOutBounce(2 * x - 1)) / 2;
}

/**
 * @param {number} n
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function wrap(n, min, max) {
  const range = max - min;
  return ((((n - min) % range) + range) % range) + min;
}

/**
 *
 * @param {number} x
 * @param {number} y
 * @param {number} ellipseX
 * @param {number} ellipseY
 * @param {number} radiusX
 * @param {number} radiusY
 * @returns
 */
export function isPointInEllipse(x, y, ellipseX, ellipseY, radiusX, radiusY) {
  const dx = x - ellipseX;
  const dy = y - ellipseY;
  return (dx * dx) / (radiusX * radiusX) + (dy * dy) / (radiusY * radiusY) <= 1;
}

export function isPointInRotatedEllipse(px, py, h, k, a, b, angleRad) {
  const cos = Math.cos(angleRad);
  const sin = Math.sin(angleRad);

  // Translate point to ellipse center
  const dx = px - h;
  const dy = py - k;

  // Rotate point by -angleRad
  const xRot = cos * dx + sin * dy;
  const yRot = -sin * dx + cos * dy;

  // Check against standard ellipse equation
  return (xRot * xRot) / (a * a) + (yRot * yRot) / (b * b) <= 1;
}

/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function randRange(min, max) {
  return Math.random() * (max - min) + min;
}

export function randItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 *
 * @param {Vector} a
 * @param {Vector} b
 * @returns {number}
 */
export function distance(a, b) {
  return Vector.magnitude(Vector.sub(a, b));
}

export const zzfxIndex = {
  volume: 0,
  randomness: 1,
  frequency: 2,
  waveShape: 3,
  shapeCurve: 4,
  attack: 5,
  decay: 6,
  sustain: 7,
  release: 8,
  sustainVolume: 9,
  slide: 10,
  deltaSlide: 11,
  pitchJump: 12,
  pitchJumpTime: 13,
  repeatTime: 14,
  tremolo: 15,
  noise: 16,
  bitCrush: 17,
  delay: 18,
  modulation: 19,
  filter: 20,
};

/**
 * @param {number[]} sound
 */
export function playSound(sound) {
  const globalVolume = config.globalVolume ?? 1.0;
  if (globalVolume != 1.0) {
    sound = [...sound];
    sound[zzfxIndex.volume] *= globalVolume;
  }
  if (sound[0] <= 0.0) return;
  zzfx(...sound);
}

export function formatStr(str, values) {
  return str.replace(/{(\w+)}/g, (match, key) => {
    return key in values ? values[key] : match;
  });
}

export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
