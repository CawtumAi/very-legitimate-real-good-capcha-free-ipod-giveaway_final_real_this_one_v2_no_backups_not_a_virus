import { default as rough } from "roughjs/bin/rough.js";

import { Vector } from "matter-js";
import { RoughCanvas } from "roughjs/bin/canvas";
import { Sprite, Sprites, SpriteSheetCell } from "./sprite";
import { inverseRotatePoint } from "./renderer";
import { SvgData } from "./svg-data";

/**
 * @typedef {Object} Rule
 * @property {string} id
 * @property {number} numVariations
 * @property {number} scale
 * @property {import("roughjs/bin/core.js").Options} options
 */

/**
 * @typedef {Object} Operation
 * @property {SvgData} data
 * @property {number} scale
 */

export class SpriteSheetGenerator {
  /**
   * @param {HTMLCanvasElement} canvas
   * @param {Object.<string, Rule>} rules
   * @returns {Promise.<Sprites>}
   */
  async create(canvas, rules) {
    /** @type {Operation[]} */
    const operations = [];

    for (const [name, rule] of Object.entries(rules)) {
      const svgData = parseSvgXml(rule.id, rule.options);

      for (let index = 0; index < rule.numVariations; index++) {
        operations.push(new Operation(name, svgData, rule));
      }

      await new Promise((resolve) => setTimeout(resolve, 0));
    }

    operations.sort((a, b) => {
      b.data.height - a.data.height;
    });

    const ctx = canvas.getContext("2d");
    const rc = rough.canvas(canvas);
    const width = canvas.width;
    const height = canvas.height;
    const padding = 16;
    let xOff = 0;
    let yOff = 0;
    let rowHeight = 0;

    const cells = [];

    for (const { name, data, rule } of operations) {
      const sWidth = data.width * 2 * (rule.scale ?? 1.0);
      const sHeight = data.height * 2 * (rule.scale ?? 1.0);
      rowHeight = Math.max(rowHeight, sHeight);
      if (xOff + sWidth + padding > width) {
        yOff += rowHeight + padding;
        xOff = padding;
        rowHeight = sHeight;
        console.assert(yOff + rowHeight < height);
      }
      renderSvg(rc, ctx, data, {
        x: xOff + sWidth / 2,
        y: yOff + sHeight / 2,
        scale: rule.scale ?? 1,
      });

      cells.push({
        name: name,
        cell: new SpriteSheetCell(xOff, yOff, sWidth, sHeight),
      });

      xOff += sWidth + padding;

      await new Promise((resolve) => setTimeout(resolve, 0));
    }

    const grouped = cells.reduce((acc, item) => {
      const key = item.name;
      if (!acc[key]) {
        acc[key] = new Sprite(item.name, canvas, []);
      }
      acc[key].variations.push(item.cell);
      return acc;
    }, {});

    console.log("Sprite sheet generated");
    return grouped;
  }
}

class Operation {
  /**
   * @param {string} name
   * @param {SvgData} data
   * @param {Rule} rule
   */
  constructor(name, data, rule) {
    console.assert(name != null);
    console.assert(data != null);
    console.assert(rule != null);

    this.name = name;
    this.data = data;
    this.rule = rule;
  }
}

/**
 * @param {string} elementId
 * @param {import("roughjs/bin/core.js").Options} options
 * @returns {SvgData}
 */
function parseSvgXml(elementId, options) {
  console.assert(elementId != null);
  console.log(elementId);
  /** @type {HTMLScriptElement} */
  const svgScript = document.getElementById(elementId);
  const svgText = svgScript.textContent.trim();

  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(svgText, "image/svg+xml");

  const svgNode = xmlDoc.querySelector("svg");
  const width = parseFloat(svgNode.getAttribute("width"));
  const height = parseFloat(svgNode.getAttribute("height"));

  const pathNodes = xmlDoc.querySelectorAll("path");

  const data = [];
  for (const node of pathNodes) {
    data.push(
      new PathData(node.getAttribute("id"), node.getAttribute("d"), {
        fill: node.getAttribute("fill"),
        stroke: node.getAttribute("stroke"),
        hachureGap: 1.3,
        bowing: 40,
        roughness: 1,
        hachureAngle: 45,
        fillWeight: 1.0,
        strokeWidth: 1.0,
        ...options,
      })
    );
  }
  return new SvgData(width, height, data);
}

/**
 * @param {RoughCanvas} rc
 * @param {CanvasRenderingContext2D} ctx
 * @param {SvgData} data
 * @param {DrawSvgOptions} options
 */
function renderSvg(rc, ctx, data, options) {
  ctx.save();

  const scale = options.scale ?? 1;
  const rotation = options.rotation ?? 0;

  ctx.scale(scale, scale);
  const offset = options.baked
    ? Vector.create(data.baked[0].width * 0.5, data.baked[0].height * 0.5)
    : Vector.create(data.width * 0.5, data.height * 0.5);
  ctx.rotate(rotation);
  ctx.translate(-offset.x, -offset.y);
  const inv = inverseRotatePoint(
    options.x * (1 / scale),
    options.y * (1 / scale),
    -offset.x * 0,
    -offset.y * 0,
    rotation
  );

  ctx.translate(inv.x, inv.y);

  for (const path of data.paths) {
    rc.path(path.path, {
      ...path.options,
      hachureAngle: Math.random() * 360,
      hachureGap: Math.random() + 0.5,
      seed: 1,
      fillStyle: Math.random() > 0.6 ? "solid" : null,
    });
  }

  ctx.restore();
}

class PathData {
  /**
   * @param {string} id
   * @param {string} path
   * @param {import("roughjs/bin/core.js").Options} options
   */
  constructor(id, path, options) {
    this.id = id;
    this.path = path;
    this.options = options;
  }
}
