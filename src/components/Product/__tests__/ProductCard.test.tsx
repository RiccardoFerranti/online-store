import { screen } from '@testing-library/react';
import renderWithProvider from '../../../../testUtils';

import ProductCard, { IProductCardProps } from '../ProductCard';
import { mockedProducts } from '../../../../mockeData';

describe('ProductCard', () => {
  let mockedProps: IProductCardProps;
  const mockedProduct = mockedProducts[0];

  const renderView = (props: IProductCardProps = mockedProps) => renderWithProvider(<ProductCard {...props} />);

  beforeEach(() => {
    mockedProps = {
      product: mockedProduct
    }
  })

  it('should render the component properly', () => {
    renderView();

    const productEl = screen.getByTestId(`card-product-${mockedProduct.title.toLowerCase().replaceAll(' ', '-')}`);
    expect(productEl).toBeInTheDocument();
  })
  
  it('should render the `title` properly', () => {
    renderView();

    const titleEl = screen.getByRole('heading');
    expect(titleEl).toBeInTheDocument();
    expect(titleEl).toHaveTextContent(`#${mockedProduct.id} - ${mockedProduct.title}`);
  });
  
  it('should render the `description` properly', () => {
    renderView();
    expect(screen.getByText(mockedProduct.description)).toBeInTheDocument();
  });
  
  it('should render the `price` properly', () => {
    renderView();

    expect(screen.getByText(`$${mockedProduct.price}`)).toBeInTheDocument();
    expect(screen.getByText(`$${Math.ceil(mockedProduct.price / mockedProduct.discountPercentage) + mockedProduct.price}`)).toBeInTheDocument();
  });

  it('should render the `cart button` properly', () => {
    renderView();

    expect(screen.getByText(/add to cart/i)).toBeInTheDocument();
  });
});
