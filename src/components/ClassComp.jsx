import React, { Component } from "react";

export default class ClassComp extends Component {
  // for state
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  // for state
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // life cycle
  componentDidMount() {
    // data fetching
    console.log("Component mounted");
  }
  componentWillUnmount() {
    // clean up
    console.log("Component Unmount");
  }
  render() {
    // UI
    return <div>life cycle</div>;
  }

  render() {
    return (
      <div>
        {/* for lifecycle */}
        <p>Lifecycle</p>

        {/* for state */}
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}
