import { FC, memo } from 'react';

import { StyledCountProducts } from './CountProducts.style';

export interface ICountProductsProps {
  totalCount?: number,
}

const CountProducts: FC<ICountProductsProps> = ({ totalCount }) => (
  <StyledCountProducts>Total Products: <strong>{totalCount}</strong></StyledCountProducts>
);

export default memo(CountProducts);
