import { createAction } from '@reduxjs/toolkit';
import { Action } from '../const/const.ts';
import { OfferProps } from '../types/types.ts';

export const cityAction = createAction<string>(Action.CITY);

export const listOffersAction = createAction<OfferProps>(Action.LIST_OFFERS);
