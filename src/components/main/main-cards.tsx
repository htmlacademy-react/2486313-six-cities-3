import { Card } from '../card.tsx';
import { TypeCard } from '../../const/const.ts';
import Map from '../map.tsx';
import { OfferType, SortType } from '../../types/types.ts';
import { MainSort } from './main-sort.tsx';
import { useAppSelector, useAppDispatch } from '../../hooks/index.ts';
import { offerHoverAction, offerLeaveAction, sortAction } from '../../store/action.ts';

type MainCardsProps = {
  currentCity: string;
  activeOffers: OfferType[];
}

export function MainCards({ currentCity, activeOffers } : MainCardsProps) {

  const activeOfferHover = useAppSelector((store) => store.activeOfferHover);
  const sortType = useAppSelector((store) => store.sortType);
  const dispatch = useAppDispatch();

  function handleSortChange (newSortType : SortType) {
    dispatch(sortAction(newSortType));
  }

  function handleOfferHover (offer : OfferType) {
    dispatch(offerHoverAction(offer));
  }

  function handleOfferLeave () {
    dispatch(offerLeaveAction());
  }


  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {activeOffers.length} places to stay in {currentCity}
          </b>
          <MainSort onSortChange={handleSortChange} activeSort={sortType} />
          <div className="cities__places-list places__list tabs__content">
            {activeOffers
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
              city={activeOffers[0].city.location}
              points={activeOffers}
              selectedPoint={activeOfferHover}
            />
          </section>
        </div>
      </div>
    </div>
  );
}
