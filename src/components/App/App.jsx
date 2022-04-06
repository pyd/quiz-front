import { hot } from 'react-hot-loader';
import React, { useRef, useState } from 'react';
import styles from './App.module.css';
import StartButton from '../StartButton/StartButton';
import Question from '../Question/Question';
import { useEffect } from 'react/cjs/react.production.min';

function App() {

  const [started, setStarted] = useState(false);

  // data of the question currently displayed
  const [currentQuestionData, setCurrentQuestionData] = useState({});
  // 
  const question = useRef(null);

  const questions = [
    { id: 1, category: 'html', text:'Question 1', answers:
      [
        { id: 1, text: 'Réponse 1 question 1 invalide' },
        { id: 2, text: 'Réponse 2 question 1 invalide' },
        { id: 3, text: 'Réponse 3 question 1 valide' },
        { id: 4, text: 'Réponse 4 question 1 invalide' },
      ]
    },
    { id: 1, category: 'html', text:'Question 2', answers:
      [
        { id: 1, text: 'Réponse 1 question 2 invalide' },
        { id: 2, text: 'Réponse 2 question 2 invalide' },
        { id: 3, text: 'Réponse 3 question 2 valide' },
        { id: 4, text: 'Réponse 4 question 2 invalide' },
      ]
    },
  ];
  

  // start the quiz
  function handleStart(e) {
    e.preventDefault();
    setCurrentQuestionData(filterQuestionData(questions[0]));
    setStarted(true);
  }

  function filterQuestionData(questionData) {
    return {
      question: questionData.text,
      category: questionData.category,
      answers: questionData.answers
    }
  }

  function handleAnswer(ids, questionPassed) {
    console.log('register answer ids', ids);
    console.log('question passed', questionPassed);
  }

  return (
    <div className={styles.App}>
      <h1>Salle #214 - Quiz front</h1>

      {!started ? (
        <>
          <StartButton handler={handleStart} />
        </>
      ) : (
        <>
          <Question data={currentQuestionData} answerHandler={handleAnswer} />
        </>
      )}

    </div>
  );
}

export default hot(module)(App);
