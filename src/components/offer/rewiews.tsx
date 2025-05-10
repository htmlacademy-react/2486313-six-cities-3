import { OfferReview } from './offer-review.tsx';
import { ReviewData } from '../../types.ts';
import React from 'react';
import { MAX_RATING_VALUE } from '../../const/const.ts';

type CommentsProps = {
  comments: ReviewData[];
  handleFormSubmit: (evt: React.FormEvent) => void;
  handleInputChange: (value: number) => void;
  handleTextareaChange: (userText: string) => void;
  review: ReviewData;
}


export function Reviews({comments, handleFormSubmit, handleInputChange, handleTextareaChange, review} : CommentsProps) {

  function getRatingTitle(rating : number) {
    switch (rating) {
      case 5: return 'perfect';
      case 4: return 'good';
      case 3: return 'not bad';
      case 2: return 'badly';
      case 1: return 'terribly';
    }
  }

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((comment) =>
          <OfferReview key={comment.id} info={comment}/>
        )}
      </ul>
      <form onSubmit={handleFormSubmit} className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {Array.from({ length: MAX_RATING_VALUE }, (_, i) => MAX_RATING_VALUE - i).map((value) => (
            <React.Fragment key={value}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={value}
                id={`${value}-stars`}
                type="radio"
                onChange={() => handleInputChange(value)}
                checked={review.rating === value}
                key={`input-${value}`}
                data-testid={`formRating-${value}`}
              />
              <label
                htmlFor={`${value}-stars`}
                className="reviews__rating-label form__rating-label"
                title={getRatingTitle(value)}
                key={`label-${value}`}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          ))}
        </div>
        <textarea
          onChange={(evt) => handleTextareaChange(evt.target.value)}
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          value={review.userText}
        >
        </textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set
            <span className="reviews__star">
              rating
            </span>
            and describe your stay with at least
            <b className="reviews__text-amount">
              50 characters
            </b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

