import { getRandomColors } from '../utils/getRandomColors';
import { getCurrentDifferences } from '../utils/getCurrentDifferences';
import { getCurrentSize } from '../utils/getCurrentSize';

/**
 * @param {AppState} state
 * @returns {AppState}
 */
export const newRound = (state) => {
  return {
    ...state,
    board: {
      ...state.board,
      colors: getRandomColors(
        getCurrentSize(state),
        getCurrentDifferences(state),
      ),
    },
  };
};

/**
 * @returns {Object}
 */
export const newRoundAction = () => ({
  type: 'NEW_ROUND',
});
