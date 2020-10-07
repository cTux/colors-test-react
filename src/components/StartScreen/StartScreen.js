import React, { Component } from 'react';
import './StartScreen.css';

export class StartScreen extends Component {
  render() {
    if (this.props.game.isStarted) {
      return;
    }

    let titleText;
    if (this.props.game.isFinished) {
      titleText = `Correct: ${this.props.points.correct}, Accuracy: ${this.props.points.accuracy}%, Points: ${this.props.points.tg}`;
    } else {
      titleText = `Find a different color!`;
    }

    return (
      <div className={'app-start-screen'}>
        <div className={'app-start-screen-title'}>{titleText}</div>
        <div className={'app-start-screen-btn-container'}>
          <button className={'app-start-game-btn'} onClick={this.props.startNewGame}>
            Start
          </button>
        </div>
      </div>
    );
  }
}
