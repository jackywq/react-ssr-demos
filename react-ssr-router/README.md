## 项目说明
一个使用路由的服务端渲染

## 使用技术栈
``` react + redux + react-router + webpack + express ```

## script说明
```npm-run-all --parallel dev:*```

并行启动多个命令

```nodemon```

node监控工具, 监控node.js源代码变化

```dev:build-server```

对服务端渲染的代码，打包到build文件夹下

```dev:build-client```
对客户端的代码，修改后进行实时监听

## script启动
```bash
# 安装依赖
npm install 

# 本地启动服务端渲染
npm run dev:server
```
## [参考](https://github.com/StephenGrider/ReactSSRCasts)