
type CityProps = {
  city: string;
  isCheck: boolean;
};

function City({city, isCheck} : CityProps) {
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${isCheck ? 'tabs__item--active' : ''}`} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
}


export {City};
