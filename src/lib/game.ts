import { faker } from '@faker-js/faker';
import { OPTION_SETS } from './constants';
import { GameType, Option, Round } from './types';

const getRandom = (options: any[]) => faker.helpers.arrayElement(options);
const getRandomOptions = (options: Option[], amount = 5) => faker.helpers.arrayElements(options, amount);

export const getNewRound = (gameType = GameType.TextAndSoundToImage): Round => {
  const optionSet = getRandom(OPTION_SETS);
  const options = getRandomOptions(optionSet);
  const correctOption = getRandom(options);
  const correctIndex = options.indexOf(correctOption);

  return {
    options,
    correctIndex,
    correctOption,
  };
};
