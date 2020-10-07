import { getRandomColors } from '../utils/getRandomColors';

/**
 * @param {AppState} state
 * @returns {AppState}
 */
export const newRound = (state) => {
  return {
    ...state,
    game: {
      ...state.game,
      colors: getRandomColors(),
    },
  };
};

/**
 * @returns {Object}
 */
export const newRoundAction = () => ({
  type: 'NEW_ROUND',
});
