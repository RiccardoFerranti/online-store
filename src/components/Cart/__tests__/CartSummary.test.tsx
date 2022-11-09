import { fireEvent, screen } from '@testing-library/react';

import CartSummary, { ICartSummaryProps } from '../CartSummary';

import renderWithProvider, { routerConfig } from '../../../../testUtils';

describe('CartSummary', () => {
  let mockedProps: ICartSummaryProps;
  
  const mockedHandleDeleteProduct = jest.fn()

  const renderView = (props: ICartSummaryProps = mockedProps) => renderWithProvider(
    <CartSummary { ...props }/>,
    routerConfig,
  );

  beforeEach(() => {
    mockedProps = {
      products: [
        { id: 1, price: 800, title: 'test product 1', count: 4 },
        { id: 2, price: 400, title: 'test product 2', count: 2 },
      ],
      handleDeleteProduct: mockedHandleDeleteProduct,
    }
  });

  it('should render the component properly', () => {
    renderView();
    expect(screen.getByTestId('products-cart-summary')).toBeInTheDocument();
  });
  
  it('should render the given products properly and the button', () => {
    renderView();

    mockedProps.products.forEach((product, index) => {
      const productEl = screen.getByTestId(`product-cart-summary-${product.id}`);
      expect(productEl).toHaveTextContent(`${product.count}${product.title}`);
    })

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/checkout/i)).toBeInTheDocument();
  });
  
  it('should call handleDeleteProduct fn properly', () => {
    renderView();

    const binIcons = screen.getAllByTestId('products-cart-summary-bin-icon');
    binIcons.forEach((binIcon) => { fireEvent.click(binIcon) })

    expect(mockedHandleDeleteProduct).toHaveBeenCalledTimes(2);
  });
  
  it('should render empty cart properly when there are no products and no button', () => {
    mockedProps.products = [];
    renderView();

    expect(screen.getByText('-- empty --')).toBeInTheDocument();

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(screen.queryByText(/checkout/i)).not.toBeInTheDocument();
  });
});
