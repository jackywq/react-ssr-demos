const withLess = require('@zeit/next-less')

if(typeof require !== 'undefined'){
    require.extensions['.less']= file => {}
}

module.exports = withLess({
    lessLoaderOptions: {
        javascriptEnabled: true,
    },
})