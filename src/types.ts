
export type CardProps = {
  typeCard: string;
  isPremium: boolean;
  image: string;
  price: number;
  rating: number;
  text: string;
  type: string;
};

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type City = {
  name: string;
  location: Location;
}

type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
}
