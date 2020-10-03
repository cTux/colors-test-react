import { getRandom } from './getRandom';

export const modifyColor = (color) => {
  const newColor = {
    isCorrect: true,
    value: [ ...color.value ],
  };

  let timesToChange = 25,
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
