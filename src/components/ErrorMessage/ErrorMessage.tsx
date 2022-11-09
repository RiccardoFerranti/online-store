import { FC } from 'react';

import { StyleErrorContainer } from './ErrorMessage.styled';

export interface IErrorMessageProps {
  error?: string,
}

const ErrorMessage: FC<IErrorMessageProps> = ({ error }) => (
  <StyleErrorContainer>
    <p>{error}</p>
  </StyleErrorContainer>
);

export default ErrorMessage;
