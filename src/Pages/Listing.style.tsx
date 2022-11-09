import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { size } from '../consts/breakpoints';

export const StyledLogo = styled.img`
	margin: 0 auto;
	width: 400px;
	display: block;
`;

export const StyledContainer = styled.section`
	margin: 0 auto;

	@media screen and (min-width: ${size.desktopL}) {
		width: 1280px;
	}

	@media screen and (min-width: ${size.desktopS}) and (max-width: ${size.desktopL}) {
		width: 980px;
	}

	@media screen and (min-width: ${size.tablet}) and (max-width: ${size.desktopS}) {
		width: 768px;
	}
`;

export const StyledCardProductContainer = styled.ul`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;

	@media screen and (min-width: ${size.tablet}) and (max-width: ${size.desktopL}) {
		grid-template-columns: repeat(3, 1fr);
	}
	
	@media screen and (min-width: ${size.mobile}) and (max-width: ${size.tablet}) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (max-width: ${size.mobile}) {
		grid-template-columns: repeat(1, 1fr);
	}
`

export const StyledProductLink = styled(Link)`
	text-decoration: none;
	border-radius: 8px;
	background: ${({ theme }) => theme.colors.cardBackground};
	color: ${({ theme }) => theme.colors.text};
	min-height: 270px;
  height: auto;
	overflow: hidden;
	border: 1px solid #DADADA;

	&:hover{
		box-shadow: 0px 0px 3px black;
		transition: all 0.2s ease-in;
	}
`;

export const StyledResults = styled.div`
	text-align: center;
	position: relative;
`

export const StyledRowImage = styled.img`
	width: 150px;
	border-radius: 150px;
	margin-left: auto;
	border: 5px solid black;
`

export const StyledSpinnerContainer =  styled.div`
	display: flex;
	justify-content: center;
	margin-top: 100px;
`