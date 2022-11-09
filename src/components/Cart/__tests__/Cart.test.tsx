import { fireEvent, screen } from '@testing-library/react';

import Cart from '../Cart';

import { IProductsState } from '../../../redux/products/products.slice';

import renderWithProvider, { generateMockedState, routerConfig } from '../../../../testUtils';

describe('Cart', () => {
  let mockedStore: IProductsState;

  const renderView = (store: IProductsState = mockedStore) => renderWithProvider(
    <Cart />,
    routerConfig,
    {
      preloadedState: {
        products: store,
      },
    }
  );

  beforeEach(() => {
    mockedStore = generateMockedState('', { price: 0,  amount: 0, products: [] })
  });

  it('should render the component properly', () => {
    renderView();
    expect(screen.getByTestId('products-cart')).toBeInTheDocument();
  });
  
  it('should render the number of products and the total price properly', () => {
    renderView();
    expect(screen.getByText(String(mockedStore.cart.amount))).toBeInTheDocument();
    expect(screen.getByText(`$ ${mockedStore.cart.price}`)).toBeInTheDocument();
  });

  it('should open the empty cart menu properly', () => {
    renderView();

    const productsCartEl = screen.getByTestId('products-cart');
    fireEvent.click(productsCartEl);
    expect(screen.getByText('-- empty --')).toBeInTheDocument();
  });
  
  it('should show the correct amount of products in the cart', () => {
    mockedStore.cart = {
      ...mockedStore.cart,
      price: 3600,
      amount: 4,
    } 
    renderView();

    expect(screen.getByTestId('products-cart-amount').textContent).toBe(String(mockedStore.cart.amount));
  });
  
  it('should open properly the cart menu with the right products inside', () => {
    mockedStore.cart = { 
      ...mockedStore.cart,
      products: [
        { id: 1, price: 800, title: 'test product', count: 4 }
      ]
    } 
    renderView();

    fireEvent.click(screen.getByTestId('products-cart'));

    expect(screen.getByTestId('products-cart-summary')).toHaveTextContent(`${mockedStore.cart.products[0].count}${mockedStore.cart.products[0].title}`);
    expect(screen.getByTestId('products-cart-summary-bin-icon')).toBeInTheDocument()
  });
});
