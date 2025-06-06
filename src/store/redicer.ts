import { createReducer } from '@reduxjs/toolkit';
import { cityAction, sortAction, offerHoverAction, offerLeaveAction } from './action.ts';
import { offers } from '../mocks/offers.ts';
import { OfferType, SortType } from '../types/types.ts';

type AppState = {
  city: string;
  sortType: SortType;
  listOffers: typeof offers;
  activeListOffers: typeof offers;
  activeOfferHover: OfferType | undefined;
};

const initialState: AppState = {
  city: 'Paris',
  sortType: 'popular',
  listOffers: offers,
  activeListOffers: offers.filter((offer) => offer.city.name === 'Paris'),
  activeOfferHover: undefined
};

export const updateStore = createReducer(initialState, (builder) => {
  builder
    .addCase(cityAction, (state, action) => {
      state.city = action.payload;
      state.activeListOffers = state.listOffers.filter((offer) => offer.city.name === state.city);
    })
    .addCase(sortAction, (state, action) => {
      state.sortType = action.payload;
      const sortedOffers = [...state.activeListOffers];
      switch(action.payload) {
        case 'priceLowToHigh':
          sortedOffers.sort((a, b) => a.price - b.price);
          break;
        case 'priceHighToLow':
          sortedOffers.sort((a, b) => b.price - a.price);
          break;
        case 'topRatedFirst':
          sortedOffers.sort((a, b) => b.rating - a.rating);
          break;
      }
      state.activeListOffers = sortedOffers;
    })
    .addCase(offerHoverAction, (state, action) => {
      state.activeOfferHover = action.payload;
    })
    .addCase(offerLeaveAction, (state) => {
      state.activeOfferHover = undefined;
    });
});
