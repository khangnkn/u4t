import PropTypes from 'prop-types';
import React from 'react';
import {Button, Form, FormFeedback, FormGroup, Input, Label} from 'reactstrap';
import {connect} from "react-redux";
import isEmpty from 'lodash/isEmpty'
import {login} from '../../actions/authentication'

import logo200Image from '../../assets/img/logo/logo_200.png';
import validateInput from "../../utils/validations/login";

class AuthForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {
                email: '',
                password: ''
            },
            isLoading: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    isValid() {
        const {errors, isValid} = validateInput(this.state);
        if (!isValid) {
            this.setState({errors});
        }
        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({
                errors: {
                    email: '',
                    password: ''
                },
                isLoading: true
            });
            this.props.login(this.state).then(
                (res) => this.props.goToDashBoard(),
                (err) => this.setState({errors: {form: err.response.data.message}, isLoading: false})
            );
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const {
            showLogo,
            usernameLabel,
            usernameInputProps,
            passwordLabel,
            passwordInputProps,
            goToDashBoard,
        } = this.props;

        const {errors, identifier, password, isLoading} = this.state;
        if (this.props.hasOwnProperty('errors')) {
            errors.form = this.props.errors;
        }

        return (
            <Form onSubmit={this.onSubmit}>
                {errors.form && <h1>{errors.form}</h1>}
                {showLogo && (
                    <div className="text-center pb-4">
                        <img
                            src={logo200Image}
                            className="rounded"
                            style={{width: 60, height: 60, cursor: 'pointer'}}
                            alt="logo"
                            onClick={goToDashBoard}
                        />
                    </div>
                )}
                <FormGroup>
                    <Label for={usernameLabel}>{usernameLabel}</Label>
                    <Input invalid={!isEmpty(errors.email)} {...usernameInputProps} onChange={this.onChange}
                           name='email'/>
                    <FormFeedback>{errors.email}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for={passwordLabel}>{passwordLabel}</Label>
                    <Input invalid={!isEmpty(errors.password)} {...passwordInputProps} onChange={this.onChange}
                           name='password'/>
                    <FormFeedback>{errors.password}</FormFeedback>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox"/>{' '}Remember me
                    </Label>
                </FormGroup>
                <hr/>
                <Button
                    size="lg"
                    className="bg-gradient-theme-left border-0"
                    block
                    onClick={this.onSubmit}
                    disabled={isLoading}>
                    Login
                </Button>
            </Form>
        );
    }
}

export const STATE_LOGIN = 'LOGIN';

AuthForm.propTypes = {
    goToDashBoard: PropTypes.func,
};

AuthForm.defaultProps = {
    showLogo: true,
    usernameLabel: 'Email',
    usernameInputProps: {
        type: 'email',
        placeholder: 'your@email.com',
    },
    passwordLabel: 'Password',
    passwordInputProps: {
        type: 'password',
        placeholder: 'your password',
    }
};

function mapStateToProps(state) {
    return {...state.authentication};
}

export default connect(mapStateToProps, {login})(AuthForm);
