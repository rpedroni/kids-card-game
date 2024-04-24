import { useEffect } from 'react';
import Confetti from 'react-confetti';

import './Celebration.css';
import { useWindowSize } from '@uidotdev/usehooks';
import { useSounds } from '../../hooks/useSounds';
import { useGameInformation } from '../../context/gameContext';
import { Player } from '../../lib/types';

export const Celebration = () => {
  const { width, height } = useWindowSize();
  const { playCelebrationSfx } = useSounds();
  const { gameVictory: start, player } = useGameInformation();

  useEffect(() => {
    console.log(start);
    if (start) playCelebrationSfx();
  }, [playCelebrationSfx, start]);

  return (
    <div className="celebration">
      <Confetti
        numberOfPieces={start ? 100 : 0}
        width={width!}
        height={height!}
        drawShape={(ctx) => {
          ctx.font = '30px Gill Sans';
          ctx.fillText(player === Player.Nico ? 'NICO!' : 'KIKE!', 20, 40);
        }}
        colors={['#000000']}
      />
      <Confetti numberOfPieces={start ? 300 : 0} width={width!} height={height!} />)
    </div>
  );
};
