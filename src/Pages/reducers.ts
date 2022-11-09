import { cloneDeep } from "lodash";
import { TDictionary } from "../commonTypes";
import { IProduct } from "../models";

export const SET_ALL_PRODUCTS = 'SET_ALL_PRODUCTS';
export const SET_PRODUCTS_TO_RENDER = 'SET_PRODUCTS_TO_RENDER';

interface IProductsInitialState {
  productsToRender: {
    products: Array<IProduct>,
    totalCount: number
  }
}

export const productsInitialState: IProductsInitialState = {
  productsToRender: {
    products: [],
    totalCount: 0
  }
};

export function productsReducer(state: IProductsInitialState, action: TDictionary): IProductsInitialState {
  switch (action.type) {
    case SET_PRODUCTS_TO_RENDER: {
      let newState = cloneDeep(state);
      return {
        ...newState,
        productsToRender: {
          ...newState.productsToRender,
          products: action.payload.products,
          totalCount: action.payload?.totalCount
        }
      }
    }

    default:
      return state;
  }
}
