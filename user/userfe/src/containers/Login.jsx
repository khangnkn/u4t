import React from 'react';
import { connect } from 'react-redux';

import { Button, Form } from 'react-bootstrap';

import * as actions from '../actions/index';

import '../public/stylesheets/auth.scss';

const Login = (props) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    props.handleLoginChange(name, value);
    // this.setState({[name]:value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = props.login;
    if (username && password) {
      props.loginUser(username, password);
    }
  };

  const { alert } = props;
  const { login } = props;
  const loginIcon = <img alt="processing" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />;
  return (
    <div className="auth-main" id="layout">
      <div className="auth-block">
        <h1>Sign In</h1>
        <a href="/register" className="auth-link">New To Us?Sign up!</a>
        {alert.message
                            && <div className={`alert ${alert.type} auth-alert-app`}>{alert.message}</div>}
        <Form className="form-horizontal" onSubmit={handleSubmit}>
          <div className="form-group row">
            <Form.Label htmlFor="inputUser1" className="col-sm-3 control-label float-right">Username</Form.Label>
            <div className="col-sm-9">
              <Form.Control className="form-control" onChange={handleChange} autoFocus id="inputUser1" name="username" type="text" placeholder="Your Username"></Form.Control>
            </div>
          </div>

          <div className="form-group row">
            <Form.Label htmlFor="inputPass1" className="col-sm-3 control-label">Password</Form.Label>
            <div className="col-sm-9">
              <Form.Control className="form-control" onChange={handleChange} id="inputPass1" name="password" type="password" placeholder="Your Password"></Form.Control>
            </div>
          </div>

          <div className="form-group row">
            <div className="offset-md-3 col-sm-9">
              <Button type="submit" className="btn btn-default btn-auth" disabled={login.requestLogin}>
                {login.requestLogin ? loginIcon : 'Sign In'}
              </Button>
              <a href="/" className="forgot-pass">Home</a>
            </div>
          </div>
        </Form>
        <div className="auth-sep">
          <span>
            <span>or Sign In with one Click.</span>
          </span>
        </div>
        <div className="al-share-auth">
          <ul className="al-share clearfix">
            <li>
              <a href="/"><i className="fab fa-facebook-square" title="SignIn with Facebook" /></a>
            </li>
            <li>
              <a href="/"><i className="fab fa-google-plus-g" title="SignIn with Google+" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { login, alert } = state;
  return { alert, login };
};

const mapDispatchToProps = (dispatch, props) => ({
  loginUser: (username, password) => {
    dispatch(actions.login(username, password));
  },
  handleLoginChange: (name, value) => {
    dispatch(actions.handleLoginChange(name, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
