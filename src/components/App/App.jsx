import { hot } from 'react-hot-loader';
import React, { useRef, useState } from 'react';
import styles from './App.module.css';
import StartButton from '../StartButton/StartButton';
import Question from '../Question/Question';

function App() {

  const [started, setStarted] = useState(false);

  const [answers, setAnswers] = useState([]);

  // data of the question currently displayed
  const [currentQuestion, setCurrentQuestion] = useState({ test: 'initial' });
  // ref of the Question element 
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
    setCurrentQuestion(questions[0]);
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
    let newAnswers = answers;
    newAnswers.push({
      questionId: currentQuestion.id,
      answersId: ids,
      questionPassed: questionPassed
    });
    console.log('newAnswers', newAnswers);
    setAnswers(newAnswers);
    console.log('answers', answers);
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
          <Question data={filterQuestionData(currentQuestion)} answerHandler={handleAnswer} />
          Answers :
          { JSON.stringify(answers) }
        </>
      )}

    </div>
  );
}

export default hot(module)(App);
