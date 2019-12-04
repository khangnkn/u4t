import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import './../public/stylesheets/auth.scss';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.renderForTeacher = this.renderForTeacher.bind(this);
        this.renderForStudent = this.renderForStudent.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.props.handleProfileChange(name, value);
        // this.setState({[name]:value});
    }
    handleSubmit(event) {
        event.preventDefault();
        const { username, password } = this.props.register;
        if (username && password) {
            this.props.updateProfile(username, password);
        }
    }
    renderForStudent() {
        return (
            <div>
                <div className="form-group row">
                    <Form.Label htmlFor="inputRole1" className="col-sm-3 control-label">Trình độ</Form.Label>
                    <div className="col-sm-9">
                        <Form.Control className="form-control" onChange={this.handleChange} id="inputRole1" name='role' as="select" defaultValue="0">
                            <option value='1'>Cấp 1</option>
                            <option value='2'>Cấp 2</option>
                            <option value='3'>Cấp 3</option>
                            <option value='4'>Đại học</option>
                            <option value='5'>Sau đại học</option>
                        </Form.Control>
                    </div>
                </div>
                <div className="form-group row">
                    <Form.Label htmlFor="inputRole1" className="col-sm-3 control-label">Khối học</Form.Label>
                    <div className="col-sm-9">
                        <Form.Control className="form-control" onChange={this.handleChange} id="inputRole1" name='role' as="select" defaultValue="0">
                            <option value='1'>Xã hội</option>
                            <option value='2'>Tự nhiên</option>
                            <option value='3'>Ngoại ngữ</option>
                            <option value='4'>Khác</option>
                        </Form.Control>
                    </div>
                </div>
            </div>
        );
    }
    renderForTeacher() {
        return (
            <div>
                <div className="form-group row">
                    <Form.Label htmlFor="inputRole1" className="col-sm-3 control-label">Bằng cấp</Form.Label>
                    <div className="col-sm-9">
                        <Form.Control className="form-control" onChange={this.handleChange} id="inputRole1" name='role' as="select" defaultValue="0">
                            <option value='1'>Đại học</option>
                            <option value='2'>Thạc sĩ</option>
                            <option value='3'>Tiến sĩ</option>
                            <option value='4'>Khác</option>
                        </Form.Control>
                    </div>
                </div>
                <div className="form-group row">
                    <Form.Label htmlFor="inputRole1" className="col-sm-3 control-label">Trình độ người học</Form.Label>
                    <div className="col-sm-9">
                        <Form.Control className="form-control" onChange={this.handleChange} id="inputRole1" name='role' as="select" defaultValue="0">
                            <option value='1'>Cấp 1</option>
                            <option value='2'>Cấp 2</option>
                            <option value='3'>Cấp 3</option>
                            <option value='4'>Đại học</option>
                            <option value='5'>Sau đại học</option>
                        </Form.Control>
                    </div>
                </div>
                <div className="form-group row">
                    <Form.Label htmlFor="inputRole1" className="col-sm-3 control-label">Khối dạy</Form.Label>
                    <div className="col-sm-9">
                        <Form.Control className="form-control" onChange={this.handleChange} id="inputRole1" name='role' as="select" defaultValue="0">
                            <option value='1'>Xã hội</option>
                            <option value='2'>Tự nhiên</option>
                            <option value='3'>Ngoại ngữ</option>
                            <option value='4'>Khác</option>
                        </Form.Control>
                    </div>
                </div>
            </div>
        );
    }
    render() {
        var userCookie = JSON.parse(localStorage.getItem('user'));
        var role = parseInt(userCookie.data.user.account_type);
        var profile = this.props.profile;
        var requestIcon = <img alt="processing" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />;
        return (
            <div className="auth-main">
                <div className="auth-block">
                    <h1>Profile</h1>
                    
                    <Form className="form-horizontal" onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <Form.Label htmlFor="inputUser1" className="col-sm-3 control-label">Fullname</Form.Label>
                            <div className="col-sm-9">
                                <Form.Control className="form-control" onChange={this.handleChange} autoFocus id="inputUser1" name='fullName' type="text" placeholder="Your FullName"></Form.Control>
                            </div>
                        </div>

                        <div className="form-group row">
                            <Form.Label htmlFor="inputPass1" className="col-sm-3 control-label">Address</Form.Label>
                            <div className="col-sm-9">
                                <Form.Control className="form-control" onChange={this.handleChange} id="inputPass1" name='address' type="text" placeholder="Your Address"></Form.Control>
                            </div>
                        </div>

                        <div className="form-group row">
                            <Form.Label htmlFor="inputConfirmPass1" className="col-sm-3 control-label">Contact Email</Form.Label>
                            <div className="col-sm-9">
                                <Form.Control className="form-control" onChange={this.handleChange} id="inputConfirmPass1" name='contactEmail' type="email" placeholder='Your Contact Email'></Form.Control>
                            </div>
                        </div>
                        {role === 0 ? this.renderForStudent() : this.renderForTeacher()}

                        <div className="form-group row">

                            <div className="offset-md-3 col-sm-9">

                                <Button type="submit" className="btn btn-default btn-auth">
                                    {profile.requestUpdate ? requestIcon : 'Update'}
                                </Button>

                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { alert, profile } = state;
    return { alert, profile };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        updateProfile: (user) => {
            dispatch(actions.update(user));
        },
        handleProfileChange: (name, value) => {
            dispatch(actions.handleProfileChange(name, value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);