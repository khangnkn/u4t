import PropTypes from 'prop-types';
import React from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';

import logo200Image from '../assets/img/logo/logo_200.png';

class AuthForm extends React.Component {

    handleSubmit = event => {
        event.preventDefault();
    };

    render() {
        const {
            showLogo,
            usernameLabel,
            usernameInputProps,
            passwordLabel,
            passwordInputProps,
            onLogoClick,
        } = this.props;

        return (
            <Form onSubmit={this.handleSubmit}>
                {showLogo && (
                    <div className="text-center pb-4">
                        <img
                            src={logo200Image}
                            className="rounded"
                            style={{width: 60, height: 60, cursor: 'pointer'}}
                            alt="logo"
                            onClick={onLogoClick}
                        />
                    </div>
                )}
                <FormGroup>
                    <Label for={usernameLabel}>{usernameLabel}</Label>
                    <Input {...usernameInputProps} />
                </FormGroup>
                <FormGroup>
                    <Label for={passwordLabel}>{passwordLabel}</Label>
                    <Input {...passwordInputProps} />
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
                    onClick={this.handleSubmit}>
                    Login
                </Button>
            </Form>
        );
    }
}

export const STATE_LOGIN = 'LOGIN';

AuthForm.propTypes = {
    showLogo: PropTypes.bool,
    usernameLabel: PropTypes.string,
    usernameInputProps: PropTypes.object,
    passwordLabel: PropTypes.string,
    passwordInputProps: PropTypes.object,
    confirmPasswordLabel: PropTypes.string,
    confirmPasswordInputProps: PropTypes.object,
    onLogoClick: PropTypes.func,
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

export default AuthForm;
