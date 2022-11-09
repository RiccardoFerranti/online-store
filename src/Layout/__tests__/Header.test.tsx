import { screen } from '@testing-library/react';

import Header from '../Header';
import renderWithProvider, { routerConfig } from '../../../testUtils';

describe('Header', () => {
  const renderView = () => renderWithProvider(<Header />,  routerConfig);

  it('should render the header properly', () => {
    renderView();

    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('should render the children properly', () => {
    renderView();

    const titleEl = screen.getByRole('heading');
    expect(titleEl).toBeInTheDocument();
    expect(titleEl).toHaveTextContent(/simply store/i);
  });

  it('should render the `Search` component properly', () => {
    renderView();
    expect(screen.getByLabelText("listing-search-input-text")).toBeInTheDocument()
  });

  it('should render the `Navigation` component with the cart inside properly', () => {
    renderView();

    const navEl = screen.getByRole('navigation');
    expect(navEl).toBeInTheDocument();
    expect(navEl).toHaveTextContent('0');
    expect(navEl).toHaveTextContent('$ 0');

  });
});
