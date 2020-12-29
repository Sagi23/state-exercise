import React, { Component } from "react";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      isOver: false,
    };
  }
  render() {
    return (
      <div>
        <h1>My score is: {this.state.score}</h1>
      </div>
    );
  }
}

export default Game;
