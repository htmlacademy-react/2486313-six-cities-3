import { TypeCard } from '../const.tsx';

export const offerCards = [
  {
    typeCard: TypeCard.Offer,
    isPremium: false,
    image: 'img/room.jpg',
    price: 80,
    rating: 4,
    text: 'Wood and stone place',
    type: 'Room'
  },
  {
    typeCard: TypeCard.Offer,
    isPremium: false,
    image: 'img/apartment-02.jpg',
    price: 132,
    rating: 4,
    text: 'Canal View Prinsengracht',
    type: 'Apartment'
  },
  {
    typeCard: TypeCard.Offer,
    isPremium: true,
    image: 'img/apartment-03.jpg',
    price: 180,
    rating: 5,
    text: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment'
  },
];
