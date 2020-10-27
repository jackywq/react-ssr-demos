import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import Router from "next/router";
import Layout from "../components/Layout";
import withReduxStore from "../lib/with-redux-store";
import "antd/dist/antd.css";

/**
 * routeChangeStart：路由切换时触发
 * beforePopState: 拦截器, return false不会作拦截
 */
Router.events.on("routeChangeStart", (url) => {
  if (url.indexOf("detail") > 0) {
    Router.push("/nopermission");
  }
});

// Router.beforePopState(({ url, as, options }) => {
//     if (as !== "/other") {
//       window.location.href = as
//       return false
//     }

//     return true
// });

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
