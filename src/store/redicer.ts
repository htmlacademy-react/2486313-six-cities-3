import { createReducer } from '@reduxjs/toolkit';
import { cityAction } from './action.ts';
import { offers } from '../mocks/offers.ts';

const initialState = {
  city: 'Paris',
  listOffers: offers,
};

export const updateStore = createReducer(initialState, (builder) => {
  builder
    .addCase(cityAction, (state, action) => {
      state.city = action.payload;
    });
  // .addCase(listOffersAction, (state, action) => {
  //   state.listOffers = action.payload;
  // });
});
