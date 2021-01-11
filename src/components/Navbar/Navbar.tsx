import React from 'react';
import { Navbar, Button, Nav } from 'react-bootstrap';
import {Link} from "react-router-dom";

const NaviBar = (): JSX.Element => {
  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>RSCook</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Main</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/profile">My profile</Link>
            </Nav.Link>
              {/* <Nav.Link><Link to="/">Main</Link></Nav.Link>
              <Nav.Link><Link to="/">About</Link></Nav.Link>
              <Nav.Link><Link to="/">My profile</Link></Nav.Link> */}
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
