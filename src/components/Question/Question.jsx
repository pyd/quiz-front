import React, {useState} from 'react'
import styles from './Question.module.css'

/**
 * displays a question and 
 * @param {*} props 
 * @returns 
 */
function Question(props) {

  console.log('props.content:', props.content);

  return (
    <div className={styles.question}>
      <div className={styles.question}>
        {props.content.text}
      </div>
      <ul><legend>Reponses :</legend>
        {props.content.answers.map((r) => (
          <li className="answer" key={r.id}>{r.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default Question
