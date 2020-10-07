import { connect } from 'react-redux';
import { Board } from './Board';
import { decrementTimerAction } from '../../actions/decrementTimer';
import { colorClickAction } from '../../actions/colorClick';

/**
 * @param {AppState} state
 * @returns {AppProps}
 */
const mapStateToProps = state => ({
  game: {
    secondsLeft: state.game.secondsLeft,
    colors: state.game.colors,
  },
});

const mapDispatchToProps = dispatch => ({
  decrementTimer: () => dispatch(decrementTimerAction()),
  colorClick: isCorrect => dispatch(colorClickAction(isCorrect)),
});

export const BoardConnected =
  connect(mapStateToProps, mapDispatchToProps)(Board);
