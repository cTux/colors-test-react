import React, { Component } from 'react';
import * as cn from 'classnames';
import './StartScreen.css';

export class StartScreen extends Component {
  renderConfig() {
    return (
      <div className={'app-start-screen-config'}>
        <div className={'app-start-screen-config-size'}>
          <div className={'app-start-screen-config-size-title'}>Board size</div>
          <div className={'app-start-screen-config-sizes option-container'}>
            {this.props.config.sizes.map((size, index) => {
              const classes = cn({
                'option': true,
                'app-start-screen-config-sizes-size': true,
                'option-default': size.isDefault,
              });
              return (
                <div
                  key={index}
                  className={classes}
                  onClick={() => this.props.setConfig('sizes', size.value)}
                >{size.value}</div>
              );
            })}
          </div>
        </div>

        <div className={'app-start-screen-config-difference'}>
          <div className={'app-start-screen-config-difference-title'}>Color differences</div>
          <div className={'app-start-screen-config-differences option-container'}>
            {this.props.config.differences.map((difference, index) => {
              const classes = cn({
                'option': true,
                'app-start-screen-config-differences-difference': true,
                'option-default': difference.isDefault,
              });
              return (
                <div
                  key={index}
                  className={classes}
                  onClick={() => this.props.setConfig('differences', difference.value)}
                >{difference.value}</div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (this.props.game.isStarted) {
      return;
    }

    if (!this.props.game.isFinished) {
      return (
        <div className={'app-start-screen'}>
          <div className={'app-start-screen-title'}>Find a different color!</div>
          {this.renderConfig()}
          <div className={'app-start-screen-btn-container'}>
            <button className={'app-start-game-btn'} onClick={this.props.startNewGame}>
              Start
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className={'app-start-screen'}>
        <div className={'app-start-screen-title'}>Correct: {this.props.points.correct},
          Accuracy: {this.props.points.accuracy}%,
          Points: {this.props.points.tg}
        </div>
        {this.renderConfig()}
        <div className={'app-start-screen-btn-container'}>
          <button className={'app-start-game-btn'} onClick={this.props.startNewGame}>
            Start
          </button>
        </div>
      </div>
    );
  }
}
