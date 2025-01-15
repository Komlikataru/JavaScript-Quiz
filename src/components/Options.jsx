import React from "react";

const Options = ({ options, answer, onAnswer }) => {
  const handleClick = (option) => {
    onAnswer(option === answer);
  };

  return (
    <div className="options">
      {options.map((option, index) => (
        <button key={index} onClick={() => handleClick(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
