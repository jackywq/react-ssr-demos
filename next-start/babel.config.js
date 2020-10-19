module.exports = {
    // 让babel支持next中的所有用到的babel配置的插件
    "presets":["next/babel"],
    "plugins":[
        // ['@babel/plugin-proposal-decorators', { legacy: true }], // 修饰器支持，顺序必须在 `proposal-class-properties` 之前

        // 支持antd插件按需引入
        [
            "import",
            {
                "libraryName":"antd",
                // "style": true
            }
        ]
    ]
}