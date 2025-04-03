import { OfferProps } from '../../types.ts';
import { Card } from '../card.tsx';
import { TypeCard } from '../../const.tsx';


function ListOffers({offers} : OfferProps) {
  return (
    <>
      { offers.map(({id, type, isPremium, images, price, rating, title}) =>
        <Card key={''} id={id} typeCard={TypeCard.Place} isPremium={isPremium} images={images} price={price} rating={rating} title={title} type={type}/>
      )}
    </>
  );
}

export {ListOffers};
