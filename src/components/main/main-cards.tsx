import { Card } from '../card.tsx';
import { TypeCard } from '../../const/const.ts';
import Map from '../map.tsx';
import { OfferType, PropsCards } from '../../types/types.ts';
import { MainSort } from './main-sort.tsx';
import { useState, useMemo } from 'react';

export function MainCards({offers, currentCity} : PropsCards) {
  const [sortType, setSortType] = useState('popular');
  const [activeOfferHover, setActiveOfferHover] = useState<OfferType>();

  const sortedOffers = useMemo(() => {
    const cityOffers = offers.filter((offer) => offer.city.name === currentCity);

    switch(sortType) {
      case 'priceLowToHigh':
        return [...cityOffers].sort((a, b) => a.price - b.price);
      case 'priceHighToLow':
        return [...cityOffers].sort((a, b) => b.price - a.price);
      case 'topRatedFirst':
        return [...cityOffers].sort((a, b) => b.rating - a.rating);
      default:
        return cityOffers;
    }

  }, [offers, currentCity, sortType]);

  function handleSortChange (newSortType : string) {
    setSortType(newSortType);
  }

  function handleOfferHover (offer : OfferType) {
    setActiveOfferHover(offer);
  }

  function handleOfferLeave () {
    setActiveOfferHover(undefined);
  }


  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {offers.filter((offer) => offer.city.name === currentCity).length} places to stay in {currentCity}
          </b>
          <MainSort onSortChange={handleSortChange}/>
          <div className="cities__places-list places__list tabs__content">
            {sortedOffers
              .map((offer) => (
                <Card
                  key={offer.id}
                  offer={offer}
                  typeCard={TypeCard.Place}
                  onOfferHover={handleOfferHover}
                  onOfferLeave={handleOfferLeave}
                />
              ))}
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map
              key={currentCity}
              city={offers.find((offer) => offer.city.name === currentCity)?.city.location}
              points={offers.filter((offer) => offer.city.name === currentCity)}
              selectedPoint={activeOfferHover}
            />
          </section>
        </div>
      </div>
    </div>
  );
}
