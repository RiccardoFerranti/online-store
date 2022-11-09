import { FC } from 'react';
import { Link } from 'react-router-dom';

import { StyledHeader, StyledLogo, StyledHeaderContainer, StyledNav } from './Header.style';

import Search from '../components/Filters/Search';
import Cart from '../components/Cart/Cart';

const Header: FC = () => (
  <StyledHeader>
    <StyledHeaderContainer>
      <StyledLogo>
        <Link to="/">Online Store</Link>
      </StyledLogo>
      <Search />
      <StyledNav>
        <Cart />
      </StyledNav>
    </StyledHeaderContainer>
  </StyledHeader>
);

export default Header;
