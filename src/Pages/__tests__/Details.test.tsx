import { screen } from '@testing-library/react';

import Details from '../Details';

import renderWithProvider, { routerConfig } from '../../../testUtils';

describe('Details', () => {
  const renderView = () => renderWithProvider(<Details />, routerConfig);

  it('should render the `navigation` component with the `back` button properly', () => {
    renderView();

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText(/back/i)).toBeInTheDocument();
  });

  it('should render `Product Details` component properly', () => {
    renderView();

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText('Product Details')).toBeInTheDocument();
  }); 
});
