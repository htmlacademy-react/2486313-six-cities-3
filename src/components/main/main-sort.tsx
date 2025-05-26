
import { useState } from 'react';

type SortProps = {
  onSortChange: (newSortType : string) => void;
}


export function MainSort({ onSortChange } : SortProps) {
  const [activeSort, setActiveSort] = useState('popular');
  const [isOpen, setIsOpen] = useState(false);

  const handleSortClick = (sortType : string) => {
    setActiveSort(sortType);
    onSortChange(sortType);
    setIsOpen(false);
  };

  const sortTypes = {
    popular: 'Popular',
    priceLowToHigh: 'Price: low to high',
    priceHighToLow: 'Price: high to low',
    topRatedFirst: 'Top rated first'
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
