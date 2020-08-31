import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Topic from "./components/Topic/Topic";
import Question from "./components/Qwestion/Question";
import Answer from "./components/Answer/Answer";
import { BirdRes, Bird } from "./components/Bird/Bird";
import ButtonNext from "./components/ButtonNext/ButtonNext";
import birdData from "./data";
import right from "./952782968e924cf.mp3";
import lose from "./7689335a082e02b.mp3";
import End from "./components/End/End";
import endAudio from './audio.mp3';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      end: false,
      disabled: true,
      score: 0,
      answer: Math.floor(Math.random() * (5 - 0 + 0)) + 0,
      win: false,
      current: false,
      currentScore: 5,
    };
  }

  nextPage = () => {
    this.setState(({ page, disabled, win, score, currentScore }) => {
      return {
        page: page < 5 ? page + 1 : 10,
        answer: Math.floor(Math.random() * (5 - 0 + 0)) + 0,
        disabled: !disabled,
        win: !win,
        current: false,
        currentScore: 5,
      };
    });
    console.log(this.state);
  };

  checkAnswer = (e) => {
    let id = e.target.id;
    let rightAudio = new Audio(right);
    let loseAudio = new Audio(lose);
    if (e.target.id - 1 === this.state.answer) {
      // e.target.classList.add('true')
      document.getElementById('qwestionAudio').pause();
      rightAudio.play();
      this.setState(({ disabled, win, currentScore, score }) => {
        return {
          disabled: !disabled,
          win: !win,
          current: id - 1,
          score: score + currentScore,
        };
      });
    } else {
      // e.target.classList.add('false')
      loseAudio.play();
      this.setState(({ currentScore }) => {
        return {
          current: id - 1,
          currentScore: currentScore >= 0 ? currentScore - 1 : 0,
        };
      });
    }
  };

  reload = () => {
    window.location.reload();
  }

  render() {
    console.log("Answer: ", this.state.answer + 1);
    const level = birdData[this.state.page];
    {
      if (this.state.page === 10) {
        let AudioEnd = new Audio(endAudio);
        AudioEnd.play();
        return <End page={this.state.page} score={this.state.score} clickHandler={this.reload}/>;
      }
    }
    return (
      <div className="App">
        <div className="contener">
          <Header score={this.state.score} />
          <Topic page={this.state.page} />
          {this.state.disabled ? (
            <Question birdAudio={level[this.state.answer].audio} />
          ) : (
            <Question
              birdName={level[this.state.answer].name}
              birdAudio={level[this.state.answer].audio}
              birdImg={level[this.state.answer].image}
            />
          )}
          <div className="answer__contener">
            <div className="answer">
              {level.map((e) => {
                return (
                  <Answer
                    birdName={e.name}
                    key={e.id}
                    number={e.id}
                    clickHandler={this.checkAnswer}
                    disabled={this.state.win}
                  />
                );
              })}
            </div>
            {this.state.current !== false ? (
              <BirdRes level={this.state.page} bird={this.state.current} />
            ) : (
              <Bird />
            )}
          </div>
          <ButtonNext
            clickHandler={this.nextPage}
            disabled={this.state.disabled}
          />
        </div>
      </div>
    );
  }
}

export default App;
