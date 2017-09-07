import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class TopNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar toggleable>
        <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/" style={{ display: 'none' }}>Glenn Domin</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/"><span data-hover="Home">Home</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about/"><span data-hover="About">About</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/proficiencies/"><span data-hover="Proficiencies">Proficiencies</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact/"><span data-hover="Contact">Contact</span></NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    );
  }
}

export default TopNavbar;
