import React, { Component } from "react";

class BrokenClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({ isClicked: true });
  }
  render() {
    return (
      <div>
        <h1>{this.state.isClicked ? "Clicked!" : "not Clicked"}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default BrokenClick;
