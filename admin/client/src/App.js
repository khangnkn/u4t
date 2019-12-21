import React from 'react'
import componentQueries from 'react-component-queries';

import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import {EmptyLayout, MainLayout, LayoutRoute} from './components/Layout';

import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/Dashboard";
import UsersManagementPage from "./pages/UsersManagementPage";

import './styles/reduction.scss';
import requireAuth from "./utils/requireAuth";
import SkillsManagementPage from './pages/SkillManagementPage';
import ContractManagementPage from './pages/ContractManagementPage';
import ComplainManagementPage from './pages/ComplainManagementPage';
import RevenueManagementPage from './pages/RevenueManagementPage';

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
                        {/*<Route path="/" exact component={requireAuth(DashboardPage)}/>*/}
                        <Route exact path="/" component={DashboardPage} />
                        <Route exact path="/management-user" component={UsersManagementPage} />
                        <Route exact path="/management-skill" component={SkillsManagementPage} />
                        <Route exact path="/management-contract" component={ContractManagementPage} />
                        <Route exact path="/management-complain" component={ComplainManagementPage} />
                        <Route exact path="/management-revenue" component={RevenueManagementPage} />
                        
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

