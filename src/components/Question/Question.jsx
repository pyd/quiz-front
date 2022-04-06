import React from 'react';
import propTypes from 'prop-types';
import styles from './Question.module.css';

/**
 * displays a question and a list of answers, each with a checkbox
 * @param {question, answers, answerHandler} props
 * @returns
 */
function Question({data : {question, answers, category}, answerHandler}) {

  /**
   * send selected answer(s) & the flag 'question passed' back
   * 
   */
  function sendAnswer(e) {
    e.preventDefault();
    const questionPassed = e.target.dataset.questionpassed;
    let answerIds = [];
    document.querySelectorAll('input').forEach((answer, i) => {
      if (answer.checked) {
        answerIds.push(answer.value);
      }
    });
    answerHandler(answerIds, questionPassed);
  }

  return (
    <div className={styles.question}>
      <div className={styles.question}>
        {question}
      </div>
      <form>
        <ul>
          <legend>Reponses :</legend>
          {answers.map((r) => (
            <li className="answer" key={r.id}>
              {r.text}
              <input type="checkbox" name="answer-check" value={r.id} />
            </li>
          ))}
        </ul>
        <button type="button" onClick={sendAnswer} data-questionpassed="false">Valider la réponse</button>
        <button type="button" onClick={sendAnswer} data-questionpassed="true">Répondre plus tard</button>
      </form>
    </div>
  );
}

Question.propTypes = {
  question: propTypes.string,
  answers: propTypes.arrayOf(propTypes.string),
  // question: propTypes.string.isRequired,
  // answers: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Question;
