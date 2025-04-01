import { Card } from './card.tsx';
import { favoritesCards } from '../mocks/favorites-cards.ts';

function Favorites() {
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
                  { favoritesCards.slice(0, 2).map((card) =>
                    <Card key={''} typeCard={card.typeCard} isPremium={card.isPremium} image={card.image} price={card.price} rating={card.rating * 20} text={card.text} type={card.type}/>
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
                  { favoritesCards.slice(2).map((card) =>
                    <Card key={''} typeCard={card.typeCard} isPremium={card.isPremium} image={card.image} price={card.price} rating={card.rating * 20} text={card.text} type={card.type}/>
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
