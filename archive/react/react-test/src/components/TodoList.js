import React from "react";

export class TodoList extends React.Component {
  state = {
    taskCount: 0,
    tasks: []
  };
  handleClick = () => {
    this.setState({ taskCount: this.state.taskCount + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Add task</button>
        <div>{this.state.tasks.map(task)}</div>
      </div>
    );
  }
}
