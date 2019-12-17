import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import {Badge} from 'react-bootstrap';
import './../public/stylesheets/auth.scss';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.props.handleRegisterChange(name, value);
        // this.setState({[name]:value});
    }
    handleSubmit(event) {
        event.preventDefault();
        
        const { username, password,role } = this.props.register.user;
        if (username && password) {
            var user = {username,password,role};
            this.props.registerUser(user);
        }
    }
    render() {
        var alert = this.props.alert;
        var register = this.props.register;
        var requestIcon = <img alt="processing" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />;
        var confimPasswordFeedback = (
            <Badge variant="danger">Password don't match.</Badge>);
        return (
            <div className="auth-main">
                <div className="auth-block">
                    <h1>Sign Up</h1>
                    <a href="/login" className="auth-link">You have an account?Sign in!</a>
                    {alert.message &&
                        <div className={`alert ${alert.type} auth-alert-app`}>{alert.message}</div>
                    }
                    <Form className="form-horizontal" onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <Form.Label htmlFor="inputUser1" className="col-sm-3 control-label">Username</Form.Label>
                            <div className="col-sm-9">
                                <Form.Control className="form-control" onChange={this.handleChange} autoFocus id="inputUser1" name='username' type="text" placeholder="Your Username"></Form.Control>
                            </div>
                        </div>

                        <div className="form-group row">
                            <Form.Label htmlFor="inputPass1" className="col-sm-3 control-label">Password</Form.Label>
                            <div className="col-sm-9">
                                <Form.Control className="form-control" onChange={this.handleChange} id="inputPass1" name='password' type="password" placeholder="Your Password"></Form.Control>
                            </div>
                        </div>

                        <div className="form-group row">
                            <Form.Label htmlFor="inputConfirmPass1" className="col-sm-3 control-label">Confirm Password</Form.Label>
                            <div className="col-sm-9">
                                <Form.Control className="form-control" onChange={this.handleChange} id="inputConfirmPass1" name='confirmPassword' type="password" placeholder="Confirm Your Password"></Form.Control>
                            </div>
                        </div>
                        <div className="form-group row">
                            <Form.Label htmlFor="inputRole1" className="col-sm-3 control-label">I want to</Form.Label>
                            <div className="col-sm-9">
                                <Form.Control className="form-control" onChange={this.handleChange} id="inputRole1" name='role' as="select" defaultValue="0">
                                    <option value="0">Hide a teacher</option>
                                    <option value="1">Work as a teacher</option>
                                </Form.Control>
                            </div>
                        </div>

                        <div className="form-group row">
                            
                            <div className="offset-md-3 col-sm-9">
                            {!register.confirmFlat ? confimPasswordFeedback : null}
                            </div>
                        </div>
                        <div className="form-group row">
                            
                            <div className="offset-md-3 col-sm-9">
                            
                                <Button type="submit" className="btn btn-default btn-auth">
                                    {register.requestRegister ? requestIcon : 'Sign Up'}
                                </Button>

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
                                <i className="fab fa-facebook-square" title="SignIn with Facebook"></i>
                            </li>
                            <li>
                                <i className="fab fa-google-plus-g" title="SignIn with Google+"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { alert, register } = state;
    return { alert, register };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        registerUser: (user) => {
            dispatch(actions.register(user));
        },
        handleRegisterChange: (name, value) => {
            dispatch(actions.handleRegisterChange(name, value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);