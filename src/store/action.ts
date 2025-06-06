import { createAction } from '@reduxjs/toolkit';
import { Action } from '../const/const.ts';
import { OfferProps, OfferType, SortType } from '../types/types.ts';

export const cityAction = createAction<string>(Action.CITY);
export const sortAction = createAction<SortType>(Action.SORT_OFFERS);
export const offerHoverAction = createAction<OfferType>(Action.OFFER_HOVER);
export const offerLeaveAction = createAction<undefined>(Action.OFFER_LEAVE);

export const listOffersAction = createAction<OfferProps>(Action.LIST_OFFERS);
