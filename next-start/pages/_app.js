import React from 'react'
import App, {Container} from 'next/app'
import {Provider} from 'react-redux'
import Header from '../components/Header'
import withReduxStore from '../lib/with-redux-store'
import "antd/dist/antd.less";


/**
 * routeChangeStart：路由切换时触发
 * 参考： https://nextjs.frontendx.cn/docs/#%E5%8A%A8%E6%80%81%E5%AF%BC%E5%85%A5
*/
// Router.events.on('routeChangeStart', url => {
//     console.log('url :>> ', url);
//     if (url.indexOf('about') > 0){
//         Router.push('/nopermission')
//     }
// })

// 官网地址： https://nextjs.frontendx.cn/docs/#%E8%87%AA%E5%AE%9A%E4%B9%89%3Capp%3E
class Layout extends React.Component {
  render () {
    const {children} = this.props
    return (
        <div className='layout'>
            {children}
        </div>
    )
  }
}

class MyApp extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
        <Container>
            <Provider store={reduxStore}>
                <Layout>
                    <Header />
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        </Container>
    )
  }
}

export default withReduxStore(MyApp);
