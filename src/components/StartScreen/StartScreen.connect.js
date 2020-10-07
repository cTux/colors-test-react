import { connect } from 'react-redux';
import { StartScreen } from './StartScreen';
import { newGameAction } from '../../actions/newGame';

/**
 * @param {AppState} state
 * @returns {AppProps}
 */
const mapStateToProps = state => ({
  game: {
    isStarted: state.game.isStarted,
    isFinished: state.game.isFinished,
  },
  points: {
    correct: state.points.correct,
    accuracy: state.points.accuracy,
    tg: state.points.tg,
  },
});

const mapDispatchToProps = dispatch => ({
  startNewGame: () => dispatch(newGameAction()),
});

export const StartScreenConnected =
  connect(mapStateToProps, mapDispatchToProps)(StartScreen);
