import React, { useState, useEffect } from 'react';

const Questions = ({ data, onAnswer, onNext, questionNumber, totalQuestions }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    setSelectedOption(null);
    setIsCorrect(null);
  }, [data]);

  const handleOptionClick = (index) => {
    const correct = index === data.answer;
    setSelectedOption(index);
    setIsCorrect(correct);
    onAnswer(correct);
  };

  return (
    <div className="questions-container">
        <h1>Start Quiz</h1>
      <p>{data.questions}</p>
      <div className="options-container">
        {data.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              selectedOption === index ? (isCorrect ? 'correct' : 'incorrect') : ''
            }`}
            onClick={() => handleOptionClick(index)}
            disabled={selectedOption !== null}
          >
            {option}
          </button>
        ))}
      </div>
      {selectedOption !== null && (
        <button className="next-button" onClick={onNext}>
          Next
        </button>
      )}
       <h3>
        Question {questionNumber} / {totalQuestions}
      </h3>
    </div>
  );
};

export default Questions;
