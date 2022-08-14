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
    reduceProduct(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      if(itemIndex >= 0) {
        state.cartItems[itemIndex] = {
          ...state.cartItems[itemIndex],
          cartQuantity: state.cartItems[itemIndex].cartQuantity - 1,
        };
      } else {
        const tempProduct = {...action.payload, cartQuantity: 1};
        state.cartItems.filter((product) => product.id !== tempProduct);
      }
    },
    deleteProduct(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.cartItems = [...state.cartItems.slice(0, itemIndex), ...state.cartItems.slice(itemIndex + 1)];
    },
  },
});

export const {addProduct, reduceProduct, deleteProduct} = cartSlice.actions;

export default cartSlice.reducer;
