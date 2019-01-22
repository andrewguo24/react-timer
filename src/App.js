import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0
  };

  handleStart = () => {
    this.timerStart = setInterval(() => {
      this.setState(prevState => ({ count: prevState.count + 1 }));
    }, 1000);
  };

  handlePause = () => {
    clearInterval(this.timerStart);
  };

  handleReset = () => {
    clearInterval(this.timerStart);
    this.setState({ count: 0 });
  };

  render() {
    const { count } = this.state;
    return (
      <div
        style={{
          textAlign: "center"
        }}
      >
        <h1>React Timer</h1>
        <div>{count}</div>
        <button onClick={this.handleStart}>Start</button>
        <button onClick={this.handlePause}>Pause</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default App;
