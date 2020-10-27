import React, { Component } from "react";
import { withRouter } from "next/router";

export interface IProps {}

class Detail extends Component {
  render() {
    return <div>详情</div>;
  }
}

export default withRouter(Detail);
