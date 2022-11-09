import styled from "styled-components";

export const StyledPagesContainer = styled.ul`
  font-size: 14px;
  padding: 30px 0;
  width: 320px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: space-evenly;

  &.dots:hover {
    background-color: transparent;
    cursor: default;
  }
`;

interface IStyledPageNumber {
  selected?: boolean,  
}

export const StyledPageNumber = styled.li<IStyledPageNumber>`
  background: ${({ selected, theme }) => selected ? theme.colors.text : 'none'};
  color: ${({ selected, theme }) => selected ? 'white' : theme.colors.text};
  width: 25px;
  height: 25px;
  border-radius: 12.5px;
  text-align: center;
  padding: 4px 0 0 0;
  cursor: pointer;

  &:hover {
    background-color: #757575;
    color: white;
    cursor: pointer;
  }

  & > li:first-child,
  & > li:last-child {
    width: auto;
  }
`;

export const StyledPageText =  styled.li`
  color: ${({ theme }) => theme.colors.text};
  width: 25px;
  height: 25px;
  border-radius: 12.5px;
  text-align: center;
  padding: 4px 0 0 0;
  text-decoration: underline;
  cursor: pointer;
`

export const StyledPageDots = styled.li<IStyledPageNumber>`
  color: ${({ theme }) => theme.colors.text};
  width: 25px;
  height: 25px;
  text-align: center;
  padding: 4px 0 0 0;
`;
