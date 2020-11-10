import React, { Component } from "react";
import { withRouter } from "next/router";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IProps {}

class Detail extends Component<IProps> {
  render() {
    return <div>详情</div>;
  }
}

export default withRouter<any>(Detail);
