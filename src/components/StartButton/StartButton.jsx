import propTypes from 'prop-types';
import React from 'react';
import styles from './StartButton.module.css';

/**
 * button to start the quiz
 * @param {handler} props
 * @returns
 */
function StartButton(props) {
  const { handler } = props;
  return (
    <button type="button" onClick={handler} className={styles.startButton}>START</button>
  );
}

StartButton.propTypes = {
  handler: propTypes.func.isRequired,
};

export default StartButton;
