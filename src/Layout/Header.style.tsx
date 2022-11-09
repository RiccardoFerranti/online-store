import styled from 'styled-components';

import { size } from '../consts/breakpoints';

export const StyledHeader = styled.header`
	width: 100%;
	background-color: white;
	position: sticky;
	top: 0;
	padding: 15px;
	margin: 0 auto;
	background: ${({ theme }) => theme.colors.header};
  border-bottom: 1px solid #e0e0e0;
	z-index: 2;
`

export const StyledHeaderContainer = styled.div`
	margin: 0 auto;
	padding: 0 15px;
	display: flex;
	align-items: center;
	position: relative;

	@media screen and (min-width: ${size.desktopL}) {
		width: 1280px;
	}

	@media screen and (max-width: ${size.tablet}) {
		padding: 0;
	}
	
	@media screen and (max-width: ${size.mobile}) {
		min-height: 120px;
		display: block;
	}
`

export const StyledLogo = styled.h1`
	width: 230px;
  height: 50px;
	font-weight: 400;
  border: 2px solid #333;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;

	& > a {
 		text-decoration: none;
		color: ${({ theme }) => theme.colors.text};
    text-transform: uppercase;
    font-size: 30px;
 	}

	&::before, &::after {
		position: absolute;
		background: ${({ theme }) => theme.colors.header};
		z-index: -1;
		transition: 1s;
		content: '';
	}

	&::before {
		height: 50px;
		width: 210px;
	}

	&::after {
		width: 230px;
		height: 30px;
	}

	@media screen and (max-width: ${size.mobile}) {
		width: 210px;
		height: 40px;

		& > a {
			font-size: 26px;
		}

		&::before {
			height: 40px;
			width: 190px;
		}

		&::after {
			width: 210px;
			height: 20px;
		}
	}
`

export const StyledNav = styled.nav`
	@media screen and (max-width: ${size.mobile}) {
		position: absolute;
		top: 0;
		right: 0;
	}
`

