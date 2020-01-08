import React from 'react';
import { Dropdown } from 'react-bootstrap';
// import * as actions from '../actions/index';
import UserService from '../actions/UserService';

const NavBar = (props) => {
  const renderForLoggedIn = () => {
    const storage = JSON.parse(localStorage.getItem('user'));   
    return (
      <div className="navbar-collapse-air d-none d-lg-flex">
        <div className="navbar-form-air">
          <div className="hydrated">
            <div className="hydrated">
              <form
                method="GET"
                action="/search/profile "
                role="search"
                className="ng-pristine ng-valid"
              >
                <div className="input-group input-group-search-dropdown input-group-navbar">
                  <div className="input-group-btn">
                    <button className="btn p-0-left-right" type="submit" tabIndex="0">
                      <span className="glyphicon m-sm-left m-0-right" aria-hidden="true"><i className="fas fa-search" /></span>
                    </button>
                  </div>
                  <input
                    className="form-control"
                    type="search"
                    name="q"
                    tabIndex="0"
                    placeholder="Tìm kiếm người dạy phù hợp"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="navbar-text navbar-right">
          <div className="m-0-bottom">
            <Dropdown>
              <Dropdown.Toggle variant="infor" id="dropdown-basic">
                <span>
                  {storage.user? `Logged as ${storage.user.username}` : 'Hi, there!'}
                </span>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{height: '110px',width: '100px'}}>
                <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                <Dropdown.Item href="/message">Tin nhắn</Dropdown.Item>
                <Dropdown.Item href="/contract">Hợp đồng </Dropdown.Item>
                <Dropdown.Item onClick={UserService.logOut} className="navbar-link">Đăng xuất</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    );
  };

  const renderBeforeLogIn = () => (
    <div className="navbar-collapse-air d-none d-lg-flex">
      <div className="navbar-form-air">
        <div className="hydrated">
          <div className="hydrated">
            <form
              method="GET"
              action="/search/profiles"
              role="search"
              className="ng-pristine ng-valid"
            >
              <div className="input-group input-group-search-dropdown input-group-navbar">
                <div className="input-group-btn">
                  <button className="btn p-0-left-right" type="submit" tabIndex="0">
                    <span className="glyphicon m-sm-left m-0-right" aria-hidden="true"><i className="fas fa-search" /></span>
                  </button>
                </div>
                <input
                  className="form-control"
                  type="search"
                  name="name"
                  tabIndex="0"
                  placeholder="Tìm người dạy phù hợp"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <ul className="navbar-nav navbar-lg navbar-subnav navbar-right">
        <li role="none"><a href="/login"> Log In</a></li>
        <li role="none"><a href="/register"> Sign up</a></li>
      </ul>
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

const mapStateToProps = (state) => {

}

export default NavBar;
