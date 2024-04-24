import { motion } from 'framer-motion';

import './ProgressBar.css';
import { GAME_WIN_POINTS } from '../../lib/constants';
import { useWindowSize } from '@uidotdev/usehooks';
import { usePlayer } from '../../context/context';
import { classNameWithPlayer } from '../../lib/utils';
import { Text } from '@chakra-ui/react';

export const ProgressBar = ({ points, winPoints = GAME_WIN_POINTS }: { points: number; winPoints?: number }) => {
  const [player] = usePlayer();
  const percentage = points / winPoints;

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
