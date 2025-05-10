import { Town } from './town.tsx';
import { OfferProps, City } from '../types.ts';
import { Card } from './card.tsx';
import { TypeCard } from '../const/const.ts';
import Map from './map.tsx';
import { useState } from 'react';


function PageMain({offers} : OfferProps) {
  const [currentCity, setCurrentCity] = useState({
    name: 'Amsterdam',
    location: {
      latitude: 52.3609553943508,
      longitude:  4.85309666406198,
      zoom: 12
    }
  });

  function handleLocationClick (city: City) {
    setCurrentCity(city);
  }

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {
              offers
                .filter((offer, index, self) =>
                  index === self.findIndex((o) => o.city.name === offer.city.name)
                )
                .map((offer) => (
                  <Town
                    key={offer.city.name}
                    city={offer.city}
                    isCheck={offer.city.name === currentCity.name}
                    handleLocationClick={handleLocationClick}
                  />
                ))
            }
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
              { offers.map((offer) =>
                offer.city.name === currentCity.name ? <Card key={offer.id} offer={offer} typeCard={TypeCard.Place}/> : ''
              )}
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map city={currentCity.location} points={offers} selectedPoint={undefined}/>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export {PageMain};
