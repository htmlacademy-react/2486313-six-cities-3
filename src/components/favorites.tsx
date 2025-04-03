import { Card } from './card.tsx';
import { TypeCard } from '../const.tsx';
import { OfferProps } from '../types.ts';

function Favorites({offers} : OfferProps) {
  return(
    <>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  { offers.slice(0, 2).map(({id, type, isPremium, images, price, rating, title}) =>
                    <Card key={''} id={id} typeCard={TypeCard.Favorites} isPremium={isPremium} images={images} price={price} rating={rating} title={title} type={type}/>
                  )}
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  { offers.slice(2).map(({id, type, isPremium, images, price, rating, title}) =>
                    <Card key={''} id={id} typeCard={TypeCard.Favorites} isPremium={isPremium} images={images} price={price} rating={rating} title={title} type={type}/>
                  )}
                </div>
              </li>
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
