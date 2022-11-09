import { generateMockedState } from '../../../../testUtils';
import 
  productsSliceReducer,
  { 
    IProductsState, 
    setSearchQuery,
    setCurrentPage,
    initialState,
    addCartItem,
    deleteCartItem
  } from '../products.slice';

describe('Products state', () => {  
  it('should handle `initial state`', () => {
    const action = { type: 'unknown' }
    const expectedState = initialState;

    expect(productsSliceReducer(initialState, action)).toEqual(expectedState)
  });

  it('should handle `setSearchQuery`', () => {
    const state: IProductsState = generateMockedState();
    const action = setSearchQuery('iPhone');
    const expectedState: IProductsState = { ...state, search: 'iPhone' }

    expect(productsSliceReducer(state, action)).toEqual(expectedState)
  });
 
  it('should handle `addCartItem` when there is already one product in the cart', () => {
    const state: IProductsState = generateMockedState();

    const action = addCartItem({ 
      price: 400,
      product: { id: 1, title: 'iPhone' }
    });

    const expectedState: IProductsState = { 
      ...state,
      cart: {
        ...state.cart,
        price: 400,
        amount: 1,
        products: [{
          id: 1,
          title: '',
          price: 0,
          count: 1
        }]
      }
    }

    expect(productsSliceReducer(state, action)).toEqual(expectedState)
  });

  it('should handle `addCartItem` when there are no products in the cart', () => {
    const state: IProductsState = generateMockedState();
    state.cart.products = [];

    const action = addCartItem({ 
      price: 400,
      product: { id: 1, title: 'iPhone' }
    });

    const expectedState: IProductsState = { 
      ...state,
      cart: {
        ...state.cart,
        price: 400,
        amount: 1,
        products: [{
          id: 1,
          title: 'iPhone',
          price: 400,
          count: 1
        }]
      }
    }

    expect(productsSliceReducer(state, action)).toEqual(expectedState)
  });

  it('should handle `deleteCartItem` when there is already just one product in the cart', () => {
    const state: IProductsState = generateMockedState();
    state.cart.amount = 1;
    state.cart.price = 400;
    state.cart.products = [{ id: 1, price: 400, count: 1, title: 'iPhone'}];

    const action = deleteCartItem({ id: 1, price: 400 });

    const expectedState: IProductsState = { 
      ...state,
      cart: {
        ...state.cart,
        price: 0,
        amount: 0,
        products: []
      }
    }

    expect(productsSliceReducer(state, action)).toEqual(expectedState)
  });

  it('should handle `deleteCartItem` when there are products of the same type in the cart', () => {
    const state: IProductsState = generateMockedState();
    state.cart.amount = 2;
    state.cart.price = 800;
    state.cart.products = [{ id: 1, price: 400, count: 2, title: 'iPhone'}];

    const action = deleteCartItem({ id: 1, price: 400 });

    const expectedState: IProductsState = { 
      ...state,
      cart: {
        ...state.cart,
        price: 400,
        amount: 1,
        products: [{ id: 1, price: 400, count: 1, title: 'iPhone' }]
      }
    }

    expect(productsSliceReducer(state, action)).toEqual(expectedState)
  });

  it('should handle setCurrentPage', () => {
    const state: IProductsState = generateMockedState();
    const action = setCurrentPage({ currentPage: 2 });
    const expectedState: IProductsState = { 
      ...state,
      pagination: { currentPage: 2 }
    }

    expect(productsSliceReducer(state, action)).toEqual(expectedState)
  });
});
