import { hot } from 'react-hot-loader';
import React from 'react';
import style from './App.module.css';
import StartButton from '../StartButton/StartButton';

const message = 'Salle #214 - Quiz front';

function App() {

  // start the quiz
  function handleStart(e) {
    e.preventDefault();
    e.target.style.display='none';
  }

  return (
    <div className={style.App}>
      <h1>{message}</h1>
      <StartButton handler={handleStart} />
  </div>
  );
}
  
export default hot(module)(App);
