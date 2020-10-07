import { getRandom } from './getRandom';
import { getRandomColor } from './getRandomColor';
import { modifyColor } from './modifyColor';

export const getRandomColors = () => {
  const randomColorValue = getRandomColor(),
    colorsNumber = 16;

  const colors = new Array(colorsNumber)
    .fill(undefined)
    .map(() => ({
      isCorrect: false,
      value: randomColorValue,
    }));

  const randomColorIndex = getRandom(colorsNumber - 1),
    randomColor = colors[randomColorIndex];

  colors[randomColorIndex] = modifyColor(randomColor);

  return colors;
};
