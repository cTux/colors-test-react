import { getRandom } from './getRandom';

/**
 * @returns {Array<Number>}
 */
export const getRandomColor = () => {
  return [ getRandom(255), getRandom(255), getRandom(255) ];
};
