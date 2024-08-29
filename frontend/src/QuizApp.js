import React, { useState } from 'react';

const questions = [
  {
    id: 1,
    question: 'What is the capital of France?',
    answers: ['Paris', 'London', 'Berlin', 'Rome'],
    correctAnswer: 'Paris'
  },
  {
    id: 2,
    question: 'What is the largest planet in our solar system?',
    answers: ['Earth', 'Saturn', 'Jupiter', 'Uranus'],
    correctAnswer: 'Jupiter'
  },
  {
    id: 3,
    question: 'What is the smallest country in the world?',
    answers: ['Vatican City', 'Monaco', 'Nauru', 'Tuvalu'],
    correctAnswer: 'Vatican City'
  },
  {
    id: 4,
    question: 'What is the primary function of the CPU (Central Processing Unit)?',
    answers: ['To store data', 'To provide input/output operations', 'To execute instructions', 'To manage memory'],
    correctAnswer: 'To execute instructions'
  },
  {
    id: 5,
    question: 'Which programming language is known for its simplicity and readability?',
    answers: ['Java', 'Python', ' C++', 'Javascript'],
    correctAnswer: 'Python'
  },
  {
    id: 6,
    question: 'What is the term for a self-contained piece of code that performs a specific task?',
    answers: ['Function', 'Method', ' Procedure', 'Algorithm'],
    correctAnswer: 'Function'
  },
  {
    id: 7,
    question: 'Which data structure is used to store a collection of key-value pairs?',
    answers: ['Stack', 'LinkedList', ' Hash Table', 'Array'],
    correctAnswer: 'Hash Table'
  },

    {
    id: 8,
    question: 'Which algorithm is used to sort a list of elements in ascending order?',
    answers: ['Insertion Sort', 'Merge Sort', 'Selection Sort', 'Bubble Sort'],
    correctAnswer: 'Merge Sort'
  },
  {
    id: 9,
    question: 'What is the term for a type of malware that demands payment in exchange for restoring access to data?',
    answers: ['Virus', 'Worm', 'Ransomware', 'Trojan'],
    correctAnswer: 'Ransomware'
  },
  {
    id: 10,
    question: 'Who is the Father of Java?',
    answers: ['James Gosling', 'Bill Gates', 'Larry Ellison', 'Tim Berners-Lee'],
    correctAnswer: 'James Gosling'
  },
  
  
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer) => {
    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = questions[currentQuestionIndex + 1];
    if (nextQuestion) {
      setCurrentQuestion(nextQuestion);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <div>
          <h2>Quiz Complete!</h2>
          <p>
            You scored {score} out of {questions.length} correct answers.
          </p>
        </div>
      ) : (
        <div>
          <h2>{currentQuestion.question}</h2>
          <ul>
            {currentQuestion.answers.map((answer, index) => (
              <li key={index}>
                <button onClick={() => handleAnswer(answer)}>{answer}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QuizApp;