// import { PlayerContext } from './../hooks/usePlayer';
import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { Player } from '../lib/types';

const PlayerContext = createContext<[Player, (p: Player) => void]>([Player.Nico, () => {}]);

export const usePlayer = () => {
  return useContext(PlayerContext);
};

// export const

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [player, setPlayer] = useState(Player.Nico);

  return <PlayerContext.Provider value={[player, setPlayer]}>{children}</PlayerContext.Provider>;
};
