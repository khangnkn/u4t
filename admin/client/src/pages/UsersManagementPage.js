import React from 'react';
import Page from '../components/Page';
import UsersManagementTabs from "../components/Tab/UsersManagementTabs";
import PaginationUser from '../components/Paginattion/PaginationUser';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import Button from 'reactstrap/lib/Button';
import UserAddNew from '../components/Modal/UserAddNew';

class UsersManagementPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalAddUser: false
        }
    }
    componentDidMount() {
        // this is needed, because InfiniteCalendar forces window scroll
        window.scrollTo(0, 0);
    }

    toggle = () => () => {
        const isOpen = this.state.isModalAddUser;
        this.setState({
            isModalAddUser: !isOpen
        })
    }

    render() {
        return (
            <Page
                className="UserManagementPage"
                title="User"
                breadcrumbs={[{ name: 'Management', active: true }]}
            >
                <Row>
                    <Col>
                        <Button onClick={this.toggle()}>Add new user</Button>
                        <UserAddNew open={this.state.isModalAddUser} toggle={this.toggle()}></UserAddNew>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <UsersManagementTabs></UsersManagementTabs>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center align-items-center flex-column">
                        <PaginationUser></PaginationUser>
                    </Col>
                </Row>

            </Page>
        );
    }
}

export default UsersManagementPage;
