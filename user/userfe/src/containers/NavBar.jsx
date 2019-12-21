import React from 'react';

const NavBar = () => {
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
        <div className="navbar-text navbar-right">
          <p className="m-0-bottom">
            <span>
              {storage ? `Logged as ${storage.user.fullname}` : 'Hi, there!'}
            </span>
            <br />
            <a href="" className="navbar-link">Log out</a>
          </p>
        </div>
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

export default NavBar;
