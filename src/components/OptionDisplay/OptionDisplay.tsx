import { motion } from 'framer-motion';
import { useSpeech } from '../../hooks/useSpeech';

import './OptionDisplay.css';
import { useGameInformation } from '../../context/gameContext';

export const OptionDisplay = () => {
  const { round, gameVictory } = useGameInformation();
  const { start: playSound } = useSpeech(round.correctOption.wordPT);

  return (
    <header className="option-display">
      {gameVictory ? (
        <h1>Viva o</h1>
      ) : (
        <>
          <h1>{round.correctOption.wordPT}</h1>
          <motion.button whileHover={{ scale: 1.5 }} whileTap={{ scale: 1.5 }} onClick={playSound}>
            <img src="/media/images/sound-icon.png" alt="sound" />
          </motion.button>
        </>
      )}
    </header>
  );
};
