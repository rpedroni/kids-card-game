import useSound from 'use-sound';

import correctSfx from '../sounds/correct-2.mp3';
import wrongSfx from '../sounds/wrong-2.mp3';
import celebrationNicoSfx from '../sounds/celebration-nico.mp3';
import celebrationKikeSfx from '../sounds/celebration-kike.mp3';
import { useGameInformation } from '../context/gameContext';
import { Player } from '../lib/types';

export const useSounds = () => {
  const { player } = useGameInformation();

  const [playCorrectSfx] = useSound(correctSfx);
  const [playWrongSfx] = useSound(wrongSfx, { interrupt: false });
  const [playCelebrationSfx] = useSound(player === Player.Nico ? celebrationNicoSfx : celebrationKikeSfx, {
    interrupt: false,
  });

  return {
    playCorrectSfx,
    playWrongSfx,
    playCelebrationSfx,
  } as const;
};
