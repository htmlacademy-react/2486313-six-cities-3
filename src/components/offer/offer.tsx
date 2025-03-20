import { OfferImage } from './offer-image.tsx';
import { OfferCard } from './offer-card.tsx';
import { OfferStar } from './offer-star.tsx';
import { OfferReview } from './offer-review.tsx';
import { OfferHost } from './offer-host.tsx';
import { OfferInside } from './offer-inside.tsx';
import { OfferFeature } from './offer-feature.tsx';
import { OffersProps } from '../../const.tsx';
import { useParams } from 'react-router-dom';

type OfferProps = {
  offers: OffersProps[];
}

function Offer({offers} : OfferProps) {
  const params = useParams();
  const offer = offers.find((offerProps) => offerProps.id === params.id);

  return(
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            <OfferImage image= 'img/room.jpg' />
            <OfferImage image= 'img/apartment-01.jpg' />
            <OfferImage image= 'img/apartment-02.jpg' />
            <OfferImage image= 'img/apartment-03.jpg' />
            <OfferImage image= 'img/studio-01.jpg' />
            <OfferImage image= 'img/apartment-01.jpg' />
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
                <span style={{width: offer?.rating}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{offer?.rating}</span>
            </div>
            <ul className="offer__features">
              <OfferFeature textContent={ offer?.city.name } />
              <OfferFeature textContent= {`${offer?.bedrooms} Bedrooms`} />
              <OfferFeature textContent= {`Max ${ offer?.maxAdults } adults`} />
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{offer?.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                <OfferInside textContent='Wi-Fi'/>
                <OfferInside textContent='Washing machine'/>
                <OfferInside textContent='Towels'/>
                <OfferInside textContent='Heating'/>
                <OfferInside textContent='Coffee machine'/>
                <OfferInside textContent='Baby seat'/>
                <OfferInside textContent='Kitchen'/>
                <OfferInside textContent='Dishwasher'/>
                <OfferInside textContent='Cabel TV'/>
                <OfferInside textContent='Fridge'/>
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <OfferHost image={ offer?.host.avatarUrl } name={ offer?.host.name } status={ offer?.host.isPro } description={ offer?.description }/>
            </div>
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
              <ul className="reviews__list">
                <OfferReview image='img/avatar-max.jpg' userName='Max' width='80%' userText='A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.' date='2019-04-24' monthYear='' />
              </ul>
              <form className="reviews__form form" action="#" method="post">
                <label className="reviews__label form__label" htmlFor="review">Your review</label>
                <div className="reviews__rating-form form__rating">
                  <OfferStar value='5' id='5-stars' title='perfect' />
                  <OfferStar value='4' id='4stars' title='good' />
                  <OfferStar value='3' id='3-stars' title='not bad' />
                  <OfferStar value='2' id='2-stars' title='badly' />
                  <OfferStar value='1' id='1-star' title='terribly' />
                </div>
                <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
                <div className="reviews__button-wrapper">
                  <p className="reviews__help">
                    To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                  </p>
                  <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
                </div>
              </form>
            </section>
          </div>
        </div>
        <section className="offer__map map"></section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <OfferCard isPremium={false} image="img/room.jpg" price={80} width="80%" text='Wood and stone place' type='Room'/>
            <OfferCard isPremium={false} image="img/apartment-02.jpg" price={132} width="80%" text='Canal View Prinsengracht' type='Apartment'/>
            <OfferCard isPremium image="img/apartment-03.jpg" price={180} width="100%" text='Nice, cozy, warm big bed apartment' type='Apartment'/>
          </div>
        </section>
      </div>
    </main>);
}

export {Offer};
