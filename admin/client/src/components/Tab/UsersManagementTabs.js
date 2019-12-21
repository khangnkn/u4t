import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import UsersTable from "../Table/UsersTable";
import * as roles from '../../constants/userRole';
import PaginationUser from '../Paginattion/PaginationUser';

class UsersManagementTabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: roles.student.role,
        }
    }

    toggle = (tab) => () => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            })
        };
    };

    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === roles.student.role })}
                            onClick={this.toggle(roles.student.role)}
                        >
                            {roles.student.name + "s"}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === roles.teacher.role })}
                            onClick={this.toggle(roles.teacher.role)}
                        >
                            {roles.teacher.name + "s"}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === roles.admin.role })}
                            onClick={this.toggle(roles.admin.role)}
                        >
                            {roles.admin.name + "s"}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === roles.root.role })}
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
                                <h4>Tab 1 Contents</h4>
                                <UsersTable />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId={roles.teacher.role}>
                        <Row>
                            <Col sm="12">
                                <h4>Tab 2 Contents</h4>
                                <UsersTable />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId={roles.admin.role}>
                        <Row>
                            <Col sm="12">
                                <h4>Tab 3 Contents</h4>
                                <UsersTable />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId={roles.root.role}>
                        <Row>
                            <Col sm="12">
                                <h4>Tab 4 Contents</h4>
                                <UsersTable />
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div >
        );
    }
};

export default UsersManagementTabs;