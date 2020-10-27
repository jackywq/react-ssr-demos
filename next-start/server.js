const express = require("express");
const next = require("next");

// 获取端口
const port = parseInt(process.env.PORT, 10) || 3000;

// 获取当前环境
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

// 获取http请求的响应
const handle = app.getRequestHandler();

/**
 * 1. app.prepare：编译 pages 文件夹下面的页面文件
 * 2. 使用express声明server
 * 3. server.get('/**')自定义路由  server.get("*") http请求
 */
app.prepare().then(() => {
  const server = new express();

  server.get("/a", (req, res) => {
    return app.render(req, res, "/account", req.query);
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
