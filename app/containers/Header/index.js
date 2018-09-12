import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default class Header extends React.PureComponent {

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">ΚΕΝΤΡΙΚΗ</NavbarBrand>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/home">HOME</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">LINK 1</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">LINK 2</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/logout">LOGOUT</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
