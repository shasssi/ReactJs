const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const CompressionPlugin = require("compression-webpack-plugin");
// const BrotliPlugin = require("brotli-webpack-plugin");
// const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "[name].js",
    chunkFilename: "[name].js",
    publicPath:
      "/" /* added public path to fix the page refresh issue for lazy loaded componenet */,
  },
  devtool: "source-map",
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      (compiler) => {
        // Webpack 5 now uses terser-webpack-plugin by default for code uglify & minification.
        // uglifyjs-webpack-plugin is deprecated
        const TerserPlugin = require("terser-webpack-plugin");
        new TerserPlugin({
          terserOptions: {
            compress: true,
          },
          parallel: true,
          extractComments: false, // prevent creating separate LICENSE.txt files
        }).apply(compiler);
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "assets/images/[name].[ext]",
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.webp",
    }),
    new CopyPlugin({
      patterns: [{ from: "src/assets", to: "assets", toType: "dir" }],
    }),
    new Dotenv({
      systemvars: true, // FIX - Issue while picking env var used as process.env in production
    }),
    new CompressionPlugin({
      algorithm: "gzip",
      // algorithm: "brotliCompress",
      minRatio: Number.MAX_SAFE_INTEGER,
    }),
    // new BrotliPlugin(), /** deprecated */
    // new UglifyJSPlugin(), /** deprecated */
  ],
};
