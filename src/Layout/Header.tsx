import { FC } from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Filters/Search';

import { StyledHeader, StyledLogo, StyledHeaderContainer, StyledNav } from './Header.style';
import Cart from '../components/Cart/Cart';

const Header: FC = () => (
  <StyledHeader>
    <StyledHeaderContainer>
      <StyledLogo>
        <Link to="/">Simply Store</Link>
      </StyledLogo>
      <Search />
      <StyledNav>
        <Cart />
      </StyledNav>
    </StyledHeaderContainer>
  </StyledHeader>
);

export default Header;
