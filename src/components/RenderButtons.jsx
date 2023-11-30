import React from "react";
import Button from "@mui/material/Button";

const RenderButtons = (props) => {
  const btnStyle = {
    backgroundColor: "none",
    padding: "5px 10px",
    color: "none",
    fontSize: "30px",
    fontFamily: "Raleway",
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
    "(",
    ")",
    "√",
  ];

  return buttons.map((btn, index) => (
    <Button
      style={btnStyle}
      variant="contained"
      key={index}
      onClick={() => props.handleButtonClick(btn)}
    >
      {btn}
    </Button>
  ));
};

export default RenderButtons;
