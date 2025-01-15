import React from "react";
import Question from "./Question";
import Options from "./Options";

const Quiz = ({ question, onAnswer, currentQuestion, totalQuestions }) => {
  return (
    <div className="quiz">
      <h2>Question {currentQuestion + 1} of {totalQuestions}</h2>
      <Question text={question.question} />
      <Options options={question.options} answer={question.answer} onAnswer={onAnswer} />
    </div>
  );
};

export default Quiz;
