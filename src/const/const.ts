export const RATING_NUMBER = 20;

export const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];


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

export const offerInside: string[] = [ 'Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge' ];
export const offerImage: string[] = ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'];

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const IconSize = {
  WIDTH: 40,
  HEIGHT: 40,
};

export const AnchorCoords = {
  X: 20,
  Y: 40
};

export const MAX_RATING_VALUE = 5;

export const Action = {
  CITY: 'CITY',
  LIST_OFFERS: 'LIST_OFFERS',
  SORT_OFFERS: 'SORT_OFFERS',
  OFFER_HOVER: 'OFFER_HOVER',
  OFFER_LEAVE: 'OFFER_LEAVE',
};

export const sortTypes = {
  popular: 'Popular',
  priceLowToHigh: 'Price: low to high',
  priceHighToLow: 'Price: high to low',
  topRatedFirst: 'Top rated first'
} as const;

