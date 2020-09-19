import React from "react";

export class Counter extends React.Component {
  state = {
    count: 0
  };

  Decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  Increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={this.Decrement}>decrement!</button>
        <button onClick={this.Increment}>INCREMENT!</button>
      </div>
    );
  }
}
