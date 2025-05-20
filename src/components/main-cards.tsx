import { Card } from './card.tsx';
import { TypeCard } from '../const/const.ts';
import Map from './map.tsx';
import { PropsCards } from '../types/types.ts';

export function MainCards({offers, currentCity} : PropsCards) {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {offers.filter((offer) => offer.city.name === currentCity).length} places to stay in {currentCity}
          </b>
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
            {offers
              .filter((offer) => offer.city.name === currentCity)
              .map((offer) => (
                <Card key={offer.id} offer={offer} typeCard={TypeCard.Place} />
              ))}
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map
              key={currentCity}
              city={offers.find((offer) => offer.city.name === currentCity)?.city.location}
              points={offers.filter((offer) => offer.city.name === currentCity)}
              selectedPoint={undefined}
            />
          </section>
        </div>
      </div>
    </div>
  );
}
