#!/usr/bin/env node

import { readdirSync, readFileSync, writeFileSync } from "fs";
import { extname, basename, join } from "path";

/**
 * Reads all SVG files in the given directory and returns an object
 * where the keys are filenames (without extension) and the values are file contents.
 *
 * @param {string} dir - Directory to search
 * @returns {Object<string, string>} - Map of filename -> SVG content
 */
function readAllSVGs(dir) {
  const files = readdirSync(dir);
  const svgs = {};

  for (const file of files) {
    const ext = extname(file);
    if (ext.toLowerCase() === ".svg") {
      const name = basename(file, ext);
      const fullPath = join(dir, file);
      svgs[name] = readFileSync(fullPath, "utf8");
    }
  }

  return svgs;
}
const captchaFile = "../../captcha/captcha.html";
const captchaFileStr = readFileSync(captchaFile, "utf8");

const allSvgs = readAllSVGs("../../editor/images");

const blockOpen = "<!-- Begin SVG data -->";
const blockClose = "<!-- End SVG data -->";

const startBlockOpen = captchaFileStr.indexOf(blockOpen);
const startBlockClose = captchaFileStr.indexOf(blockClose);

const prepend = captchaFileStr.substring(0, startBlockOpen);
const append = captchaFileStr.substring(startBlockClose + blockClose.length);
let indentSize = 0;
for (let index = prepend.length - 1; index > 0; index--) {
  if (prepend.at(index) != " ") break;
  indentSize++;
}

const indent = " ".repeat(indentSize);
const svgDataIndent = " ".repeat(indentSize + 2);

const lines = [prepend, blockOpen, "\n"];
for (const [filename, xmlStr] of Object.entries(allSvgs)) {
  const id = `svg-data-${filename}`;
  lines.push(indent);
  lines.push(`<script type="image/svg+xml" id="${id}">\n`);
  for (const line of xmlStr.trim().split("\n")) {
    lines.push(svgDataIndent);
    lines.push(line);
    lines.push("\n");
  }
  lines.push(indent);
  lines.push("</script>\n");
}
lines.push(indent);
lines.push(blockClose);
lines.push(append);

writeFileSync(captchaFile, lines.join(""));
