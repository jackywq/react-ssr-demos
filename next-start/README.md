## 项目描述
next服务端渲染脚手架

## 运行项目
```
// 打开对应的项目
cd next-start

// 本地代码调试
npm run dev

// 打包代码
npm run build


// 对打包好的代码进行测试【执行npm run start需要先执行npm run build, 否则会报错】
npm run start
```
## 功能

- 支持热加载
- antd
- redux
- koa
- less，支持cssModules

## 目录说明
```
|── build // 打包文件
|── components // 公共组件
|── lib // 第三方仓库
├── pages
    ├── _app.js  // 自定义app文件
    ├── _error.js  // 自定义错误页面
    ├── index.js  // 默认导出的页面
    ├── ... // 页面组件
├── redux  // redux状态管理
├── servers  // 管理所有文件的接口
├── static  // 存放静态文件
```

## 文件命名规范
 - redux文件夹下的模块命名需和pages命名保持一致
 - less文件格式需使用.module.less格式，方可使用cssModules语法