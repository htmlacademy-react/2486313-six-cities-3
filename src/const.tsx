
const ratingNumber = 20;

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

export { offerImage, offerInside, ratingNumber };
