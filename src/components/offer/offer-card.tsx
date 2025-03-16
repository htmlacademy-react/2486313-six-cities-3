type OfferCardProps = {
  isPremium: boolean;
  imageCard: string;
  price: number;
  widthCard: string;
  textCard: string;
  typeCard: string;
};

function OfferCard ({isPremium, imageCard, price, widthCard, textCard, typeCard} : OfferCardProps) {
  return (
    <article className='near-places__card place-card'>
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={imageCard} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: widthCard}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{textCard}</a>
        </h2>
        <p className="place-card__type">{typeCard}</p>
      </div>
    </article>
  );
}

export {OfferCard};
