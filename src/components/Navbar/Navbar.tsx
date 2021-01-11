import React from 'react';

import { Navbar, Button, Nav } from 'react-bootstrap';

const NaviBar = (): JSX.Element => {
  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>RSCook</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#main">
              Main</Nav.Link>{' '}
            <Nav.Link href="#about">
              About</Nav.Link>{' '}
            <Nav.Link href="#profile">
              My Profile</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="primary" className="mr-2">Log In</Button>
            <Button variant="primary">Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default NaviBar;
