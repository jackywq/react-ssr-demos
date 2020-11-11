import React, { Component } from "react";
import { withRouter } from "next/router";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IProps {}

class Detail extends Component<IProps> {
  render() {
    return (
      <div style={{ width: 1000, height: 1000, fontSize: 30 }}>详情页</div>
    );
  }
}

export default withRouter<any>(Detail);
