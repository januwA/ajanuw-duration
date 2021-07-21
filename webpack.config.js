module.exports = {
  mode: "production",
  entry: {
    "ajanuw-duration": "src/index.ts",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: "tsconfig.build.json",
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: "dist",
    library: "AjanuwDuration",
    libraryTarget: "umd",
    globalObject: "this",
  },
};
