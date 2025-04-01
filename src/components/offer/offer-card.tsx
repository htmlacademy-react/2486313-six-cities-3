import { OfferImage } from './offer-image.tsx';
import { Card } from '../card.tsx';
import { ReviewsForm } from './rewiews-form.tsx';
import { OfferReview } from './offer-review.tsx';
import { OfferHost } from './offer-host.tsx';
import { OfferInside } from './offer-inside.tsx';
import { OfferFeature } from './offer-feature.tsx';
import { OfferType } from '../../types.ts';
import { offerImage, offerInside } from '../../const.tsx';
import { useParams } from 'react-router-dom';
import { offerCards } from '../../mocks/offer-cards.ts';

type OfferProps = {
  offers: OfferType[];
}

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
                <OfferImage key={''} image={item} />
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
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                <ul className="reviews__list">
                  <OfferReview image='img/avatar-max.jpg' userName='Max' rating={4} userText='A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.' date='2019-04-24' monthYear='' />
                </ul>
                <ReviewsForm />
              </section>
            </div>
          </div>
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              { offerCards.map((offerMock) =>
                <Card key={''} typeCard={offerMock.typeCard} isPremium={offerMock.isPremium} image={offerMock.image} price={offerMock.price} rating={offerMock.rating * 20} text={offerMock.text} type={offerMock.type}/>
              )}
            </div>
          </section>
        </div>
      </main>
    );
  }

}

export {OfferCard};
