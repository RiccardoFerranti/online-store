import { productsSelector } from '../products.selector';

import { TRootState } from '../../products.reducer';

import { generateMockedState } from '../../../../testUtils';

describe('Products Selectors', () => {  
  const state: TRootState = { products: generateMockedState() };

  it('should return the correct state', () => {
    expect(productsSelector(state)).toMatchObject(state.products);
  });
});
