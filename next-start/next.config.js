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
    // dev环境, 使用eslint-loader
    if (dev) {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            enforce: "pre",
            include: [
                path.resolve("components"),
                path.resolve("pages"),
                path.resolve("redux"),
            ],
            exclude: [/node_modules/, /.next/, /build/, /lib/],
            options: {
                configFile: path.resolve(".eslintrc"),
                eslint: {
                    configFile: path.resolve(__dirname, ".eslintrc"),
                },
            },
            loader: "eslint-loader",
        });
        }

        //自动解析后缀名
        config.resolve.extensions.concat([".ts", ".tsx", ".js", ".jsx", ".json"]);

        // 路径设置别名
        Object.assign(config.resolve.alias, {
            components: path.resolve(__dirname, "./components"),
            "@": path.resolve(__dirname, "./pages"),
        });

        return config;
    },
});
