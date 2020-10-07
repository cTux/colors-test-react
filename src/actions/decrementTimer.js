/**
 * @param {AppState} state
 * @returns {AppState}
 */
export const decrementTimer = (state) => {
  const secondsLeft = state.game.secondsLeft - 1,
    endGameProperties = {};

  if (!secondsLeft) {
    endGameProperties.isStarted = false;
    endGameProperties.isFinished = true;
  }

  return {
    ...state,
    game: {
      ...state.game,
      ...endGameProperties,
      secondsLeft,
    },
  };
};

/**
 * @returns {Object}
 */
export const decrementTimerAction = () => ({
  type: 'DECREMENT_TIMER',
});
