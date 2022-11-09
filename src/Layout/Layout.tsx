import { FC } from 'react';

import { StyledLayout } from './Layout.style';
import Header from './Header';

interface ILayoutProps {
  children: JSX.Element | JSX.Element[],
}

const Layout: FC<ILayoutProps> = ({ children }) => (
  <>
    <Header />
    <StyledLayout>{children}</StyledLayout>
  </>
);

export default Layout;
