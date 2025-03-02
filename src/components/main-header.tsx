import { City } from './city.tsx';
import { PlaceCard } from './place-card.tsx';


function MainHeader() {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <City city="Paris" isCheck={false} />
            <City city="Cologne" isCheck={false}/>
            <City city="Brussels" isCheck={false}/>
            <City city="Amsterdam" isCheck/>
            <City city="Hamburg" isCheck={false}/>
            <City city="Dusseldorf" isCheck={false}/>
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              <PlaceCard isPremium imageCard="img/apartment-01.jpg" price={120} widthCard="80%" nameCard='Beautiful &amp; luxurious apartment at great location' typeCard='Apartment'/>
              <PlaceCard isPremium={false} imageCard="img/room.jpg" price={80} widthCard="80%" nameCard='Wood and stone place' typeCard='Room'/>
              <PlaceCard isPremium={false} imageCard="img/apartment-02.jpg" price={132} widthCard="80%" nameCard='Canal View Prinsengracht' typeCard='Apartment'/>
              <PlaceCard isPremium imageCard="img/apartment-03.jpg" price={180} widthCard="100%" nameCard='Nice, cozy, warm big bed apartment' typeCard='Apartment'/>
              <PlaceCard isPremium={false} imageCard="img/room.jpg" price={80} widthCard="80%" nameCard='Wood and stone place' typeCard='Room'/>
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  );
}

export {MainHeader};
