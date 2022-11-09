import styled from "styled-components";
import { TiDeleteOutline } from 'react-icons/ti'

import { size } from "../../consts/breakpoints";

export const StyledSearchField = styled.div`
  position: relative;
  width: 300px;
  margin: 0 auto;

  @media screen and (max-width: ${size.tablet}) {
    display: block;
	}

  @media screen and (max-width: ${size.mobile}) {
    width: 100%;
    position: absolute;
    bottom: 10px;
  }
`

export const StyledTextInput = styled.input`
  background: ${({ theme }) => theme.colors.cardBackground};
  width: 100%; 
  height: 40px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.text};
  padding: 0 30px 0 10px;
  border: none;

  &:focus,
  &:active {
    outline: none;
    background: white;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus, 
  &:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 50px white inset !important;
    -webkit-text-fill-color: #2D2D31;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }

  @media screen and (max-width: ${size.tablet}) {
    margin: 0;
	}

  @media screen and (max-width: ${size.mobile}) {
    width: 100%;
  }
`;

export const StyledClearSearchIcon = styled(TiDeleteOutline)`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.text};
  position: absolute;
  display: block;
  top: 9px;
  right: 5px;
  cursor: pointer;

  @media screen and (max-width: ${size.tablet}) {
    right: 5px;
	}
`
