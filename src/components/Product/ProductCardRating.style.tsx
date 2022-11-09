import { AiFillStar } from 'react-icons/ai';
import styled from 'styled-components';

export const StyledProductRating = styled.div`
	display: inline-flex;
  position: relative;
  cursor: pointer;
  text-align: left;
  margin-left: auto;
`

interface IStarIconContainer {
  starWidth: string,
}

export const StarIconContainer = styled.div<IStarIconContainer>`
  width: ${({ starWidth }) => starWidth};
  overflow: hidden;
  position: absolute;
`

export const StarIconEmptyFilledContainer = styled.div`
  color: #fcc335;
`

export const StarIconFilled = styled(AiFillStar)`
  color: #fcc335;
`