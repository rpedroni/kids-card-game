import { Option } from '../../lib/types';
import Card from '../Card/Card';

import './CardOptionList.css';

export const CardOptionList = ({
  options,
  onCardOptionClick,
}: {
  options: Option[];
  onCardOptionClick: (index: number, option: Option) => void;
}) => {
  return (
    <div className="card-option-list">
      {options.map((option, index) => (
        <Card
          key={option.wordEN}
          onClick={() => onCardOptionClick(index, option)}
          imageUrl={option.imageUrl}
          altText={option.wordPT}
        />
      ))}
    </div>
  );
};
