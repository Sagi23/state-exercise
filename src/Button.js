import React, { Component } from "react";

class Button extends Component {
  render() {
    return <button onClick={() => console.log("click")}>Click me</button>;
  }
}

export default Button;
