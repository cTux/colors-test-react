import { getConfig } from '../utils/getConfig';

/**
 * @type {AppState}
 */
export const defaultState = {
  game: {
    isStarted: false,
    isFinished: false,
    secondsLeft: 0,
  },

  config: getConfig(),

  board: {
    colors: [],
  },

  points: {
    total: 0,
    correct: 0,
    wrong: 0,
    accuracy: 0,
    tg: 0,
  },
};
