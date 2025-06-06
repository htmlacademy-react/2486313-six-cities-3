import { sortTypes } from '../../const/const.ts';
import { useState } from 'react';
import { SortProps } from '../../types/types.ts';


export function MainSort({ onSortChange, activeSort } : SortProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSortClick = (sortType : string) => {
    onSortChange(sortType);
    setIsOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
      >
        {sortTypes[activeSort]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpen && (
        <ul className="places__options places__options--custom places__options--opened">
          {Object.entries(sortTypes).map(([type, label]) => (
            <li
              key={type}
              className={`places__option ${activeSort === type ? 'places__option--active' : ''}`}
              tabIndex={0}
              onClick={() => handleSortClick(type)}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
