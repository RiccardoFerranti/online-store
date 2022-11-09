import styled from "styled-components";

import { StyledAmount } from "./CartCommon.Style";

export const StyledCart = styled.div`
	background: white;
	border-radius: 6px;
	width: 90px;
	height: 40px;
	position: relative;
	cursor: pointer;
`

export const StyledCartContainer = styled.div`
	svg {
		font-size: 24px;
		color: ${({ theme }) => theme.colors.text};
		position: absolute;
		top: 8px;
		left: 5px;
	}

	p {
		font-size: 14px;
		position: absolute;
		color: ${({ theme }) => theme.colors.text};
		top: 12px;
		left: 35px;
	}
`

export const StyledAmountCart = styled(StyledAmount)`
	position: absolute;
	top: -10px;
  left: -15px;
`
