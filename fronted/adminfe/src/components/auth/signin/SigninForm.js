import React from 'react'

import {Formik, Field, Form, ErrorMessage} from 'formik';

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    return errors;
};


class SigninForm extends React.Component {


    render() {
        return (
            <div>
                <h1>Sign In Form</h1>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validate={validate}
                    onSubmit={values => console.log(values)}
                    render={({errors, touched}) => (
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field name="email" placeholder="john@acme.com" type="email"/>
                            <div className="field-error">
                                <ErrorMessage name="email"/>
                            </div>
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password"/>
                            <button type="submit">Sign In</button>
                        </Form>
                    )}
                />
            </div>
        )
    }
}

export default SigninForm;