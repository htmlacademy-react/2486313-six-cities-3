import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CardProps } from '../types.ts';


function Card({typeCard, id, isPremium, images, price, rating, title, type}: CardProps) {

  const [state, setState] = useState({

  });

  function handleFocus() {
    setState({...state,

    });
  }

  const cardClass = {
    'FAVORITES': 'favorites__card',
    'PLACE': 'cities__card',
    'OFFER': 'near-places__card',
  }[typeCard];

  const imageClass = {
    'FAVORITES': 'favorites__image-wrapper',
    'PLACE': 'cities__image-wrapper',
    'OFFER': 'near-places__image-wrapper',
  }[typeCard];

  const imageWidth = typeCard === 'FAVORITES' ? 150 : 260;
  const imageHeight = typeCard === 'FAVORITES' ? 110 : 200;

  return (
    <article className={`${cardClass} place-card`} style={state} onFocus={handleFocus}>
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
      <div className={`${imageClass} place-card__image-wrapper`}>
        <Link to={`../offer/${id}`}>
          <img className="place-card__image" src={images[0]} width={imageWidth} height={imageHeight} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${typeCard === 'FAVORITES' ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{typeCard === 'FAVORITES' ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: rating * 20 }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export {Card};
