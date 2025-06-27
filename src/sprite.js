export class Sprite {
  /**
   * @param {string} name
   * @param {HTMLCanvasElement} spriteSheet
   * @param {SpriteSheetCell[]} variations
   */
  constructor(name, spriteSheet, variations) {
    this.name = name;
    this.spriteSheet = spriteSheet;
    this.variations = variations;
  }
}

export class SpriteSheetCell {
  /**
   * @param {number} xOff
   * @param {number} yOff
   * @param {number} sWidth
   * @param {number} sHeight
   */
  constructor(xOff, yOff, sWidth, sHeight) {
    this.xOff = xOff;
    this.yOff = yOff;
    this.sWidth = sWidth;
    this.sHeight = sHeight;
  }
}

export class Sprites {
  /** @type {Sprite} */
  bear;
  /** @type {Sprite} */
  moose;
  /** @type {Sprite} */
  whale;
  /** @type {Sprite} */
  rabbit;
  /** @type {Sprite} */
  wolf;
  /** @type {Sprite} */
  wolfLarge;
  /** @type {Sprite} */
  wolfTalkLarge;
  /** @type {Sprite} */
  pig;
  /** @type {Sprite} */
  elephant;
  /** @type {Sprite} */
  chicken;
  /** @type {Sprite} */
  cursor0;
  /** @type {Sprite} */
  cursor1;
  /** @type {Sprite} */
  cursor2;
  /** @type {Sprite} */
  touchCursor0;
  /** @type {Sprite} */
  touchCursor1;
  /** @type {Sprite} */
  touchCursor2;
  /** @type {Sprite} */
  door;
  /** @type {Sprite} */
  doorClosed;
}

export class AnimatedSprite {
  /**
   * @param {Sprite[]} sprites
   * @param {number} frameRate
   */
  constructor(sprites, frameRate) {
    this.sprites = sprites;
    this.frameRate = frameRate;
  }

  /**
   * @param {number} time
   * @returns {Sprite}
   */
  getFrame(time) {
    const index = Math.floor(time * this.frameRate) % this.sprites.length;

    return this.sprites[index];
  }
}
