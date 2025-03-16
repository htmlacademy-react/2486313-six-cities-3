
export type OffersProps = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
    bedrooms: number;
    goods: [
      string
    ];
    host: {
      name: string;
      avatarUrl: string;
      isPro: false;
    };
    images: [
      string
    ];
    maxAdults: number;
}

const offers: Array<OffersProps> = [
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

export const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NOAUTH',
  Unknown = 'UKNOWN',
}

export {offers};
