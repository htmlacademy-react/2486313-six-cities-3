import { TypeCard } from '../const/const.ts';

export type CardProps = {
  typeCard: TypeCard;
  offer: OfferType;
  onOfferHover?: (offer : OfferType) => void;
  onOfferLeave?: () => void;
};

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
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
  previewImage: string;
}


export type PropsCards = {
  offers: OfferType[];
  currentCity: string;
}

export type OfferProps = {
  offers: OfferType[];
}

export type OfferHostProps = {
  image: string;
  name: string;
  status: boolean;
  description: string;
}

export type OfferFeatureProps = {
  placeName: string;
  bedrooms: number;
  maxAdults: number;
}


export type ReviewData = {
  id: number;
  image: string;
  userName: string;
  rating: number;
  userText: string;
  date: string;
  monthYear: string;
}

export type OfferReviewProps = {
  info: ReviewData;
}
