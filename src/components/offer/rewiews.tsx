import { useState } from 'react';
import { OfferReview } from './offer-review.tsx';
import { ReviewData } from '../../types.ts';


export function Reviews() {

  const [review, setReview] = useState({
    id: 0,
    image: 'img/avatar-max.jpg',
    userName: 'Max',
    rating: 0,
    userText: '',
    date: new Date().toLocaleDateString(),
    monthYear: '',
  });

  const [comments, setComments] = useState<ReviewData[]>([{
    id: 0,
    image: 'img/avatar-max.jpg',
    userName: 'Max',
    rating: 3,
    userText: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2019-04-24',
    monthYear: '',
  }]);

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    setComments([...comments,{
      ...review,
      id: comments.length,
      date: new Date().toLocaleDateString()
    }]);

    setReview({
      id: comments.length,
      image: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: 0,
      userText: '',
      date: new Date().toLocaleDateString(),
      monthYear: '',
    });

  };

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((comment) =>
          <OfferReview key={comment.id} info={comment}/>
        )}
      </ul>
      <form onSubmit={handleSubmit} className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {[1, 2, 3, 4, 5].map((rating) => (
            <>
              <input
                checked={review.rating === rating}
                onChange={() => setReview({...review, rating})}
                className="form__rating-input visually-hidden"
                name="rating"
                value={rating}
                id={`${rating}-stars`}
                type="radio"
              />
              <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title="cn">
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </>
          )).reverse()}
        </div>
        <textarea
          onChange={(evt) => setReview({...review, userText: evt.target.value})}
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          value={review.userText}
        >
        </textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

