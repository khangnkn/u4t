import React from 'react';
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import Avatar from "../Avatar";

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        const user = this.props.user ? this.props.user : {};
        let roles = ['Learner', 'Tutor', 'Admin', 'Root'];
        return (
            <Card>
                <CardHeader tag="h4">User Profile</CardHeader>
                <CardBody
                    className="d-flex justify-content-center align-items-center flex-column">
                    <Row className="pb-2">
                        <Avatar src={user.avatar} size={100}/>
                    </Row>

                </CardBody>
                <CardBody>
                    <Form>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <h3>Role: {roles[user.role]}</h3>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <h3>Status: {user.is_active ? 'Active' : "No active"}</h3>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="username">Username</Label>
                                    <Input
                                        value={user.username ? user.username : "No data"}
                                        readonly
                                        name="username" id="username" placeholder="Username"/>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input
                                        value={user.email ? user.email : "No data"}
                                        readonly
                                        name="email" id="email" placeholder="Email"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="fullname">Full name</Label>
                                    <Input
                                        value={user.fullname ? user.fullname : "No data"}
                                        readonly
                                        name="fullname" id="fullname" placeholder="Fullname"/>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="phone">Phone </Label>
                                    <Input
                                        value={user.phone ? user.phone : "No data"}
                                        readonly
                                        name="phone" id="phone" placeholder="Phone"/>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="gender">Gender </Label>
                                    <Input
                                        value={user.gender ? "Man" : "Woman"}
                                        readonly
                                        name="gender" id="gender" placeholder="Gender"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="address">Address</Label>
                                    <Input
                                        value={user.address ? user.address : "No data"}
                                        readonly
                                        name="address" id="address" placeholder="Address"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="city">City</Label>
                                    <Input
                                        value={user.city ? user.city.name : "No city data."}
                                        readonly
                                        name="city" id="city" placeholder="City"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="created_at">Created at</Label>
                                    <Input
                                        value={user.created_at ? user.created_at : "No data"}
                                        readonly
                                        name="created_at" id="created_at" placeholder="Created at"/>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="updated_at">Updated at</Label>
                                    <Input
                                        value={user.updated_at ? user.updated_at : "No data"}
                                        readonly
                                        name="updated_at" id="updated_at" placeholder="Updated at"/>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="deleted_at">Deleted at</Label>
                                    <Input
                                        value={user.deleted_at ? user.deleted_at : 'No data'}
                                        readonly
                                        name="deleted_at" id="deleted_at" placeholder="Deleted at"/>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        )
    }
}


export default UserProfile;
