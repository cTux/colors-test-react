import { defaultState } from './main.default';
import { newGame } from '../actions/newGame';
import { newRound } from '../actions/newRound';
import { decrementTimer } from '../actions/decrementTimer';
import { colorClick } from '../actions/colorClick';
import { setConfig } from '../actions/setConfig';

/**
 * @param {AppState} state
 * @param {Object} action
 * @returns {AppState}
 */
export const mainReducer = (
  state = defaultState,
  action,
) => {
  switch (action.type) {
    case 'NEW_GAME':
      return newGame(state);

    case 'NEW_ROUND':
      return newRound(state);

    case 'SET_CONFIG':
      return setConfig(state, action);

    case 'DECREMENT_TIMER':
      return decrementTimer(state);

    case 'COLOR_CLICK':
      return colorClick(state, action);

    default:
      return state;
  }
};
