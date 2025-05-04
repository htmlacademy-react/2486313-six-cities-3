import { OfferType } from '../types.ts';

export const offers: Array<OfferType> = [
  {
    id: '27cd0cb9-1380-4b6c-aabe-580dd05484b3',
    title: 'Wood and stone place',
    type: 'Hotel',
    price: 115,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
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
      'img/apartment-03.jpg',
    ],
    maxAdults: 4,
    previewImage: 'img/apartment-small-03.jpg'
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f30',
    title: 'Luxurious studio',
    type: 'Apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude:  4.85309666406198,
        zoom: 12
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude:  4.85309666406198,
      zoom: 12
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Heating',
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false,
    },
    images: [
      'img/apartment-02.jpg',
    ],
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg'
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Luxurious studio',
    type: 'Apartment',
    price: 12,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.929309666406198,
        zoom: 12
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.929309666406198,
      zoom: 12
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Heating',
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false,
    },
    images: [
      'img/apartment-01.jpg',
    ],
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg'
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f01',
    title: 'Wood and stone place',
    type: 'room',
    price: 1000,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 12
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 12
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Heating',
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false,
    },
    images: [
      'img/room.jpg',
    ],
    maxAdults: 4,
    previewImage: 'img/room.jpg'
  },
];
