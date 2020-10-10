/**
 * @param {AppState} state
 * @returns {Number}
 */
export const getCurrentDifferences = state => {
  return state.config.differences.find(n => n.isDefault).value;
};
