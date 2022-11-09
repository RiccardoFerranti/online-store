import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IResourceBase } from '../../models';

interface IProductCart extends IResourceBase {
  price: number,
  count: number
}

interface ICart {
  price: number,
  amount: number,
  products: Array<IProductCart>
}

export interface IProductsState {
  search: string,
  cart: ICart,
  pagination: {
    currentPage: number
  }
}

export const initialState: IProductsState = {
  search: '',
  cart: {
    price: 0,
    amount: 0,
    products: []
  },
  pagination: {
    currentPage: 1,
  }
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchQuery: (state, { payload }: PayloadAction<string>) => {
      state.search = payload;
    },
    addCartItem: (state, { payload }: PayloadAction<{ price: number, product: IResourceBase }>) => {
      let count = 1;
      state.cart.price = state.cart.price + payload.price;
      state.cart.amount += 1;
      if (state.cart.products.some((product) => product.id === payload.product.id)) {
        const objWithIdIndex = state.cart.products.findIndex((product) => product.id === payload.product.id);
        state.cart.products[objWithIdIndex].count += 1; 
      } else {
        state.cart.products.push({ ...payload.product, price: payload.price, count });
      }
    },
    deleteCartItem: (state, { payload }: PayloadAction<{ id: number, price: number }>) => {
      const removeObjectFromArrayById = (arr: Array<IProductCart>, id: number) => {
        const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
        arr.splice(objWithIdIndex, 1);
        return arr;
      } 
      
      state.cart.amount -= 1;
      state.cart.price = state.cart.price - payload.price;

      if (state.cart.products.some((product) => product.id === payload.id)) {
        const objWithIdIndex = state.cart.products.findIndex((product) => product.id === payload.id);
        if (state.cart.products[objWithIdIndex].count === 1) {
          state.cart.products = removeObjectFromArrayById(state.cart.products, payload.id);
        } else {
          state.cart.products[objWithIdIndex].count -= 1; 
        }
      } else {
        state.cart.products = removeObjectFromArrayById(state.cart.products, payload.id);
      }
    },
    setCurrentPage: (state, { payload }: PayloadAction<{ currentPage: number }>) => {
      state.pagination = {
        currentPage: payload.currentPage,
      }
    }
  },
});

export const { setSearchQuery, addCartItem, deleteCartItem, setCurrentPage } = productsSlice.actions;
export default productsSlice.reducer;
