/* eslint-disable @typescript-eslint/no-var-requires */
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { merge } = require("webpack-merge")
const nodeExternals = require("webpack-node-externals")

const common = require("./webpack.common.js")

module.exports = merge(common, {
  devtool: "source-map",
  entry: ["./main.ts"],
  externals: [nodeExternals({})],
  mode: "production",
  plugins: [new CleanWebpackPlugin()],
})
