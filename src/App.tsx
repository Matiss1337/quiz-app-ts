import React, { useState } from 'react'
import { Difficulty, fetchQuizQuestions } from './API';
import './App.css'
//components
import { QuestionCard } from './components/QuestionCard'

function App() {
const TOTAL_QUESTIONS:number = 10;

const [loading, setLoading] = useState(false);
const [questions, setQuestion]= useState([]);
const [number, setNumber] = useState(0);
const [userAnswers, setUserAnswers] = useState([]);
const [score, setScore] = useState(0);
const [gameOver, setGameOver] = useState(true);

console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))

const startTrivia = async () => {
console.log("yo")
}

const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

}

const nextQuestion = () => {
console.log("next question")
}

const imgLink: string = "https://images.unsplash.com/photo-1619897917857-f80c6adcf760?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
  
return (
    <div className="App">
<h1>REACT QUIZ</h1>
<button className='start' onClick={startTrivia}>Start</button>
<p className="score">Score:</p>
<p className="loading">Loading Questions ...</p>

{/* <QuestionCard
questionNr={number + 1}
totalQuestions={TOTAL_QUESTIONS}
question={questions[number].question}
answers={questions[number].answers}
userAnswer={userAnswers ? userAnswers[number] : undefined}
callback={checkAnswer}
/> */}
<button className="next" onClick={nextQuestion}>next question</button>
    </div>
  )
}

export default App
