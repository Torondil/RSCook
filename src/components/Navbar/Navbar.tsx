import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from "react-router-dom";
import './Navbar.scss';
import Icon from '@/assets/svg/004-hat.svg';

const NaviBar = (): JSX.Element => {
  return (
    <div className="bg-light">
      <Navbar collapseOnSelect expand="lg" variant="light">
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
              <Link to="/search">Let's search</Link>
            </Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link>
              <Link to="/profile">Your kitchen
                <Icon />
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NaviBar;
