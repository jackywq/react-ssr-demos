const withLessExcludeAntd = require("./next-less.config.js");

// 当节点需要less文件时，防止错误
if(typeof require !== 'undefined'){
    require.extensions['.less']= file => {}
}

module.exports = withLessExcludeAntd({
    // 自定义构建目录
    distDir: 'build',

    // 支持less
    lessLoaderOptions: {
        javascriptEnabled: true,
    },
})