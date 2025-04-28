import classNames from 'classnames';
import { Link } from 'react-router-dom';

type CityProps = {
  city: string;
  isCheck: boolean;
  handleClickOnCity: (city: string) => void;
};

function City({city, isCheck, handleClickOnCity} : CityProps) {
  return (
    <li className="locations__item">
      <Link to="#" className={classNames('locations__item-link tabs__item', {'tabs__item--active' : isCheck })} onClick={() => handleClickOnCity(city)}>
        <span>{city}</span>
      </Link>
    </li>
  );
}


export {City};
