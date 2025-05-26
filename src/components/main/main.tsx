import { ListCities } from '../list-cities.tsx';
import { MainEmpty } from '../../pages/main-empty.tsx';
import { useAppSelector, useAppDispatch } from '../../hooks/index.ts';
import { cityAction } from '../../store/action.ts';
import { MainCards } from './main-cards.tsx';


function PageMain() {

  const currentCity = useAppSelector((store) => store.city);

  const offers = useAppSelector((store) => store.listOffers);

  const dispatch = useAppDispatch();

  function handleLocationClick (city: string) {
    dispatch(cityAction(city));
  }

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ListCities currentCity={currentCity} onLocationClick={handleLocationClick} />
        </section>
      </div>
      {offers.some((offer) => offer.city.name === currentCity) ?
        (<MainCards offers={offers} currentCity={currentCity}/>) :
        (<MainEmpty currentCity={currentCity} />)}
    </main>
  );
}

export {PageMain};
