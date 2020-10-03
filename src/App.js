import React, { Component } from 'react';
import './App.css';
import { getRandomColor } from './utils/getRandomColor';
import { getRandom } from './utils/getRandom';
import { modifyColor } from './utils/modifyColor';

export class App extends Component {
  /**
   * @type {AppProps}
   */
  static defaultProps = {
    difficulty: 1,
  };

  /**
   * @param {AppProps} props
   */
  constructor(props) {
    super(props);

    /**
     * @type {AppState}
     */
    this.state = {
      points: {
        total: 0,
        correct: 0,
        wrong: 0,
      },

      level: {
        difficulty: props.difficulty,
        colors: [],
      },
    };
  }

  componentDidMount() {
    this.startNewLevel();
  }

  startNewLevel() {
    const randomColorValue = getRandomColor();

    const colors = new Array(6)
      .fill(undefined)
      .map(() => ({
        isCorrect: false,
        value: randomColorValue,
      }));

    const randomColorIndex = getRandom(5),
      randomColor = colors[randomColorIndex];

    colors[randomColorIndex] = modifyColor(randomColor, this.state.level.difficulty);

    this.setState({
      level: {
        ...this.state.level,
        colors,
      },
    });
  }

  /**
   * @param {Boolean} isCorrect
   */
  handleColorClick(isCorrect) {
    this.setState({
      points: {
        total: this.state.points.total + 1,
        correct: this.state.points.correct + (isCorrect ? 1 : 0),
        wrong: this.state.points.wrong + (isCorrect ? 0 : 1),
      },
    }, () => {
      this.startNewLevel();
    });
  }

  renderDifficulty() {
    return (
      <div className={'app-difficulty'}>
        Difficulty: {this.state.level.difficulty}
      </div>
    );
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
        {this.state.level.colors.map((cell, index) => {
          return (
            <div
              key={index}
              className={'app-board-cell'}
              style={{ backgroundColor: `rgb(${cell.value.join(', ')})` }}
              onClick={() => this.handleColorClick(cell.isCorrect)}
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
        {this.renderDifficulty()}
        {this.renderPoints()}
        {this.renderBoard()}
      </div>
    );
  }
}
