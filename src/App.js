import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import boxes from "./mainData";
import Section from "./Section";
import circles from "./secData";
import Input from "./components/Input";

function App() {
  const [squares, setSquare] = React.useState(boxes);
  const [roundThings, setRoundThings] = React.useState(circles);

  function toggle(id) {
    setSquare((prevState) => {
      return prevState.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  function change(id) {
    setRoundThings((prevState) => {
      const newCircles = [];
      for (let i = 0; i < prevState.length; i++) {
        const currentCircle = prevState[i];
        if (currentCircle.id === id) {
          const updatedCircle = {
            ...currentCircle,
            on: !currentCircle.on,
          };
          newCircles.push(updatedCircle);
        } else {
          newCircles.push(currentCircle);
        }
      }
      return newCircles;
    });
  }
  const squareElements = squares.map((square) => (
    <Main key={square.id} id={square.id} on={square.on} toggle={toggle} />
  ));

  const circleElements = roundThings.map((circle) => (
    <Section key={circle.id} id={circle.id} on={circle.on} change={change} />
  ));

  return (
    <div>
      <Header />
      <div className="box--container">{squareElements}</div>
      <div className="circle--container">{circleElements}</div>
      <Input />
    </div>
  );
}

export default App;
