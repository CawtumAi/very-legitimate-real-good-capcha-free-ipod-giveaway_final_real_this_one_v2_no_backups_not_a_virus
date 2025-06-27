const webpack = require("webpack");
const { merge } = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  devtool: false,
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
    new TerserPlugin({
      terserOptions: {
        compress: false,
        mangle: false,
        format: {
          beautify: true,
          comments: true,
          indent_level: 2,
        },
      },
    }),
  ],
});
