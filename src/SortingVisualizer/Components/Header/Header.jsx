// ## This component includes an animated title / header with text "SORTING VISUALIZER". ## //

import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <p id="animateText">Sorting Visualizer</p>
      </div>
    );
  }
}
