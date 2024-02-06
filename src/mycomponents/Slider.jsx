import React from "react";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  render() {
    return (
      <div className="slider">
        <input
          type="range"
          min={0}
          max={100}
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <p>Value: {this.state.value}</p>
      </div>
    );
  }
}

export default Slider;
