import { Switch, Text } from '@chakra-ui/react';

import './NavBar.css';
import { Player } from '../../lib/types';
import clsx from 'clsx';

export const NavBar = ({ player, onChangePlayer }: { player: Player; onChangePlayer: (player: Player) => void }) => (
  <nav className={clsx('nav-bar', player === Player.Nico ? 'nav-bar--nico' : 'nav-bar--kike')}>
    <Text className={clsx('nav-bar__option', player === Player.Nico && 'active')}>NICOLAS</Text>
    <Switch
      colorScheme="teal"
      size="lg"
      onChange={() => onChangePlayer(player === Player.Nico ? Player.Kike : Player.Nico)}
    />
    <Text className={clsx('nav-bar__option', player === Player.Kike && 'active')}>HENRIQUE</Text>
  </nav>
);
