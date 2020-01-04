import React from 'react';
import {Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap';
import classnames from 'classnames';
import UsersTable from "../Table/UsersTable";
import * as roles from '../../constants/userRole';
import {connect} from "react-redux";
import {getUserList} from "../../actions/user.actions";

class UsersManagementTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: roles.student.role,
        }
    }

    componentDidMount() {
        let _payload = {
            role: '0',
            page: this.props.page,
            limit: this.props.limit
        };
        this.props.getUserList(_payload)
    }

    toggle = (tab) => async () => {
        try {
            if (this.state.activeTab !== tab) {
                this.setState({
                    activeTab: tab
                });

                let _payload = {
                    role: tab,
                    page: this.props.page,
                    limit: this.props.limit,
                    admin: tab === '2' || tab === '3'
                };

                await this.props.getUserList(_payload);
            }
        } catch (e) {
            console.log('Get user list fail.');
            console.log(e)
        }
    };

    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === roles.student.role})}
                            onClick={this.toggle(roles.student.role)}
                        >
                            {roles.student.name + "s"}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === roles.teacher.role})}
                            onClick={this.toggle(roles.teacher.role)}
                        >
                            {roles.teacher.name + "s"}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === roles.admin.role})}
                            onClick={this.toggle(roles.admin.role)}
                        >
                            {roles.admin.name + "s"}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === roles.root.role})}
                            onClick={this.toggle(roles.root.role)}
                        >
                            {roles.root.name + "s"}
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId={roles.student.role}>
                        <Row>
                            <Col sm="12">
                                <UsersTable/>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId={roles.teacher.role}>
                        <Row>
                            <Col sm="12">
                                <UsersTable/>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId={roles.admin.role}>
                        <Row>
                            <Col sm="12">
                                <UsersTable/>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId={roles.root.role}>
                        <Row>
                            <Col sm="12">
                                <UsersTable/>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {user} = state;
    let pagination = {};
    switch (user.role) {
        case '0':
            pagination = {
                ...{}, ...{
                    page: user.paginationStudent.page,
                    limit: user.paginationStudent.limit,
                }
            };
            break;
        case '1':
            pagination = {
                ...{}, ...{
                    page: user.paginationTeacher.page,
                    limit: user.paginationTeacher.limit,
                }
            };
            break;
        case '2':
            pagination = {
                ...{}, ...{
                    page: user.paginationAdmin.page,
                    limit: user.paginationAdmin.limit,
                }
            };
            break;
        case '3':
            pagination = {
                ...{}, ...{
                    page: user.paginationRoot.page,
                    limit: user.paginationRoot.limit,
                }
            };
            break;
    }
    return pagination;
}

const mapDispatchToProps = {
    getUserList
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersManagementTabs);
