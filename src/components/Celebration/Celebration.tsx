import Confetti from 'react-confetti';
import { useEffect } from 'react';

import './Celebration.css';
import { useSounds } from '../../hooks/useSounds';
import { useGameInformation } from '../../context/gameContext';
import { Player } from '../../lib/types';

export const Celebration = () => {
  const { playCelebrationSfx } = useSounds();
  const { gameVictory: start, player } = useGameInformation();

  useEffect(() => {
    if (start) playCelebrationSfx();
  }, [playCelebrationSfx, start]);

  return (
    <div className="celebration">
      <Confetti
        numberOfPieces={start ? 100 : 0}
        drawShape={(ctx) => {
          ctx.font = '40px Gill Sans';
          ctx.fillText(player === Player.Nico ? 'NICO!' : 'KIKE!', 20, 40);
        }}
        colors={['#000000']}
      />
      <Confetti numberOfPieces={start ? 300 : 0} />)
    </div>
  );
};
