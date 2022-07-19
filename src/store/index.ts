import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../store/cart/cart-slice';

export const store = configureStore({
  reducer: {
    products: cartReducer,
  },
});
