import styled from 'styled-components';

import { size } from '../consts/breakpoints';

export const StyledNotFoundContainer = styled.div`
  text-align: center;
`

export const StyledNotFoundNumber = styled.p`
  font-weight: 600;
  font-size: 200px;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (max-width: ${size.tablet}) {
    font-size: 80px;
	}
`

export const StyledNotFoundText = styled.p`
  font-weight: 400;
  font-size: 70px; 
  color: ${({ theme }) => theme.colors.text};

  @media screen and (max-width: ${size.tablet}) {
    font-size: 35px;
  }
`

export const StyledButtonWrapper = styled.div`
  display: flex;
  width: 100%;
`;
