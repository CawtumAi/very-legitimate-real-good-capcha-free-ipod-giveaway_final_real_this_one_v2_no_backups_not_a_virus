const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: ".",
    open: true,
    hot: true,
    liveReload: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
});
