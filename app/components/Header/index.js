import React from 'react';

import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Img src={Banner} alt="react-boilerplate - Logo" />
        <NavBar>
          <HeaderLink to="/">
          </HeaderLink>
          <HeaderLink to="/features">
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
