const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

/**
 * 1. 使用ReactDOMServer的renderToString将dom元素转化为字符串
 * 2. 使用fs.readFileSync读取index.html里的内容, 并转化为字符串
 * 3. 使用replace替换节点信息
*/
const ServerApp = require('../../dist/ServerApp.js').default;
const ReactDomServer = require('react-dom/server');
const AppString = ReactDomServer.renderToString(ServerApp);

const htmlTemplate = fs.readFileSync(path.join(__dirname, '../../dist/index.html'), 'utf8');

const newHtml = htmlTemplate.replace('<!--App -->', AppString);

// 将Express 托管的静态文件放置到public路径下面
app.use('/public', express.static(path.join(__dirname, '../../dist')))

app.get('/', (req, res) => {
    console.log(res);
    res.send(newHtml)
})

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server on port ${port}`))