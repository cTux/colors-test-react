import { secondsLeft } from './newGame.config';
import { getRandomColors } from '../utils/getRandomColors';

/**
 * @param {AppState} state
 * @returns {AppState}
 */
export const newGame = (state) => {
  return {
    game: {
      ...state.game,
      isStarted: true,
      isFinished: false,
      secondsLeft,
      colors: getRandomColors(),
    },
    points: {
      total: 0,
      correct: 0,
      wrong: 0,
      accuracy: 0,
      tg: 0,
    },
  };
};

/**
 * @returns {Object}
 */
export const newGameAction = () => ({
  type: 'NEW_GAME',
});
