import { City } from './city.tsx';
import { cities } from '../const/const.ts';
import { CITY } from '../const/city.ts';
import { OfferProps } from '../types.ts';
import { ListOffers } from './offer/list-offers.tsx';
import Map from './map.tsx';
import { useState } from 'react';


function PageMain({offers} : OfferProps) {
  const [currentCity, setCurrentCity] = useState('Amsterdam');
  const [id, setId] = useState(1);

  function handleClickOnCity (city : string) {
    setCurrentCity(city);
  }

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            { cities.map((town) =>
              town.city === currentCity
                ? <City key={id} city={town.city} isCheck handleClickOnCity={handleClickOnCity} />
                : <City key={id} city={town.city} isCheck={false} handleClickOnCity={handleClickOnCity} />
            )}
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option" tabIndex={0}>Popular</li>
                <li className="places__option places__option--active" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              <ListOffers offers={offers} />
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map city={CITY} points={offers} selectedPoint={undefined}/>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export {PageMain};
