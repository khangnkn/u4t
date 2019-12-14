import React from 'react';
import Page from '../components/Page';
import UsersManagementTabs from "../components/Tab/UsersManagementTabs";

class UsersManagementPage extends React.Component {
    componentDidMount() {
        // this is needed, because InfiniteCalendar forces window scroll
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <Page
                className="UserManagementPage"
                title="Management"
                breadcrumbs={[{name: 'Management', active: true}]}
            >
                <UsersManagementTabs></UsersManagementTabs>
            </Page>
        );
    }
}

export default UsersManagementPage;
