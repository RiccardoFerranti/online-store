import { screen } from '@testing-library/react';

import CountProducts, { ICountProductsProps } from '../CountProducts';

import renderWithProvider from '../../../../testUtils';

describe('CountProducts', () => {
  let mockedProps: ICountProductsProps;

  const renderView = (props: ICountProductsProps = mockedProps) => renderWithProvider(<CountProducts {...props} />);

  beforeEach(() =>  {
    mockedProps = {
      totalCount: 10,
    };
  })

  it('should render the `totalCount` properly when the number od reults is 10', () => {
    renderView();
    expect(screen.getByText(`${mockedProps.totalCount}`).textContent).toBe(mockedProps.totalCount?.toString());
  });
  
  it('should render the `totalCount` properly when the number od reults is undefined', () => {
    mockedProps.totalCount = 0;
    renderView();
    
    expect(screen.getByText(`${mockedProps.totalCount}`).textContent).toBe(mockedProps.totalCount?.toString());
  });
});
