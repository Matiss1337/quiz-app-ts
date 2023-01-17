import React, { useState } from 'react'
import { Difficulty, fetchQuizQuestions, QuestionsState } from './API';
import './App.css'
//components
import { QuestionCard } from './components/QuestionCard'

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

function App() {
const TOTAL_QUESTIONS:number = 10;

const [loading, setLoading] = useState(false);
const [questions, setQuestion]= useState<QuestionsState[]>([]);
const [number, setNumber] = useState(0);
const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
const [score, setScore] = useState(0);
const [gameOver, setGameOver] = useState(true);


const startTrivia = async () => {
setLoading(true);
setGameOver(false);

const newQuestions = await fetchQuizQuestions(
  TOTAL_QUESTIONS, 
  Difficulty.EASY
)

setQuestion(newQuestions);

setScore(0);
setUserAnswers([]);
setNumber(0);
setLoading(false);
}

const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
if(!gameOver){
  ///Users answer
  const answer = e.currentTarget.value
  ///check if that is correct answer
  const correct = questions[number].correct_answer === answer;
  ///add a point if correct
  if(correct) setScore(prev => prev + 1);
  ///save answer in the array for user answers
  const answerObject = {
    question: questions[number].question,
    answer,
    correct,
    correctAnswer: questions[number].correct_answer,
  };
  setUserAnswers(prev => [...prev, answerObject])
}}

const nextQuestion = () => {
const nextQuestion = number + 1;
if(nextQuestion === TOTAL_QUESTIONS){
  setGameOver(true)
} else {
  setNumber(nextQuestion)
}
}
  
return (
    <div className="App">
<h1>REACT QUIZ</h1>
{gameOver || userAnswers.length === TOTAL_QUESTIONS ?
<button className='start' onClick={startTrivia}>Start</button> : null}

{!gameOver && <p className="score">Score: {score}</p>}

{loading && <p className="loading">Loading Questions ...</p>}

{!loading && !gameOver && (
<QuestionCard
questionNr={number + 1}
totalQuestions={TOTAL_QUESTIONS}
question={questions[number].question}
answers={questions[number].answers}
userAnswer={userAnswers ? userAnswers[number] : undefined}
callback={checkAnswer}
/> )}

{!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ?  (
<button className="next" onClick={nextQuestion}>next question</button>) : null}
    </div>
  )
}

export default App
