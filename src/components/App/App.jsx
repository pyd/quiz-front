import { hot } from 'react-hot-loader';
import React, { useRef, useState } from 'react';
import styles from './App.module.css';
import StartButton from '../StartButton/StartButton';
import Question from '../Question/Question';
import data from '../../data/questions.json';


function App() {

  const [questions, setQuestions] = useState([
    { id: 1, category: 'html', text:'Question 1', answers:
      [
        { id: 1, text: 'Réponse 1 invalide' },
        { id: 2, text: 'Réponse 2 invalide' },
        { id: 3, text: 'Réponse 3 valide' },
        { id: 4, text: 'Réponse 4 invalide' },
      ]
    },
  ]);

  const [answers, setAnswers] = useState([])

  const question = useRef(null);

  // start the quiz
  function handleStart(e) {
    e.preventDefault();
    e.target.style.display = 'none';
    question.current.style.display = 'block';
  }

  function handleAnswer(ids) {
    console.log('register answer ids', ids);
  }

  return (
    <div className={styles.App}>
      <h1>Salle #214 - Quiz front</h1>
      <StartButton handler={handleStart} />
      <div className={styles.questionContainer} ref={question}>
        <Question question={questions[0].text} answers={questions[0].answers} answerHandler={handleAnswer}/>
      </div>
    </div>
  );
}

export default hot(module)(App);
