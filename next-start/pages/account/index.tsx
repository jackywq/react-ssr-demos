import React, { Component } from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../../redux/account/action";

export interface IProps {
  incrementCount: () => void;
  decrementCount: () => void;
  resetCount: () => void;
  accountReducer: {
    count: number;
  };
}

class Account extends Component<IProps> {
  handleIncrement = () => {
    this.props.incrementCount();
  };

  handleDecrement = () => {
    this.props.decrementCount();
  };

  handleReset = () => {
    this.props.resetCount();
  };

  render() {
    const {
      accountReducer: { count },
    } = this.props;

    return (
      <div>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <Button onClick={this.handleIncrement}>+1</Button>
        <Button onClick={this.handleDecrement}>-1</Button>
        <Button onClick={this.handleReset}>重置</Button>
      </div>
    );
  }
}

export default connect(
  (state) => state,
  (dispatch) => bindActionCreators(Actions, dispatch)
)(Account);
