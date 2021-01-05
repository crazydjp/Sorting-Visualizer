// ## This component includes a range slider for changing Animation Speed. ## //

import React, { Component } from "react";
import { Slider, withStyles } from "@material-ui/core";
import "./AnimationSpeedRangeSlider.css";

const AnimationSpeedSlider = withStyles({
  root: {
    color: "rgba(100, 180, 255, 1)",
    inlineSize: "60%",
    padding: 10,
  },
  thumb: {
    height: 12,
    width: 12,
    backgroundColor: "#fff",
    border: "2px solid cyan",
    marginTop: -4,
    marginLeft: 0,
  },
  active: {},
  track: {
    height: 4,
    borderRadius: 4,
  },
  rail: {
    height: 4,
    borderRadius: 4,
  },
})(Slider);

export default class AnimationSpeedRangeSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animationSpeed: this.props.animationSpeed,
    };
  }

  render() {
    return (
      <div className="range-slider-container">
        <p id="text-animation-speed">Animation Speed (ms)</p>
        <AnimationSpeedSlider
          id="animationSpeedSlider"
          min={10}
          max={200}
          defaultValue={this.state.animationSpeed}
          valueLabelDisplay="auto"
          onChangeCommitted={this.props.onChangeAnimationSpeedRangeSlider}
        />
      </div>
    );
  }
}
