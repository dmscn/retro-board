const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/App.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    alias: {
      "@components": "./src/components",
      "@containers": "./src/containers",
      "@pages": "./src/pages",
      "@utils": "./src/utils",
      "@helpers": "./src/helpers",
      "@hooks": "./src/hooks"
    }
  },
  plugins: [new HTMLWebpackPlugin({ template: "./src/index.html" })]
};
