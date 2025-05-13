import { OfferImage } from './offer-image.tsx';
import { Card } from '../card.tsx';
import { Reviews } from './rewiews.tsx';
import { OfferHost } from './offer-host.tsx';
import { OfferInside } from './offer-inside.tsx';
import { OfferFeature } from './offer-feature.tsx';
import { TypeCard, offerImage, offerInside } from '../../const/const.ts';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { ReviewData } from '../../types/types.ts';
import { useAppSelector } from '../../hooks/index.ts';
import Map from '../map.tsx';


function OfferCard() {
  const params = useParams();

  const offers = useAppSelector((store) => store.listOffers);

  const offer = offers.find((offerProps) => offerProps.id === params.id);

  const [review, setReview] = useState({
    id: 0,
    image: 'img/avatar-max.jpg',
    userName: 'Max',
    rating: 0,
    userText: '',
    date: new Date().toLocaleDateString(),
    monthYear: new Date().toLocaleDateString('en', {
      month: 'short',
      year: 'numeric'
    })
  });

  const [comments, setComments] = useState<ReviewData[]>([{
    id: 0,
    image: 'img/avatar-max.jpg',
    userName: 'Max',
    rating: 3,
    userText: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2019-04-24',
    monthYear: 'April 2019'
  }]);

  const handleInputChange = (value : number) => {
    setReview({...review, rating: value});
  };

  const handleTextareaChange = (userText : string) => {
    setReview({...review, userText: userText});
  };

  const handleFormSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    setReview({
      id: comments.length,
      image: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: 0,
      userText: '',
      date: new Date().toLocaleDateString(),
      monthYear: new Date().toLocaleDateString('en', {
        month: 'short',
        year: 'numeric'
      })
    });

    setComments([{
      ...review,
      id: comments.length,
      date: new Date().toLocaleDateString(),
      monthYear: new Date().toLocaleDateString('en', {
        month: 'short',
        year: 'numeric'
      })
    },
    ...comments]);
  };

  if (offer !== undefined) {
    const rating = offer.rating * 20;

    return(
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offerImage.map((item) =>
                <OfferImage key={offerImage.indexOf(item)} image={item} />
              )}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              { offer?.isPremium ?
                <div className="offer__mark">
                  <span>
                    Premium
                  </span>
                </div>
                : ''}
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
                    <OfferInside key={offerInside.indexOf(offerIns)} textContent={offerIns}/>
                  )}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <OfferHost image={ offer?.host.avatarUrl } name={ offer?.host.name } status={ offer?.host.isPro } description={ offer?.description }/>
              </div>
              <Reviews
                comments={comments}
                handleFormSubmit={handleFormSubmit}
                handleInputChange={handleInputChange}
                handleTextareaChange={handleTextareaChange}
                review={review}
              />
            </div>
          </div>
          <section className="offer__map map">
            <Map city={offers[1].location} points={offers.slice(0,3)} selectedPoint={undefined}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              { offers.slice(0,3).map((offerPlace) =>
                <Card key={offerPlace.id} offer={offerPlace} typeCard={TypeCard.Offer}/>
              )}
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export {OfferCard};
