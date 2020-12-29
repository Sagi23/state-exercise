import React, { Component } from "react";

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNum: 1,
      isWinner: false,
    };
    this.rand = this.rand.bind(this);
  }
  rand(e) {
    let rans = Math.floor(Math.random() * 10) + 1;
    this.setState({ currentNum: rans });
    if (rans === 7) {
      this.setState({ isWinner: true });
    }
  }
  render() {
    return (
      <div>
        <h1>Your number is: {this.state.currentNum}</h1>
        {this.state.isWinner ? (
          <h2>You win</h2>
        ) : (
          <button onClick={this.rand}>Random Number</button>
        )}
      </div>
    );
  }
}

export default Clicker;
