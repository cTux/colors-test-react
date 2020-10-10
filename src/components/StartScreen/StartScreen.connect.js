import { connect } from 'react-redux';
import { StartScreen } from './StartScreen';
import { newGameAction } from '../../actions/newGame';
import { setConfigAction } from '../../actions/setConfig';

/**
 * @param {AppState} state
 * @returns {AppProps}
 */
const mapStateToProps = state => ({
  game: {
    isStarted: state.game.isStarted,
    isFinished: state.game.isFinished,
  },
  config: state.config,
  points: {
    correct: state.points.correct,
    accuracy: state.points.accuracy,
    tg: state.points.tg,
  },
});

const mapDispatchToProps = dispatch => ({
  startNewGame: () => dispatch(newGameAction()),

  /**
   * @param {String} optionsName
   * @param {Number} value
   */
  setConfig: (optionsName, value) => dispatch(setConfigAction(optionsName, value)),
});

export const StartScreenConnected =
  connect(mapStateToProps, mapDispatchToProps)(StartScreen);
