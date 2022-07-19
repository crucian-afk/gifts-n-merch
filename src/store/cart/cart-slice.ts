import {createSlice} from '@reduxjs/toolkit';
import {Product} from '../../types/mock-types';

type cartProduct = Product & { cartQuantity: number };

type cartState = {
  cartItems: cartProduct[];
}

const initialState: cartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      if(itemIndex >= 0) {
        state.cartItems[itemIndex] = {
          ...state.cartItems[itemIndex],
          cartQuantity: state.cartItems[itemIndex].cartQuantity + 1,
        };
      } else {
        const tempProduct = {...action.payload, cartQuantity: 1};
        state.cartItems.push(tempProduct);
      }
    },
    removeProduct(state, action) {
      // state.cartItems.filter((item) => item.id !== action.payload.id)
    },
  },
});

export const {addProduct, removeProduct} = cartSlice.actions;

export default cartSlice.reducer;
