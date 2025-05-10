import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { City } from '../types';

type TownProps = {
  city: City;
  isCheck: boolean;
  handleLocationClick: (city: City) => void;
};

function Town({city, isCheck, handleLocationClick} : TownProps) {
  return (
    <li className="locations__item">
      <Link to="#" className={classNames('locations__item-link tabs__item', {'tabs__item--active' : isCheck })} onClick={() => handleLocationClick(city)}>
        <span>{city.name}</span>
      </Link>
    </li>
  );
}


export {Town};
