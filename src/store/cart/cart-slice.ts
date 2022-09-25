import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from '../../types/mock-types';

type cartProduct = Product & { cartQuantity: number };

type cartState = {
  cartItems: cartProduct[];
}

type methodType = 'add' | 'remove'

const initialState: cartState = {
  cartItems: [],
};

const cartFlow = (state: cartState, action: PayloadAction<Product>, method: methodType) => {
  const itemIndex = state.cartItems.findIndex(
    (item) => item.id === action.payload.id,
  );
  if(itemIndex >= 0) {
    state.cartItems[itemIndex] = {
      ...state.cartItems[itemIndex],
      cartQuantity: method === 'add' ? state.cartItems[itemIndex].cartQuantity + 1 : state.cartItems[itemIndex].cartQuantity - 1,
    };
  } else {
    const tempProduct = {...action.payload, cartQuantity: 1};
    method === 'add' ? state.cartItems.push(tempProduct) : state.cartItems.filter((product) => product.id !== tempProduct.id);
  }
};

const cartSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action) {
      cartFlow(state, action, 'add');
    },
    reduceProduct(state, action) {
      cartFlow(state, action, 'remove');
    },
    deleteProduct(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.cartItems = [...state.cartItems.slice(0, itemIndex), ...state.cartItems.slice(itemIndex + 1)];
    },
    clearBasket(state) {
      state.cartItems = [];
    },
  },
});

export const {addProduct, reduceProduct, deleteProduct, clearBasket} = cartSlice.actions;

export default cartSlice.reducer;
