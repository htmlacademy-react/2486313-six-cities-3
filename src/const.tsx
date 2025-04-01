import { OfferType } from './types.ts';

export const cityMain = [
  {
    city: 'Paris',
    isCheck: false,
  },
  {
    city: 'Cologne',
    isCheck: false,
  },
  {
    city: 'Brussels',
    isCheck: false,
  },
  {
    city: 'Amsterdam',
    isCheck: true,
  },
  {
    city: 'Hamburg',
    isCheck: false,
  },
  {
    city: 'Dusseldorf',
    isCheck: false,
  },
];


const offers: Array<OfferType> = [
  {
    id: '27cd0cb9-1380-4b6c-aabe-580dd05484b3',
    title: 'Wood and stone place',
    type: 'hotel',
    price: 115,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.8,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Heating',
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: false,
    },
    images: [
      'https://url-to-image/image.png',
    ],
    maxAdults: 4,
  }
];

export const enum TypeCard {
  Offer = 'OFFER',
  Favorites = 'FAVORITES',
  Place = 'PLACE',
}

export const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NOAUTH',
  Unknown = 'UKNOWN',
}

const offerInside: string[] = [ 'Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge' ];
const offerImage: string[] = ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'];

export {offers, offerImage, offerInside};
