import classNames from 'classnames';

type CityProps = {
  city: string;
  isCheck: boolean;
};

function City({city, isCheck} : CityProps) {
  return (
    <li className="locations__item">
      <a className={classNames('locations__item-link tabs__item', {'tabs__item--active' : isCheck })} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
}


export {City};
