import { configureStore } from '@reduxjs/toolkit'
import { ProductSlice } from './Slices/ProductSlice';
import {setupListeners} from '@reduxjs/toolkit/query';

const store = configureStore({
  reducer: {
    product: ProductSlice.reducer,
  },
})

setupListeners(store.dispatch);

export default store;