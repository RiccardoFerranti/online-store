import styled from "styled-components";
import { ImBin2 } from 'react-icons/im';

import { StyledAmount } from "./CartCommon.Style";

export const StyledCartSummary = styled.div`
	background: white;
	border-radius: 6px;
	width: 300px;
	min-height: 40px;
	height: auto;
	position: absolute;
	top: 45px;
  right: 0px;
	padding: 10px;
	cursor: pointer;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  cursor: default;
`

export const StyledAmountSummary = styled(StyledAmount)`
  margin: 0 5px 0 0;

  &~span {
    padding: 5px 0 0 0;
  }
`

export const StyledCartSummaryProduct = styled.div`
	display: flex;
	padding: 5px;
  cursor: pointer;

	svg {
		margin-left: auto;
	}
`

export const StyledEmptySummary = styled.p`
  text-align: center;
`

export const StyledBinIcon = styled(ImBin2)`
	font-size: 16px;
  margin: 5px 0 0 0;
`

export const StyledCartSummaryButton = styled.button`
	background: ${({ theme }) => theme.colors.cartButton};
	color: ${({ theme }) => theme.colors.header};
	position: relative;
	display: block;
	font-size: 13px;
	width: calc(100% - 10px);
	height: 35px;
  text-transform: uppercase;
	margin: 10px auto 0;
	border-radius: 4px;
	border: 1px solid #DADADA;
  cursor: pointer;
	text-align: center;
  z-index: 1;

	&:hover {
		background: ${({ theme }) => theme.colors.cartButtonHover};
	}
`