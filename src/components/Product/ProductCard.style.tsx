import { AiOutlineShoppingCart } from 'react-icons/ai';
import styled from 'styled-components';

export const StyledProductImage = styled.img`
	height: 150px;
`

export const StyledProductImageContainer = styled.div`
	overflow: hidden;
	text-align: center;
	border-bottom: 1px solid #ededed;
`

export const StyledProductCard = styled.li`
	display: flex;
  flex-direction: column;
  flex: 1;
	height: 100%;
	padding: 10px;

	&:hover {
		box-shadow: 1px 1px 3px black;
    transition: all 0.2s ease-in;
	}
`
export const StyledCardContainer = styled.div`
	display: flex;
`

export const StyledProductTitle = styled.h2`
	font-size: 16px;
	width: 100%;
	color: ${({ theme }) => theme.colors.text};
	padding: 5px 0;
	display: flex;
  align-items: center;
	min-height: 50px;
`;

export const StyledCardText = styled.p`
	padding: 5px 0;
	line-height: 22px;
	font-size: 14px;
	color: ${({ theme }) => theme.colors.text};
`

export const StyledCardDescription = styled(StyledCardText)`
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	max-height: 150px;
`

export const StyledCardTextPrice = styled(StyledCardText)`
	font-size: 22px;
	font-weight: 400;
	margin-bottom: 10px;

	& > span:last-child {
		font-size: 16px;
		text-decoration: line-through;
	}
`

export const StyledCardSeparator = styled.span`
	padding: 5px 0;
	line-height: 22px;
	font-size: 16px;
`

export const StyledCardButton = styled.button`
	background: ${({ theme }) => theme.colors.cardButton};
	position: relative;
	font-size: 13px;
	width: 150px;
	height: 40px;
  padding: 5px;
  text-transform: uppercase;
	margin: auto auto 15px auto;
	border-radius: 4px;
	border: 1px solid #DADADA;
  z-index: 1;
  cursor: pointer;
  transition:         0.08s ease-in;
  -o-transition:      0.08s ease-in;
  -ms-transition:     0.08s ease-in;
  -moz-transition:    0.08s ease-in;
  -webkit-transition: 0.08s ease-in;

	& > span {
		margin-left: -15px;
		margin-right: 10px;
	}

	&:hover {
		color: whitesmoke;
	}

	&:before {
		content: "";
		position: absolute;
		background: #383736;
		top: 100%;
		right: 0;
		bottom: 0;
		left: 0;
		border-radius: 4px;
		z-index: -1;
		-webkit-transition: top 0.09s ease-in;
	}

	&:hover:before {
		top: 0;
	}
`

export const StyledCartIcon = styled(AiOutlineShoppingCart)`
	font-size: 16px;
	position: absolute;
`