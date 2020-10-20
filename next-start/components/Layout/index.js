import React, { Fragment } from 'react';
import Head from 'next/head';
import Header from "../Header";
export default class Layout extends React.Component {
    render() {
      const { children } = this.props;
      return (
          <Fragment>
              <Head>
                  <meta name='viewport' content='width=device-width, initial-scale=1' />
                  <meta charSet='utf-8' />
                  <title>NEXT-START</title>
                  <link rel='shortcut icon' href='/../static/favicon.ico' type='image/ico'/>
              </Head>
              <Header />
              <div className="layout">{children}</div>
          </Fragment>
      )
    }
  }