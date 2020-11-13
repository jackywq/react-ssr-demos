import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import Router from "next/router";
import Layout from "../components/Layout";
import withReduxStore from "../lib/with-redux-store";
import "antd/dist/antd.css";

/**
 * beforeHistoryChange 浏览器开始切换时触发
 */
Router.events.on("beforeHistoryChange", (url) => {
  if (url.indexOf("detail") > 0) {
    Router.push("/nopermission");
  }
});

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props as any;
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
