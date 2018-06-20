import React from 'react';
import { Link } from 'react-router-dom';

import Img from 'components/Img';
import Banner from './banner.jpg';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Img src={Banner} alt="react-boilerplate - Logo" />
        <Link to="/" />
        <Link to="/features" />
      </div>
    );
  }
}

export default Header;
