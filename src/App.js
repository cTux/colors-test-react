import React, { Component } from 'react';
import './App.css';
import { getRandomColor } from './utils/getRandomColor';
import { getRandom } from './utils/getRandom';
import { modifyColor } from './utils/modifyColor';

export class App extends Component {
  /**
   * @param {AppProps} props
   */
  constructor(props) {
    super(props);

    /**
     * @type {AppState}
     */
    this.state = {
      game: {
        isStarted: false,
        isFinished: false,
        colors: [],
      },

      points: {
        total: 0,
        correct: 0,
        wrong: 0,
      },
    };

    /**
     * @type {Number}
     */
    this.latestHover = -1;
  }

  componentDidMount() {
    this.startNewGame();
  }

  startNewGame() {
    const randomColorValue = getRandomColor();

    const colors = new Array(6)
      .fill(undefined)
      .map(() => ({
        isCorrect: false,
        value: randomColorValue,
      }));

    const randomColorIndex = getRandom(5),
      randomColor = colors[randomColorIndex];

    colors[randomColorIndex] = modifyColor(randomColor);

    this.setState({
      game: {
        ...this.state.game,
        colors,
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

    this.setState({
      points: {
        total: this.state.points.total + 1,
        correct: this.state.points.correct + (isCorrect ? 1 : 0),
        wrong: this.state.points.wrong + (isCorrect ? 0 : 1),
      },
    }, () => {
      this.startNewGame();
    });
  }

  renderPoints() {
    return (
      <div className={'app-points'}>
        <div className={'app-points-total'}>Total points: {this.state.points.total}</div>
        <div className={'app-points-correct'}>Correct: {this.state.points.correct}</div>
        <div className={'app-points-wrong'}>Wrong: {this.state.points.wrong}</div>
      </div>
    );
  }

  renderBoard() {
    return (
      <div className={'app-board'}>
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
        {this.renderPoints()}
        {this.renderBoard()}
      </div>
    );
  }
}
