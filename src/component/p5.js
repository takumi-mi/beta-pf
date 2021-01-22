import React, { Component } from "react";
import Sketch from "react-p5";

export default class App extends Component {
  setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );
    p5.frameRate(this.fr);
  };

  draw = (p5) => {
    p5.fill(234, 31, 81);
    p5.noStroke();
    p5.rect(50, 50, 250, 250);
    p5.fill(255);
    p5.textStyle(p5.BOLD);
    p5.textSize(140);
    p5.text("p5*", 60, 250);
  };

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />;
  }
}
