import { motion } from 'framer-motion';
import { useSpeech } from '../../hooks/useSpeech';
import { Option } from '../../lib/types';

import './OptionDisplay.css';

export const OptionDisplay = ({ option }: { option: Option }) => {
  const { start: playSound } = useSpeech(option.wordPT);

  // If we want auto play the sound when the option changes
  // useEffect(() => {
  //   playSound();
  // }, [option, playSound]);

  return (
    <header className="option-display">
      <h1>{option.wordPT} </h1>
      <motion.button whileHover={{ scale: 1.5 }} whileTap={{ scale: 1.5 }} onClick={playSound}>
        <img src="/media/images/sound-icon.png" alt="sound" />
      </motion.button>
    </header>
  );
};
