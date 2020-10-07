import { getRandomColors } from '../utils/getRandomColors';

/**
 * @param {AppState} state
 * @param {Object} action
 * @returns {AppState}
 */
export const colorClick = (state, action) => {
  const isCorrect = action.payload;

  const total = state.points.total + 1,
    correct = state.points.correct + (isCorrect ? 1 : 0),
    wrong = state.points.wrong + (isCorrect ? 0 : 1),
    accuracy = (correct / total * 100) >> 0,
    tg = Math.ceil(correct * correct / total * 5);

  return {
    ...state,
    points: {
      total,
      correct,
      wrong,
      accuracy,
      tg,
    },
    game: {
      ...state.game,
      colors: getRandomColors(),
    },
  };
};

/**
 * @returns {Object}
 */
export const colorClickAction = isCorrect => ({
  type: 'COLOR_CLICK',
  payload: isCorrect,
});
