import { screen, act } from '@testing-library/react';
import { wait } from '@testing-library/user-event/dist/utils';

import Listing from '../Listing';

import renderWithProvider, { routerConfig } from '../../../testUtils';
import { mockedProducts } from '../../../mockeData';

jest.mock<typeof import('../../helpers/cacheImages')>('../../helpers/cacheImages', () => ({
  __esModule: true,
  default: async () => {
    const promises = await Array.from({ length: mockedProducts.length }, (_, idx) => idx + 1).map(() => {
      return new Promise<void>((resolve) => {
          return resolve();
      });
    })
    return await Promise.allSettled(promises);
  },
}));


describe('Listing', () => {
  const renderView = () => renderWithProvider(<Listing />, routerConfig);

  it('should render the Error component properly', async () => {
    const error = { message: 'Cannot fetch the products' };

    global.fetch = jest.fn().mockImplementationOnce(() => 
      Promise.resolve({
        status: 304,
        json: () => Promise.reject(error),
      })
    );

    renderView();

    await act(wait);
    
    expect(screen.getByText(error.message)).toBeInTheDocument();
  });
  

  it('should render the Count components properly with 0 results', () => {
    renderView();
    expect(screen.getByText('Total Products:')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('should render the products properly', async () => {
    global.fetch = jest.fn().mockImplementationOnce(() => 
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve({
          products: mockedProducts,
          total: mockedProducts.length
        }),
      })
    );

    renderView();

    // Show loading component
    expect(screen.getByTestId('spinner-icon')).toBeInTheDocument();

    // Products are not loaded yet
    expect(screen.queryByTestId('listing-card-products')).not.toBeInTheDocument();
    expect(screen.queryByTestId('card-product-iphone-9')).not.toBeInTheDocument();
    expect(screen.queryByTestId('card-product-iphone-x')).not.toBeInTheDocument();
    
    await act(wait);
    
    // Hide loading component
    expect(screen.queryByTestId('spinner-icon')).not.toBeInTheDocument();
    
    // Products are loaded
    expect(screen.getByTestId('listing-card-products')).toBeInTheDocument();
    
    mockedProducts.forEach((product, index) => {   
      const productEl = screen.getByTestId(`card-product-${product.title.toLowerCase().replaceAll(' ', '-')}`);
      expect(productEl).toBeInTheDocument();
      expect(productEl).toHaveTextContent(`#${mockedProducts[index].id} - ${mockedProducts[index].title}`);
      expect(productEl).toHaveTextContent(`${mockedProducts[index].description}`);
      expect(productEl).toHaveTextContent(`$${mockedProducts[index].price}`);
      expect(productEl).toHaveTextContent(`$${Math.ceil(mockedProducts[index].price / mockedProducts[index].discountPercentage) + mockedProducts[index].price}`);
      expect(productEl).toHaveTextContent(/add to cart/i);
    })

    // Update number loaded results
    expect(screen.getByText('Total Products:')).toBeInTheDocument();
    expect(screen.getByText(mockedProducts.length)).toBeInTheDocument();
  });
});
