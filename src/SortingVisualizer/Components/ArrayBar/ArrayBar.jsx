// ## This component includes all the 3D bars/containers and array values. ## //

import React, { Component } from "react";
import "./ArrayBar.css";

export default class BarContainer extends Component {
  render() {
    return (
      <div className="bar-container">
        {/* Create n bars, where n - size of the array */}
        {this.props.array.map((value, i) => (
          <div className="bar" key={i}>
            <div className="side top"></div>
            <div className="side bottom"></div>
            <div className="side right">
              <div
                className="color-bar right-color-bar"
                style={{
                  height: `${value}vh`,
                  transform: `translateY(${70 - value}vh)`,
                }}
              ></div>
            </div>
            <div className="side left">
              <div
                className="color-bar left-color-bar"
                style={{
                  height: `${value}vh`,
                  transform: `translateY(${70 - value}vh)`,
                }}
              ></div>
            </div>
            <div className="side front">
              <div
                className="color-bar front-color-bar"
                style={{
                  height: `${value}vh`,
                  transform: `translateY(${70 - value}vh)`,
                }}
              ></div>
            </div>
            <div className="side back">
              <div
                className="color-bar back-color-bar"
                style={{
                  height: `${value}vh`,
                  transform: `translateY(${70 - value}vh)`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
