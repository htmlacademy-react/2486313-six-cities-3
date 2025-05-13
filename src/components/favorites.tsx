import { Card } from './card.tsx';
import { TypeCard, cities } from '../const/const.ts';
import { useAppSelector } from '../hooks/index.ts';

function Favorites() {

  const offers = useAppSelector((store) => store.listOffers);

  return(
    <>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {offers.map((offer) => {
                const {city, isFavorite} = offer;
                return cities.map((location) => {
                  if (location === city.name && isFavorite === true) {
                    return (
                      <li key={offer.id} className="favorites__locations-items">
                        <div className="favorites__locations locations locations--current">
                          <div className="locations__item">
                            <a className="locations__item-link" href="#">
                              <span>{location}</span>
                            </a>
                          </div>
                        </div>
                        <div className="favorites__places">
                          <Card
                            offer={offer}
                            typeCard={TypeCard.Favorites}
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
