const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: process.env.NODE_ENV == "production" ? "production" : "development",
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  devtool: "source-map",
  devServer: {
    hot: true, //热更新插件
    static: path.join(__dirname, "dist"),
    historyApiFallback: {
      //browserHistory的时候，刷新会报404. 自动重定向到index.html
      index: "./index.html",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "~": path.resolve(__dirname, "node_modules"),
    },
    //扩展名: 加载文件没有指定扩展名时，自动寻找哪些扩展名
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: "ts-loader",
      },
      {
        enforce: "pre",
        test: /\.(j|t)sx?$/,
        loader: "source-map-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(jpg|png|gif|svg|jpeg)$/,
        use: ["url-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    //热更新插件,和hot:true配合使用
    new webpack.HotModuleReplacementPlugin(),
  ],
};
