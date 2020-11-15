import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import Router from "next/router";
import Layout from "../components/Layout";
import withReduxStore from "../lib/with-redux-store";
import "antd/dist/antd.css";

// const routeChange = () => {
//   // Temporary fix to avoid flash of unstyled content
//   // during route transitions. Keep an eye on this
//   // issue and remove this code when resolved:
//   // https://github.com/vercel/next.js/issues/17464

//   const tempFix = () => {
//     const allStyleElems = document.querySelectorAll('style[media="x"]');
//     allStyleElems.forEach((elem) => {
//       elem.removeAttribute("media");
//     });
//   };
//   tempFix();
// };

// Router.events.on("routeChangeComplete", routeChange);
// Router.events.on("routeChangeStart", routeChange);

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
      <Provider store={reduxStore}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
