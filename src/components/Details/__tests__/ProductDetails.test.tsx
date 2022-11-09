import { screen } from '@testing-library/react';

import ProductDetails from '../ProductDetails';

import renderWithProvider from '../../../../testUtils';

describe('ProductDetails', () => {
  const renderView = () => renderWithProvider(<ProductDetails />);

  it('should render the Component properly', () => {
    renderView();
    expect(screen.getByText(/product details/i)).toBeInTheDocument();
  });
});
