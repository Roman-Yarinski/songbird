import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Topic from './components/Topic/Topic';
import Question from './components/Qwestion/Question';
import Answer from './components/Answer/Answer';
import Bird from './components/Bird/Bird';
import ButtonNext from './components/ButtonNext/ButtonNext';

function App() {
  return (
    <div className="App">
      <div className='contener'> 
        <Header />
        <Topic />
        <Question />
        <div className='answer__contener'>
          <Answer />
          <Bird />
        </div>
        <ButtonNext />
      </div>
    </div>
  );
}

export default App;
