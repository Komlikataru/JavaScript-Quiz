import React from "react";

const Result = ({ score, totalQuestions, onRestart }) => {
  const isPassed = score >= 35;  // Check if score is greater than or equal to 35

  return (
    <div className="result">
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score} / {totalQuestions}</p>
      <p>{isPassed ? "You Passed! 🎉" : "You Failed! 😢"}</p> {/* Display Pass or Fail */}
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default Result;
