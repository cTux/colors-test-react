import React, { Component } from 'react';
import './Board.css';

export class Board extends Component {
  constructor(props) {
    super(props);

    this.interval = -1;
    this.latestHover = -1;
  }

  componentDidMount() {
    this.startInterval();
  }

  componentWillUnmount() {
    this.endInterval();
  }

  startInterval() {
    this.interval = setInterval(() => this.props.decrementTimer(), 1000);
  }

  endInterval() {
    clearInterval(this.interval);
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
    if (this.latestHover === index) {
      this.props.colorClick(isCorrect);
    }
  }

  render() {
    return (
      <div className={'app-board'}>
        <div className={'app-board-timer'}>
          {this.props.game.secondsLeft}
        </div>
        {this.props.game.colors.map((cell, index) => {
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
}
