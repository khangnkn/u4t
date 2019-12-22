import React from 'react';
import {
  Dropdown,
  Button,
  ButtonGroup,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserService from '../actions/UserService';

const NavBar = (props) => {
  const nav = (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
  return nav;
  const renderForLoggedIn = () => {
    const storage = JSON.parse(localStorage.getItem('user'));
    return (
      <div className="navbar-collapse d-none d-lg-flex">
        <div className="navbar-form">
          <div className="hydrated">
            <div className="hydrated">
              <form
                method="GET"
                action="/search/profiles/"
                role="search"
                className="ng-pristine ng-valid"
              >
                <div className="input-group input-group-search-dropdown input-group-navbar">
                  <div className="input-group-btn">
                    <button className="btn p-0-left-right" type="submit" tabIndex="0">
                      <span className="glyphicon m-sm-left m-0-right" aria-hidden="true"><i className="fas fa-search" /></span>
                    </button>
                  </div>
                  <input type="hidden" name="nbs" value="1" />
                  <input
                    className="form-control"
                    type="search"
                    name="q"
                    tabIndex="0"
                    placeholder="Find Freelancers &amp; Agencies"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <div className="navbar-text navbar-right"> */}
        <Dropdown as={ButtonGroup}>
          <Button>{storage && storage.user.fullname ? `Xin chào, ${storage.user.fullname}` : 'Xin chào!'}</Button>
          <Dropdown.Toggle variant="success" id="dropdown-user">
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/">Profile</Dropdown.Item>
            <Dropdown.Item onClick={UserService.logOut}>Sign Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* </div> */}
      </div>
    );
  };

  const renderBeforeLogIn = () => (
    <div className="navbar-collapse d-none d-lg-flex">
      <div className="navbar-form">
        <div className="hydrated">
          <div className="hydrated">
            <form
              method="GET"
              action="/search/profiles/"
              role="search"
              className="ng-pristine ng-valid"
            >
              <div className="input-group input-group-search-dropdown input-group-navbar">
                <div className="input-group-btn">
                  <button className="btn p-0-left-right" type="submit" tabIndex="0">
                    <span className="glyphicon m-sm-left m-0-right" aria-hidden="true"><i className="fas fa-search" /></span>
                  </button>
                </div>
                <input type="hidden" name="nbs" value="1" />
                <input
                  className="form-control"
                  type="search"
                  name="q"
                  tabIndex="0"
                  placeholder="Find Freelancers &amp; Agencies"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <ul className="navbar-nav navbar-lg navbar-subnav navbar-right"> */}
      <Link to="/login">
        <Button>Log In</Button>
      </Link>
      <Link to="/register">
        <Button>Sign up</Button>
      </Link>
      {/* </ul> */}
    </div>
  );

  const userCookie = localStorage.getItem('user');
  return (
    <nav className="navbar navbar-fixed-top" aria-label="Navigation bar">
      <div className="container-visitor">
        <div className="navbar-header" style={{ marginRight: '10px' }}>
          <a className="nv-brand" href="/"> U4T </a>
        </div>
        {userCookie ? renderForLoggedIn() : renderBeforeLogIn()}
      </div>
    </nav>
  );
};

export default NavBar;
