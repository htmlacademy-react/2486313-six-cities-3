import { configureStore } from '@reduxjs/toolkit';
import { updateStore } from './redicer';

export const store = configureStore({
  reducer: updateStore
});
