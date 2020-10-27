module.exports = {
  // 让babel支持next中的所有用到的babel配置的插件
  presets: ["next/babel"],
  plugins: [
    // es6修饰器支持
    ["@babel/plugin-proposal-decorators", { legacy: true }],

    // 支持antd插件按需引入
    [
      "import",
      {
        libraryName: "antd",
        style: true,
      },
    ],
  ],
};
