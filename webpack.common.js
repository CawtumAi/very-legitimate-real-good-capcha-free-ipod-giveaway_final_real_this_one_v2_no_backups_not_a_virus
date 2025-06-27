const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "captcha.js",
    path: path.resolve(__dirname, "captcha/js"),
    clean: true, // clean dist folder on build
  },
};
