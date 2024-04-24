// import { PlayerContext } from './../hooks/usePlayer';
import { PropsWithChildren, createContext, useCallback, useContext, useEffect, useState } from 'react';
import { GameType, Player, Round } from '../lib/types';
import { getNewRound } from '../lib/game';
import { DEFAULT_VICTORY_CELEBRATION_TIME, DEFAULT_VICTORY_POINTS } from '../lib/constants';

const GameContext = createContext<{
  player: Player;
  setPlayer: (player: Player) => void;
  round: Round;
  points: number;
  pointsRequiredForVictory: number;
  handleOptionGuess: (index: number, correct?: VoidFunction, wrong?: VoidFunction, victory?: VoidFunction) => void;
  gameVictory: boolean;
}>({
  player: Player.Nico,
  setPlayer: () => {},
  round: getNewRound(GameType.TextAndSoundToImage),
  points: 0,
  pointsRequiredForVictory: 0,
  handleOptionGuess: () => {},
  gameVictory: false,
});

export const useGameInformation = () => {
  return useContext(GameContext);
};

export const GameContextProvider = ({ children }: PropsWithChildren) => {
  const [player, setPlayer] = useState(Player.Nico);
  const [round, setRound] = useState(getNewRound());
  const [pointsRequiredForVictory] = useState(DEFAULT_VICTORY_POINTS);
  const [points, setPoints] = useState(0);
  const [gameVictory, setGameVictory] = useState(false);

  const resetGame = useCallback(() => {
    console.log('here');
    setPoints(0);
    setRound(getNewRound());
    setGameVictory(false);
  }, []);

  useEffect(() => {
    if (gameVictory) setTimeout(resetGame, DEFAULT_VICTORY_CELEBRATION_TIME);
  }, [gameVictory, resetGame]);

  const handleOptionGuess = useCallback(
    (index: number, correct?: VoidFunction, wrong?: VoidFunction, victory?: VoidFunction) => {
      if (index === round.correctIndex) {
        if (points + 1 === pointsRequiredForVictory) {
          setGameVictory(true);
          victory?.();
        } else {
          correct?.();
        }
        setPoints(points + 1);
      } else {
        wrong?.();
        if (points > 0) setPoints(points - 1);
      }
      // Get new round either case
      setRound(getNewRound());
    },
    [points, pointsRequiredForVictory, round.correctIndex],
  );

  return (
    <GameContext.Provider
      value={{
        player,
        setPlayer,
        round,
        points,
        pointsRequiredForVictory,
        handleOptionGuess,
        gameVictory,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
