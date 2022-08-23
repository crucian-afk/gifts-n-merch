import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../hooks';

const cartSelector = (state: RootState) => state.products.cartItems;

export const cartTotalSelector = createSelector([cartSelector], (cart) =>
  cart.reduce(
    (total, current) => (total += current.cartQuantity),
    0,
  ),
);

export const cartTotalPriceSelector = createSelector([cartSelector], (cart) =>
  cart.reduce(
    (total, current) => (total += current.price * current.cartQuantity),
    0,
  ),
);
