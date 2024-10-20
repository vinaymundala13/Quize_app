import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Questions from './Questions';
import Score from './Score';

const questions = [
  {
    questions: 'What is React?',
    options: ['Library', 'Framework', 'IDE', 'None'],
    answer: 0,
  },
  {
    questions: 'What is JSX?',
    options: ['XML', 'JavaScript', 'IDE', 'JavaScript Syntax'],
    answer: 3,
  },
  {
    questions: 'Which hook is used to manage state in functional components?',
    options: ['useState', 'useEffect', 'useContext', 'useReducer'],
    answer: 0,
  },
  {
    questions: 'What is the virtual DOM in React?',
    options: [
      'A real copy of the DOM',
      'A lightweight representation of the real DOM',
      'A database for storing DOM nodes',
      'An alternative to HTML',
    ],
    answer: 1,
  },
  {
    questions: 'How do you pass data from a parent to a child component in React?',
    options: ['State', 'Props', 'Context', 'Refs'],
    answer: 1,
  },
  {
    questions: 'What is the purpose of useEffect in React?',
    options: [
      'To update the DOM directly',
      'To handle side effects in components',
      'To create global state',
      'To render components conditionally',
    ],
    answer: 1,
  },
  {
    questions: 'Which of the following is not a CSS framework?',
    options: ['Bootstrap', 'Tailwind', 'Express', 'Foundation'],
    answer: 2,
  },
  {
    questions: 'What does the “B” in CSS box model represent?',
    options: ['Block', 'Border', 'Box', 'Background'],
    answer: 1,
  },
  {
    questions: 'Which HTTP method is used to submit form data to a server?',
    options: ['GET', 'POST', 'PUT', 'DELETE'],
    answer: 1,
  },
  {
    questions: 'What is the default value of `flex-direction` in CSS Flexbox?',
    options: ['Row', 'Column', 'Row-reverse', 'Column-reverse'],
    answer: 0,
  },
];


function AppWrapper() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);
  };

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      navigate('/score');
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    navigate('/');
  };

  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={
            <Questions
              data={questions[currentQuestion]}
              questionNumber={currentQuestion + 1}
              totalQuestions={questions.length}
              onAnswer={handleAnswer}
              onNext={handleNext}
            />
          }
        />
        <Route path="/score" element={<Score score={score} onRetry={resetQuiz} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
