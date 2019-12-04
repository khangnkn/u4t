import React from 'react'
import componentQueries from 'react-component-queries';

import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import {EmptyLayout, MainLayout, LayoutRoute} from './components/Layout';

import DashboardPage from "./pages/Dashboard";
import AuthPage from "./pages/AuthPage";

import './styles/reduction.scss';
import requireAuth from "./utils/requireAuth";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <LayoutRoute
                        exact
                        path="/login"
                        layout={EmptyLayout}
                        component={props => (
                            <AuthPage {...props}/>
                        )}
                    />
                    <MainLayout breakpoint={this.props.breakpoint}>
                        <Route path="/" exact component={requireAuth(DashboardPage)}/>
                    </MainLayout>
                </Switch>
            </Router>
        );
    }
}


// function PrivateRoute({children, ...rest}) {
//     console.log({children, ...rest});
//     return (
//         <Route
//             {...rest}
//             render={({location}) =>
//                 checkCookie() ? (children) :
//                     (<Redirect
//                         to={{
//                             pathname: "/login",
//                             state: {from: location}
//                         }}/>)
//             }
//         />
//     );
// }

const query = ({width}) => {
    if (width < 575) {
        return {breakpoint: 'xs'};
    }

    if (576 < width && width < 767) {
        return {breakpoint: 'sm'};
    }

    if (768 < width && width < 991) {
        return {breakpoint: 'md'};
    }

    if (992 < width && width < 1199) {
        return {breakpoint: 'lg'};
    }

    if (width > 1200) {
        return {breakpoint: 'xl'};
    }

    return {breakpoint: 'xs'};
};

export default componentQueries(query)(App);

