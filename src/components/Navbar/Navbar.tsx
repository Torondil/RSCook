import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from "react-router-dom";
import './Navbar.scss';

const NaviBar = (): JSX.Element => {
  return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand>RSCook</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Main page</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About App</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/profile">Let's search</Link>
            </Nav.Link>

          </Nav>
          <Nav>
          <Nav.Link>
              <Link to="/profile">Your kitchen
                <img src='' alt="hat"/>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default NaviBar;
