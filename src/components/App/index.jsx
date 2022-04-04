import { hot } from 'react-hot-loader';
import React from 'react';
import style from './App.module.css';

const message = 'Welcome to quiz-frontend';
const App = () => (
  <div className={style.App}>
    <h1>{message}</h1>
  </div>
);

export default hot(module)(App);
