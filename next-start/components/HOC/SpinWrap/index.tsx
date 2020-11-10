import React from "react";
import { Spin } from "antd";

interface IState {
  spinning: boolean;
}

interface IProps {
  startSpin: () => void;
  stopSpin: () => void;
  isSpin: boolean;
}

export const tuple = <T extends string[]>(...args: T) => args;
const sizeTypes = tuple("default", "small", "large");
export type sizeType = typeof sizeTypes[number];

interface IParams {
  spinning?: boolean;
  size?: sizeType;
}

export default ({ spinning = false, size = "large" }: IParams = {}) => (
  WrappedComponent: any
): any => {
  return class SpinWrap extends React.Component<IProps, IState> {
    constructor(props) {
      super(props);
    }

    state: IState = {
      spinning,
    };

    // 开始加载
    start = () => {
      this.setState({
        spinning: true,
      });
    };

    // 结束加载
    stop = () => {
      this.setState({
        spinning: false,
      });
    };

    render() {
      return (
        <Spin spinning={this.state.spinning} size={size}>
          <WrappedComponent
            {...this.props}
            startSpin={this.start}
            stopSpin={this.stop}
            isSpin={this.state.spinning}
          />
        </Spin>
      );
    }
  };
};
