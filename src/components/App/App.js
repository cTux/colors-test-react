import React, { Component } from 'react';
import './App.css';
import { StartScreen } from '../StartScreen';
import { Board } from '../Board';

export class App extends Component {
  render() {
    return (
      <div className={'app'}>
        {this.props.game.isStarted ? <Board /> : <StartScreen />}
      </div>
    );
  }
}
