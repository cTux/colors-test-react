import { defaultState } from './main.default';
import { newGame } from '../actions/newGame';
import { newRound } from '../actions/newRound';
import { decrementTimer } from '../actions/decrementTimer';
import { colorClick } from '../actions/colorClick';

/**
 * @param {AppState} state
 * @param {Object} action
 * @returns {AppState}
 */
export const mainReducer = (state = defaultState, action) => {
  switch (action.type) {

    case 'NEW_GAME':
      return newGame(state);

    case 'NEW_ROUND':
      return newRound(state, action);

    case 'DECREMENT_TIMER':
      return decrementTimer(state);

    case 'COLOR_CLICK':
      return colorClick(state, action);

    default:
      return state;
  }
};
