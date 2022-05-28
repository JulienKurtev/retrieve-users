import React from 'react';
import Logo from './logo';
import StyledHeader from '../styles/header.style';


 const Header = () => {
  return (
    <StyledHeader>
      <Logo src='/logo.svg' alt='Planned Logo' />

      <strong>Planned Test</strong>
    </StyledHeader>
  );
}

export default Header;