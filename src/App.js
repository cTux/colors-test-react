import React, { Component } from 'react';
import './App.css';
import { getRandomColor } from './utils/getRandomColor';
import { getRandom } from './utils/getRandom';
import { modifyColor } from './utils/modifyColor';

const seconds = 60;

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {
        isStarted: false,
        isFinished: false,
        secondsLeft: seconds,
        colors: [],
      },

      points: {
        total: 0,
        correct: 0,
        wrong: 0,
        accuracy: 0,
        tg: 0,
      },
    };

    this.interval = -1;
    this.latestHover = -1;
  }

  startNewGame() {
    this.startNewRound(() => {
      this.setState({
        game: {
          ...this.state.game,
          isStarted: true,
          isFinished: false,
          secondsLeft: seconds,
        },
        points: {
          total: 0,
          correct: 0,
          wrong: 0,
          accuracy: 0,
          tg: 0,
        },
      }, () => {
        this.startInterval();
      });
    });
  }

  startNewRound(callback = () => {}) {
    const randomColorValue = getRandomColor(),
      colorsNumber = 16;

    const colors = new Array(colorsNumber)
      .fill(undefined)
      .map(() => ({
        isCorrect: false,
        value: randomColorValue,
      }));

    const randomColorIndex = getRandom(colorsNumber - 1),
      randomColor = colors[randomColorIndex];

    colors[randomColorIndex] = modifyColor(randomColor);

    this.setState({
      game: {
        ...this.state.game,
        colors,
      },
    }, () => callback());
  }

  startInterval() {
    this.interval = setInterval(() => this.decrementTimer(), 1000);
  }

  endInterval() {
    clearInterval(this.interval);
  }

  decrementTimer() {
    const newSeconds = this.state.game.secondsLeft - 1;
    if (!newSeconds) {
      this.endInterval();
      this.setState({
        game: {
          ...this.state.game,
          isStarted: false,
          isFinished: true,
        },
      });
      return;
    }

    this.setState({
      game: {
        ...this.state.game,
        secondsLeft: newSeconds,
      },
    });
  }

  /**
   * @param {Number} index
   */
  handleHover(index) {
    this.latestHover = index;
  }

  /**
   * @param {Number} index
   * @param {Boolean} isCorrect
   */
  handleColorClick(index, isCorrect) {
    if (this.latestHover !== index) {
      return;
    }

    const total = this.state.points.total + 1,
      correct = this.state.points.correct + (isCorrect ? 1 : 0),
      wrong = this.state.points.wrong + (isCorrect ? 0 : 1),
      accuracy = (correct / total * 100) >> 0,
      tg = Math.ceil(correct * correct / total * 5);

    this.setState({
      points: {
        total,
        correct,
        wrong,
        accuracy,
        tg,
      },
    }, () => {
      this.startNewRound();
    });
  }

  renderStartScreen() {
    if (this.state.game.isStarted) {
      return;
    }

    let titleText;
    if (this.state.game.isFinished) {
      titleText = `Correct: ${this.state.points.correct}, Accuracy: ${this.state.points.accuracy}%, Points: ${this.state.points.tg}`;
    } else {
      titleText = `Find different color!`;
    }

    return (
      <div className={'app-start-screen'}>
        <div className={'app-start-screen-title'}>{titleText}</div>
        <div className={'app-start-screen-btn'}>
          <button className={'app-start-game'} onClick={() => this.startNewGame()}>
            Start
          </button>
        </div>
      </div>
    );
  }

  renderBoard() {
    if (!this.state.game.isStarted) {
      return;
    }

    return (
      <div className={'app-board'}>
        <div className={'app-board-timer'} style={{ width: `${this.state.game.secondsLeft / seconds * 100}%` }} />
        {this.state.game.colors.map((cell, index) => {
          return (
            <div
              key={index}
              className={'app-board-cell'}
              style={{ backgroundColor: `rgb(${cell.value.join(', ')})` }}
              onMouseMove={() => this.handleHover(index)}
              onClick={() => this.handleColorClick(index, cell.isCorrect)}
            >
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div className={'app'}>
        {this.renderStartScreen()}
        {this.renderBoard()}
      </div>
    );
  }
}
