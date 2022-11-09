import { IProductsState } from './products.slice';

import { TRootState } from '../products.reducer';

export const productsSelector = (state: TRootState): IProductsState => state.products;
