import React from 'react';
import {connect} from 'react-redux';
// import { addFlashMessage } from '../actions/flashMessages';

export default function (ComposedComponent) {
    class Authenticate extends React.Component {
        componentWillMount() {
            if (!this.props.isAuthenticated) {
                console.log('You need to login to access this page');
                this.props.history.push('/login');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.isAuthenticated) {
                this.props.history.push('/');
            }
        }

        render() {
            return (
                <ComposedComponent {...this.props} />
            );
        }
    }

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.authentication.isAuthenticated
        };
    }

    return connect(mapStateToProps, null)(Authenticate);
}
