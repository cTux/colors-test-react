import { getRandom } from './getRandom';

/**
 * @returns {Array<Number>}
 */
export const getRandomColor = () => {
  const color =  [ getRandom(255), getRandom(255), getRandom(255) ];
  // Prevents dark colors
  if (color.some(n => n > 45)) {
    return color;
  }

  return getRandomColor();
};
