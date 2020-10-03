import { getRandom } from "./getRandom";

/**
 * @param {AppLevelColor} color
 * @param {Number} difficulty
 * @returns {AppLevelColor}
 */
export const modifyColor = (color, difficulty) => {
  /**
   * @type {AppLevelColor}
   */
  const newColor = {
    isCorrect: true,
    value: [ ...color.value ],
  };

  let timesToChange = 30 - difficulty * 5,
    randomOffset = getRandom(1) === 1 ? 1 : -1;

  while (timesToChange--) {
    const randomIndex = getRandom(2);
    newColor.value[randomIndex] += randomOffset;

    if (newColor.value[randomIndex] < 0) {
      newColor.value[randomIndex] = 0;
    }

    if (newColor.value[randomIndex] > 255) {
      newColor.value[randomIndex] = 255;
    }
  }

  return newColor;
};
