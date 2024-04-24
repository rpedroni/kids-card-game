import clsx from 'clsx';
import { Player } from './types';

export const classNameWithPlayer = (className: string, player: Player) =>
  clsx(className, `${className}--${player === Player.Nico ? 'nico' : 'kike'}`);
