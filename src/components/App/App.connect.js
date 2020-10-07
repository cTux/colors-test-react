import { connect } from 'react-redux';
import { App } from './App';

/**
 * @param {AppState} state
 * @returns {AppProps}
 */
const mapStateToProps = state => ({
  game: {
    isStarted: state.game.isStarted,
  }
});

const mapDispatchToProps = dispatch => ({
});


export const AppConnected =
  connect(mapStateToProps, mapDispatchToProps)(App);
