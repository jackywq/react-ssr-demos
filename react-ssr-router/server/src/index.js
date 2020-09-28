import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(
    '/api',
    proxy('http://react-ssr-api.herokuapp.com', {
        proxyReqOptDecorator(opts) {
            opts.headers['x-forwarded-host'] = 'localhost:3000';
            return opts;
        }
    })
);

// 使用静态资源目录
app.use(express.static('public'));

// 匹配任意路径
app.get('*', (req, res) => {
    const store = createStore(req);

    // 根据输入的url去整个路由数组里面去匹配，返回一个数组
    const promises = matchRoutes(Routes, req.path)
        .map(({ route }) => {
            // 获取加载的数据
            return route.loadData ? route.loadData(store) : null;
        })
        .map(promise => {
            if (promise) {
                return new Promise((resolve, reject) => {
                    promise.then(resolve).catch(resolve);
                });
            }
        });

    Promise.all(promises).then(() => {
        const context = {};
        /**
         * 1. 获取静态dom字符串模板
         * 2. 在staticRouter静态渲染过程中，组件可以向context对象添加属性，用于存储有关渲染信息
         * 参考： https://react-router.docschina.org/web/api/StaticRouter
        */
        const content = renderer(req, store, context);

        // url存在，渲染301
        if (context.url) {
            return res.redirect(301, context.url);
        }

        // url不存在，渲染404
        if (context.notFound) {
            res.status(404);
        }

        res.send(content);
    });
});

app.listen(3000, () => {
  console.log('Listening on prot 3000');
});
