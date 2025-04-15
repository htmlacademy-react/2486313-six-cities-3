
const RATING_NUMBER = 20;

export const cityMain = [
  {
    id: 1,
    city: 'Paris',
    isCheck: false,
  },
  {
    id: 2,
    city: 'Cologne',
    isCheck: false,
  },
  {
    id: 3,
    city: 'Brussels',
    isCheck: false,
  },
  {
    id: 4,
    city: 'Amsterdam',
    isCheck: true,
  },
  {
    id: 5,
    city: 'Hamburg',
    isCheck: false,
  },
  {
    id: 6,
    city: 'Dusseldorf',
    isCheck: false,
  },
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

export { offerImage, offerInside, RATING_NUMBER };
