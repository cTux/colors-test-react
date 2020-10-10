import { getRandom } from './getRandom';
import { getRandomColor } from './getRandomColor';
import { modifyColor } from './modifyColor';

export const getRandomColors = (size, differences) => {
  const randomColorValue = getRandomColor(),
    colorsNumber = size * size;

  const colors = new Array(colorsNumber)
    .fill(undefined)
    .map(() => ({
      isCorrect: false,
      value: randomColorValue,
    }));

  const randomColorIndex = getRandom(colorsNumber - 1),
    randomColor = colors[randomColorIndex];

  colors[randomColorIndex] = modifyColor(randomColor, differences);

  return colors;
};
