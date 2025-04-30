import { OfferProps } from '../../types.ts';
import { Card } from '../card.tsx';
import { TypeCard } from '../../const/const.ts';


function ListOffers({offers} : OfferProps) {
  return (
    <>
      { offers.map((offer) =>
        <Card key={offer.id} offer={offer} typeCard={TypeCard.Place}/>
      )}
    </>
  );
}

export {ListOffers};
