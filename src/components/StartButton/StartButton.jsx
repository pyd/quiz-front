import propTypes from 'prop-types';
import React from 'react';
import styles from './StartButton.module.css';

/**
 * button to start the quiz
 * @param {handler} props 
 * @returns 
 */
function StartButton(props) {

  return (
    <button type="button" onClick={props.handler} className={styles.startButton}>START</button>
  );
}

export default StartButton;
