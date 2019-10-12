import React, { useState } from "react";
import Sketch from "react-p5";

const SketchTest: React.FC = props => {
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);

  const setup = (p5, parent) => {
    p5.createCanvas(500, 500).parent(parent);
  };

  const draw = p5 => {
    p5.background(0);
    p5.ellipse(x, y, 70, 70);
    setX(x + 1);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default SketchTest;
