import { FC } from 'react';

import { StyledButtonWrapper } from './Details.style';

import ProductDetails from '../components/Details/ProductDetails';
import BackButton from '../components/Buttons/BackButton';

const Details: FC = () => (
  <>
    <StyledButtonWrapper>
      <BackButton />
    </StyledButtonWrapper>
    <ProductDetails />
  </>
)

export default Details;
