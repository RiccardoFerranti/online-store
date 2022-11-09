import { combineReducers } from '@reduxjs/toolkit';

import { productsSlice } from './products/products.slice';

export const rootReducer = combineReducers({
  products: productsSlice.reducer,
});

export type TRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
