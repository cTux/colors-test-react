/**
 * @param {Number} maxValue
 * @param {Number} minValue
 * @returns {Number}
 */
export const getRandom = (maxValue, minValue = 0) => {
  return ((Math.random() * (maxValue - minValue + 1)) >> 0) + minValue;
};
