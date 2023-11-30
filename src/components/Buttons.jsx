import React, { useState } from "react";
import RenderButtons from "./RenderButtons";
import TextField from '@mui/material/TextField';
import * as math from 'mathjs';
 // Import mathjs library
import './Calculator.css';

const Buttons = () => {
  const [input, setInput] = useState("");

  const solveEquation = (event) => {
    setInput(event.target.value);
  }

  const handleButtonClick = (btn) => {
    if (input === "" && btn === '=')
      return;

    if (btn === 'c' || btn === 'C') {
      setInput('');
    }
    else if (btn === '√') {
      const currResult = Math.sqrt(parseFloat(input));
      setInput(currResult.toString());
    }
    else if (btn === '=') {
      try {
        const result = math.evaluate(input);
        setInput(result.toString());
      } catch (error) {
        setInput('Error');
      }
    } else {
      setInput((prevResult) => prevResult + btn);
    }
  }

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">
          <TextField type="text" value={input} onChange={solveEquation} className="input" />
        </div>
        <div className="buttons">
          <RenderButtons handleButtonClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
};

export default Buttons;
