import { useState } from 'react';
// @ts-ignore
import Sky from 'react-sky';
import useSound from 'use-sound';

import { getNewRound } from './lib/game';

import './App.css';
import correctSfx from './sounds/correct-2.mp3';
import wrongSfx from './sounds/wrong-2.mp3';
import { NavBar } from './components/NavBar/NavBar';
import { ProgressBar } from './components/ProgressBar/ProgressBar';
import { OptionDisplay } from './components/OptionDisplay/OptionDisplay';
import { GAME_WIN_POINTS } from './lib/constants';
import { usePlayer } from './context/context';
import { CardOptionList } from './components/CardList/CardOptionList';
import { Player } from './lib/types';

const App = () => {
  const [player, setPlayer] = usePlayer();

  const [round, setRound] = useState(getNewRound());
  const [points, setPoints] = useState(0);

  const [playCorrectSfx] = useSound(correctSfx);
  const [playWrongSfx] = useSound(wrongSfx, { interrupt: false });

  const handleCardClick = (index: number) => {
    if (index === round.correctIndex) handleCorrectOption();
    else handleWrongOption();
  };

  const handleCorrectOption = () => {
    playCorrectSfx();
    setPoints(points + 1);
    if (points + 1 === GAME_WIN_POINTS) {
    } else {
      setRound(getNewRound());
    }
  };

  const handleWrongOption = () => {
    playWrongSfx();
    if (points > 0) setPoints(points - 1);
    setRound(getNewRound());
  };

  return (
    <div className="app">
      <Sky
        images={{
          0: `/media/images/${player === Player.Nico ? 'shark.png' : 'bowling-ball.webp'}`,
        }}
        how={20} /* Pass the number of images Sky will render choosing randomly */
        time={60} /* time of animation */
        size={'120px'} /* size of the rendered images */
      />

      <NavBar player={player} onChangePlayer={setPlayer} />

      <div className="app__container">
        <OptionDisplay option={round.correctOption} />

        <ProgressBar points={points} />

        <CardOptionList options={round.options} onCardOptionClick={handleCardClick} />
      </div>
    </div>
  );
};

export default App;
