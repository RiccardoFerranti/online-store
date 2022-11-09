import { screen } from '@testing-library/react';

import ErrorMessage, { IErrorMessageProps } from '../ErrorMessage';

import renderWithProvider from '../../../../testUtils';

describe('ErrorMessage', () => {
  const mockedProps: IErrorMessageProps = {
    error: 'test error',
  };

  const renderView = (props: IErrorMessageProps = mockedProps) => renderWithProvider(<ErrorMessage {...props} />);

  it('should render the `error` message properly', () => {
    renderView();
    expect(screen.getByText(`${mockedProps.error}`)).toBeInTheDocument();
  });
});
