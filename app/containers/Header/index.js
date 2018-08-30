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
          <NavbarBrand href="/">ΚΟΥΜΑΝΤΟ ΜΟΝΟ ΕΜΕΙΣ ΕΔΩ</NavbarBrand>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/home">ΕΜΠΟΡΙΟ ΟΡΓΑΝΩΝ</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">ΕΜΠΟΡΙΟ ΟΠΛΩΝ</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">ΕΜΠΟΡΙΟ ΑΝΗΛΙΚΩΝ</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/logout">ΤΡΕΧΑ</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
