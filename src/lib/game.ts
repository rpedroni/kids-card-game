import { faker } from '@faker-js/faker';
import { OPTION_SET_ANIMALS } from './constants';
import { GameType, Round } from './types';

const getRandom = (options: any[]) => faker.helpers.arrayElement(options);
const getRandomOptions = (amount = 5) => faker.helpers.arrayElements(OPTION_SET_ANIMALS, amount);

export const getNewRound = (gameType = GameType.TextAndSoundToImage): Round => {
  const options = getRandomOptions();
  const correctOption = getRandom(options);
  const correctIndex = options.indexOf(correctOption);

  return {
    options,
    correctIndex,
    correctOption,
  };
};
