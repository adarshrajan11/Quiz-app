import React, { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const questionsData = [
    {
      id: 1,
      question: 'What does JSX stand for in React?',
      options: [
        'JavaScript XML',
        'JavaScript Extension',
        'JavaScript Syntax',
        'Java XML',
      ],
      correctAnswer: 0,
    },
    {
      id: 2,
      question:
        'Which hook is used to perform side effects in a functional component?',
      options: ['useState', 'useEffect', 'useReducer', 'useContext'],
      correctAnswer: 1,
    },
    // Add more questions here...
  ]

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [score, setScore] = useState(0)

  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex)
  }

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      const correctAnswerIndex =
        questionsData[currentQuestionIndex].correctAnswer
      if (selectedOption === correctAnswerIndex) {
        setScore(score + 1)
      }
      setSelectedOption(null) // Reset selected option
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      alert('Please select an option')
    }
  }

  return (
    <div className='app-container'>
      {currentQuestionIndex < questionsData.length ? (
        <>
          <ul className='container'>
            <li className='item'>
              <h2>{questionsData[currentQuestionIndex].question}</h2>
            </li>
            {questionsData[currentQuestionIndex].options.map(
              (option, index) => (
                <li key={index} className='item'>
                  <button
                    className={`option ${
                      selectedOption === index ? 'selected' : ''
                    }`}
                    onClick={() => handleOptionSelect(index)}
                    disabled={selectedOption !== null}
                  >
                    {option}
                  </button>
                </li>
              )
            )}
          </ul>
          <button onClick={handleNextQuestion}>NEXT</button>
        </>
      ) : (
        <div className='result-container'>
          <h2>Quiz Completed!</h2>
          <p>
            Your score: {score} / {questionsData.length}
          </p>
        </div>
      )}
    </div>
  )
}

export default App
