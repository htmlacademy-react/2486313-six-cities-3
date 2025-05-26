import classNames from 'classnames';
import { Link } from 'react-router-dom';

type TownProps = {
  city: string;
  isCheck: boolean;
  onLocationClick: (city: string) => void;
};

function Town({city, isCheck, onLocationClick} : TownProps) {
  return (
    <li className="locations__item">
      <Link to="#" className={classNames('locations__item-link tabs__item', {'tabs__item--active' : isCheck })} onClick={() => onLocationClick(city)}>
        <span>{city}</span>
      </Link>
    </li>
  );
}


export {Town};
