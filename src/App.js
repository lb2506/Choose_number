import Choice from "./components/Choice";
import Number from "./components/Number";
import React, { useState } from "react";
import "./App.css";

const numbers = [1, 2, 3, 4, 5];

const App = () => {
  const [choice, setChoice] = useState("?");

  var handleClick = (num) => {
    setChoice(num);
  };

  return (
    <main>
      <section>
        <Number choice={choice} />
        <h1>Choisir un nombre...</h1>
        <div className="choice">
          {numbers.map((num) => (
            <Choice key={num} num={num} handleClickParent={handleClick} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default App;
