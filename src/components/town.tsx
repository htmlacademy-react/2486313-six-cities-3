import classNames from 'classnames';
import { Link } from 'react-router-dom';

type TownProps = {
  city: string;
  isCheck: boolean;
  handleLocationClick: (city: string) => void;
};

function Town({city, isCheck, handleLocationClick} : TownProps) {
  return (
    <li className="locations__item">
      <Link to="#" className={classNames('locations__item-link tabs__item', {'tabs__item--active' : isCheck })} onClick={() => handleLocationClick(city)}>
        <span>{city}</span>
      </Link>
    </li>
  );
}


export {Town};
