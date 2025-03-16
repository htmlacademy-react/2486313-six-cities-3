
type OfferStarsProps = {
  value: string;
  id: string;
  title: string;
}

function OfferStar({value, id, title} : OfferStarsProps) {
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={value} id={id} type="radio" />
      <label htmlFor={id} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export {OfferStar};
