import { motion } from 'framer-motion';

import './ProgressBar.css';
import { useGameInformation } from '../../context/gameContext';
import { classNameWithPlayer } from '../../lib/utils';
import { Text } from '@chakra-ui/react';

export const ProgressBar = () => {
  const { player, points, pointsRequiredForVictory } = useGameInformation();
  const percentage = points / pointsRequiredForVictory;

  return (
    <div className="progress-bar">
      <motion.div
        className={classNameWithPlayer('progress-bar__bar', player)}
        initial={{ width: 0 }}
        animate={{ width: `${percentage * 100}%` }}
        transition={{ type: 'tween', duration: 0.5 }}
      >
        <Text>{points}</Text>
      </motion.div>
    </div>
  );
};
