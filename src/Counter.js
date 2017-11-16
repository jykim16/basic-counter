import React, { Component } from 'react';

// import Counter from './Counter';

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <section className="Counter">
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => {this.setState({count: this.state.count + 1})}} className="full-width">Increment</button>
        <button onClick={() => {this.setState({count: this.state.count - 1})}} className="full-width">Decrement</button>
        <button onClick={() => {this.setState({count: 0})}} className="full-width">Reset</button>
      </section>
    );
  }
}
