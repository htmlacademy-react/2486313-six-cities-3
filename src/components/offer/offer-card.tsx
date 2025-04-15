import { OfferImage } from './offer-image.tsx';
import { Card } from '../card.tsx';
import { Reviews } from './rewiews.tsx';
import { OfferHost } from './offer-host.tsx';
import { OfferInside } from './offer-inside.tsx';
import { OfferFeature } from './offer-feature.tsx';
import { TypeCard } from '../../const.tsx';
import { offerImage, offerInside } from '../../const.tsx';
import { useParams } from 'react-router-dom';
import { OfferProps } from '../../types.ts';


function OfferCard({offers} : OfferProps) {
  const params = useParams();
  const offer = offers.find((offerProps) => offerProps.id === params.id);
  if (offer !== undefined) {
    const rating = offer.rating * 20;

    return(
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offerImage.map((item) =>
                <OfferImage key={item} image={item} />
              )}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              { offer?.isPremium ? <div className="offer__mark"><span>Premium</span></div> : ''}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  { offer?.title }
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: rating}}>
                  </span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer?.rating}</span>
              </div>
              <OfferFeature placeName={offer?.type} bedrooms={offer?.bedrooms} maxAdults={offer?.maxAdults} />
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer?.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offerInside.map((offerIns) =>
                    <OfferInside key={''} textContent={offerIns}/>
                  )}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <OfferHost image={ offer?.host.avatarUrl } name={ offer?.host.name } status={ offer?.host.isPro } description={ offer?.description }/>
              </div>
              <Reviews />
            </div>
          </div>
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              { offers.slice(0,3).map((offerPlace) =>
                <Card key={offerPlace.id} offer={offerPlace} typeCard={TypeCard.Offer}/>)}
            </div>
          </section>
        </div>
      </main>
    );
  }

}

export {OfferCard};
