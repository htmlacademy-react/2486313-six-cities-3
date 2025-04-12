import { Card } from './card.tsx';
import { TypeCard } from '../const.tsx';
import { OfferProps } from '../types.ts';
import { cityMain } from '../const.tsx';

function Favorites({offers} : OfferProps) {
  return(
    <>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {offers.map((offer) => {
                const {id, type, isPremium, previewImage, price, rating, title, city, isFavorite} = offer;
                return cityMain.map((location) => {
                  if (location.city === city.name && isFavorite === true) {
                    return (
                      <li key={offer.id} className="favorites__locations-items">
                        <div className="favorites__locations locations locations--current">
                          <div className="locations__item">
                            <a className="locations__item-link" href="#">
                              <span>{location.city}</span>
                            </a>
                          </div>
                        </div>
                        <div className="favorites__places">
                          <Card
                            key={offer.id}
                            id={id}
                            typeCard={TypeCard.Favorites}
                            isPremium={isPremium}
                            previewImage={previewImage}
                            price={price}
                            rating={rating}
                            title={title}
                            type={type}
                          />
                        </div>
                      </li>
                    );
                  }
                });
              })}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </>
  );
}

export {Favorites};
