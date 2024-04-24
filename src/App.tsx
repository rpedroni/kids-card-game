// @ts-ignore
import Sky from 'react-sky';

import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ProgressBar } from './components/ProgressBar/ProgressBar';
import { OptionDisplay } from './components/OptionDisplay/OptionDisplay';
import { useGameInformation } from './context/gameContext';
import { CardOptionList } from './components/CardList/CardOptionList';
import { Player } from './lib/types';
import { Celebration } from './components/Celebration/Celebration';
import { useSounds } from './hooks/useSounds';

const App = () => {
  const { player, setPlayer, handleOptionGuess } = useGameInformation();
  const { playCorrectSfx, playWrongSfx } = useSounds();

  const handleCardClick = (index: number) => handleOptionGuess(index, handleCorrectOption, handleWrongOption);

  const handleCorrectOption = () => playCorrectSfx();
  const handleWrongOption = () => playWrongSfx();

  return (
    <div className="app">
      <Sky
        images={{
          0: `/media/images/${player === Player.Nico ? 'shark.png' : 'sports.png'}`,
        }}
        how={20} /* Pass the number of images Sky will render choosing randomly */
        time={60} /* time of animation */
        size={'100px'} /* size of the rendered images */
      />

      <Celebration />

      <NavBar player={player} onChangePlayer={setPlayer} />

      <div className="app__container">
        <OptionDisplay />

        <ProgressBar />

        <CardOptionList onCardOptionClick={handleCardClick} />
      </div>
    </div>
  );
};

export default App;
