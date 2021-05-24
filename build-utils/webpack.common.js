/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")

const PROJECT_ROOT = path.resolve(__dirname, "..")
const SOURCE_ROOT = path.resolve(__dirname, "..", "src")

module.exports = {
  context: SOURCE_ROOT,
  module: {
    rules: [
      {
        exclude: [path.resolve(PROJECT_ROOT, "node_modules")],
        test: /\.ts$/,
        use: ['babel-loader'],
      },
    ],
  },
  output: {
    filename: "server.js",
    path: path.resolve(PROJECT_ROOT, "dist"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  target: "node",
}
