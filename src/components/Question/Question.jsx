import React from 'react';
import propTypes from 'prop-types';
import styles from './Question.module.css';

/**
 * displays a question and a list of answers, each with a checkbox
 * @param {question, answers, answerHandler} props
 * @returns
 */
function Question(props) {
  const { question, answers, answerHandler } = props;

  console.log('question', question);

  function saveAnswer() {
    let answerIds = [];
    document.querySelectorAll('input').forEach((answer, i) => {
      if (answer.checked) {
        answerIds.push(answer.value);
      }
    });
    answerHandler(answerIds);
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
        <button type="button" onClick={saveAnswer}>Valider</button>
      </form>
    </div>
  );
}

Question.propTypes = {
  question: propTypes.string.isRequired,
  answers: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Question;
