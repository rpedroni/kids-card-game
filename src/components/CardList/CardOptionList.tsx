import { useGameInformation } from '../../context/gameContext';
import { Option, Player } from '../../lib/types';
import Card from '../Card/Card';

import './CardOptionList.css';

export const CardOptionList = ({
  onCardOptionClick,
}: {
  onCardOptionClick: (index: number, option: Option) => void;
}) => {
  const { round, player, gameVictory } = useGameInformation();

  return (
    <div className="card-option-list">
      {gameVictory ? (
        <div className="victory">
          <h1>{player === Player.Nico ? 'NICO!' : 'KIKE!'}</h1>
          <img src={`/media/images/${player === Player.Nico ? 'nico' : 'kike'}.jpeg`} alt="winner" />
        </div>
      ) : (
        round.options.map((option, index) => (
          <Card
            key={option.wordEN}
            onClick={() => onCardOptionClick(index, option)}
            imageUrl={option.imageUrl}
            altText={option.wordPT}
          />
        ))
      )}
    </div>
  );
};
