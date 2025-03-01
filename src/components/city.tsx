
type renderCity = ({city: string; isCheck: boolean});

function RenderCity ({city, isCheck} : renderCity) {
  return (
    <li className="locations__item">
      {isCheck ? <a className="locations__item-link tabs__item tabs__item--active" href="#"> <span>{city}</span></a> : <a className="locations__item-link tabs__item" href="#"> <span>{city}</span></a>}
    </li>
  );
}


export {RenderCity};
