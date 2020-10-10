import { secondsLeft } from './newGame.config';
import { getRandomColors } from '../utils/getRandomColors';
import { getCurrentDifferences } from '../utils/getCurrentDifferences';
import { getCurrentSize } from '../utils/getCurrentSize';

/**
 * @param {AppState} state
 * @returns {AppState}
 */
export const newGame = (state) => {
  return {
    ...state,
    game: {
      ...state.game,
      isStarted: true,
      isFinished: false,
      secondsLeft,
    },
    board: {
      ...state.board,
      colors: getRandomColors(
        getCurrentSize(state),
        getCurrentDifferences(state),
      ),
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
