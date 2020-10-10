import { getRandom } from './getRandom';

export const modifyColor = (color, differences = 25) => {
  const newColor = {
    isCorrect: true,
    value: [ ...color.value ],
  };

  const randomOffset = getRandom(1) === 1 ? 1 : -1;

  while (differences) {
    const randomIndex = getRandom(2);
    newColor.value[randomIndex] += randomOffset;

    if (newColor.value[randomIndex] < 0) {
      newColor.value[randomIndex] = 0;
      continue;
    }

    if (newColor.value[randomIndex] > 255) {
      newColor.value[randomIndex] = 255;
      continue;
    }

    differences--;
  }

  return newColor;
};
