/**
 * @param {AppState} state
 * @returns {Number}
 */
export const getCurrentSize = state => {
  return state.config.sizes.find(n => n.isDefault).value;
};
