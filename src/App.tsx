import './App.css'
import { QuestionCard } from './components/QuestionCard'

function App() {
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
<QuestionCard/>
<button className="next" onClick={nextQuestion}>next question</button>
    </div>
  )
}

export default App
