import { Card } from './card.tsx';
import { TypeCard } from '../const';

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
                  <Card typeCard={TypeCard.Favorites} isPremium image="img/apartment-small-03.jpg" price={180} width="100%" text='Nice, cozy, warm big bed apartment' type='Apartment'/>
                  <Card typeCard={TypeCard.Favorites} isPremium={false} image="img/room-small.jpg" price={80} width="80%" text='Wood and stone place' type='Room'/>
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
                  <Card typeCard={TypeCard.Favorites} isPremium={false} image="img/apartment-small-04.jpg" price={180} width="100%" text='White castle' type='Apartment'/>
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
