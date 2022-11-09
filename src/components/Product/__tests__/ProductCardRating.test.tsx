import { screen } from '@testing-library/react';
import renderWithProvider from '../../../../testUtils';

import ProductCardRating, { IProductCardRatingProps } from '../ProductCardRating';

describe('ProductCardRating', () => {
  let mockedProps: IProductCardRatingProps;

  const renderView = (props: IProductCardRatingProps = mockedProps) => renderWithProvider(<ProductCardRating {...props} />);

  beforeEach(() => {
    mockedProps = {
      totalStars: 5,
      rating: 4
    }
  })

  it('should render the component properly', () => {
    renderView();
    expect(screen.getByTestId('product-rating')).toBeInTheDocument();
  })
 
  it('should render the correct number of stars based on `totalStars` given in a range from 0 to 5', () => {
    [0, 1, 2, 3, 4, 5].forEach((stars) => {
      mockedProps.totalStars = stars;
      const { container } = renderView();
      
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelectorAll('svg').length).toBe(stars! * 2);
    })
  })
});
