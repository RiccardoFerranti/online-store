import styled from 'styled-components';

import { size } from '../consts/breakpoints';

export const StyledLayout = styled.main`
	margin: 0 auto;
	padding: 15px;

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

export const StyledCardContainer = styled.ul`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`
