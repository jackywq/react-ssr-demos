const withLessExcludeAntd = require("./next-less.config.js");
const path = require("path");

// 当节点需要less文件时，防止错误
if (typeof require !== "undefined") {
  require.extensions[".less"] = () => {};
}

module.exports = withLessExcludeAntd({
  // 自定义构建目录
  distDir: "build",

  // 支持less
  lessLoaderOptions: {
    javascriptEnabled: true,
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.(ts|tsx)$/,
        enforce: "pre",
        include: [
          path.resolve("components"),
          path.resolve("pages"),
          path.resolve("redux"),
        ],
        exclude: [/node_modules/, /.next/],
        options: {
          configFile: path.resolve(".eslintrc"),
          eslint: {
            configFile: path.resolve(__dirname, ".eslintrc"),
          },
        },
        loader: "eslint-loader",
      });
      config.devtool = "source-map";
    }
    return config;
  },
});
