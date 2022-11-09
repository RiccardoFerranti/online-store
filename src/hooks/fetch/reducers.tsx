import { TDictionary } from "../../commonTypes";
import { IProduct } from "../../models";

export const LOADING = 'LOADING';
export const FETCHED = 'FETCHED';
export const FETCH_ERROR = 'FETCH_ERROR';

interface IData {
  limit?: number,
  products?: Array<IProduct>,
  skip?: string,
  total?: number
}

interface IProductsApiInitialState {
  status: string,
  error: string | null,
  data: IData,
}

export const productsApiInitialState: IProductsApiInitialState = {
  status: 'idle',
  error: null,
  data: {},
};

export function productsApiReducer(state: IProductsApiInitialState, action: TDictionary): IProductsApiInitialState {
  switch (action.type) {
    case LOADING: {
      return { 
        ...productsApiInitialState,
        status: 'loading'
      };
    }

    case FETCHED: {
      return { 
        ...productsApiInitialState,
        status: 'fetched',
        data: action.payload
      };
    }

    case FETCH_ERROR: {
      return { 
        ...productsApiInitialState,
        status: 'error',
        error: action.payload
      };
    }

    default:
      return state;
  }
}
