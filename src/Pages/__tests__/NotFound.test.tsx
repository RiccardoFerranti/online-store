import { screen } from '@testing-library/react';

import NotFound from '../NotFound';

import renderWithProvider, { routerConfig } from '../../../testUtils';

describe('NotFound', () => {
  const renderView = () => renderWithProvider(<NotFound />, routerConfig);

  it('should render the `404` properly', () => {
    renderView();
    expect(screen.getByText('404')).toBeInTheDocument();
  });
  
  it('should render the `Page Not Found` properly', () => {
    renderView();
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });

  it('should render the button `GO BACK TO HOME` properly', () => {
    renderView();

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/back/i)).toBeInTheDocument();
  });
});
