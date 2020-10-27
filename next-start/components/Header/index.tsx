import React, { Component } from "react";
import Router from "next/router";
import { Row, Col, Menu, Layout } from "antd";
import "./index.less";

export interface IState {
  activeKey: string;
}

export default class Header extends Component<any, IState> {
  state: IState = {
    activeKey: "home",
  };

  componentDidMount() {
    const { pathname } = window.location;

    if (pathname.indexOf("/") > -1) {
      this.setState({
        activeKey: pathname.replace("/", ""),
      });
    }
  }

  handleClick = (e) => {
    const activeKey = e.key;
    this.setState({ activeKey });
    Router.push(`/${activeKey}`);
    // url跳转别名设置
    // Router.push(`/${activeKey}`, '/1111');
  };

  render() {
    const { activeKey } = this.state;

    return (
      <div>
        <Layout>
          <Layout.Header className="header">
            <Row>
              <Col span={2}></Col>
              <Col sm={{ span: 24 }} xs={{ span: 24 }} lg={{ span: 17 }}>
                <Menu
                  onClick={this.handleClick}
                  selectedKeys={[activeKey]}
                  theme="dark"
                  mode="horizontal"
                >
                  <Menu.Item key="home">首页</Menu.Item>
                  <Menu.Item key="films">电影列表</Menu.Item>
                  <Menu.Item key="account">计数器</Menu.Item>
                </Menu>
              </Col>
            </Row>
          </Layout.Header>
        </Layout>
      </div>
    );
  }
}
