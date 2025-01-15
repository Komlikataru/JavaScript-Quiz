import React, { useState, useEffect } from "react";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import questions from "./data/questions";
import './App.css'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 45 minutes in seconds
  const [isPaused, setIsPaused] = useState(false);

  // Timer effect
  useEffect(() => {
    if (isPaused || isQuizFinished || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isPaused, isQuizFinished]);

  // Handle answer selection
  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsQuizFinished(true);
    }
  };

  // Restart the quiz
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsQuizFinished(false);
    setTimeLeft(30 * 60);
    setIsPaused(false);
  };

  return (
    <div className="app">
      <div className="timer">
        <p>Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}</p>
      </div>
      {!isQuizFinished ? (
        <Quiz
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
        />
      ) : (
        <Result score={score} totalQuestions={questions.length} onRestart={restartQuiz} />
      )}
      
      
    </div>
  );
}

export default App;
