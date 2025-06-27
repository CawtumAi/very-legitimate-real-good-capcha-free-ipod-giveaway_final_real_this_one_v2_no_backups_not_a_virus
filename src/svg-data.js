export class SvgData {
  /**
   * @param {number} x
   * @param {number} y
   * @param {PathData[]} paths
   * @param {CanvasImageSource} spriteSheet
   * @param {BakedSvg[]} baked
   */
  constructor(width, height, paths, spriteSheet, baked) {
    this.width = width;
    this.height = height;
    this.paths = paths;
    this.spriteSheet = spriteSheet;
    this.baked = baked;
  }
}
