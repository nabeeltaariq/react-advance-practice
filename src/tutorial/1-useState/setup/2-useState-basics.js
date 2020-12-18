import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("First Title");

  const handleClick = () => {
    if (text === "First Title") {
      setText("changed");
    } else {
      setText("First Title");
    }
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button types="button" className="btn" onClick={handleClick}>
        Chnage the title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
