import styled from "styled-components";

export const StyledCardDetail = styled.section`
	position: relative;
	background: ${({ theme }) => theme.colors.cardBackground};
	color: ${({ theme }) => theme.colors.text};
  border-radius: 8px;
	margin-top: 10px;
	margin-bottom: 10px;
	min-height: 400px;
	text-align: center;
	display: flex;
	flex-direction: column;
  justify-content: center;
`
