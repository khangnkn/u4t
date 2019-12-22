import React from 'react';
import {Button, Card, CardBody, CardHeader, Modal, ModalBody, ModalFooter} from 'reactstrap';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Avatar from '../Avatar';
import {connect} from "react-redux";

class UserDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    toggle = () => () => {
        this.props.toggle();
    };


    render() {
        const detail = this.props.detail;
        let skills = [];
        if (detail.data && detail.data.skills) {
            skills = detail.data.skills.map((item, id) => {
                return (
                    <Button outline color="primary" className="mr-3">{item.name}</Button>
                )
            })
        }
        return (
            <div>
                <Modal returnFocusAfterClose isOpen={this.props.open} size="lg">
                    <ModalBody>
                        <Row className="pb-3">
                            <Col>
                                <Card>
                                    <CardHeader className="border-light">User Profile</CardHeader>
                                    <Row>
                                        <Col xs="12" md="4">
                                            <CardBody
                                                className="d-flex justify-content-center align-items-center flex-column">
                                                <Avatar src={detail.avatar} size={100}/>
                                                <div>{detail.fullname}</div>
                                            </CardBody>
                                        </Col>
                                        <Col xs="12" md="8">
                                            <CardBody>
                                                <Row>
                                                    <Col>
                                                        <div>Username: {detail.username}</div>
                                                    </Col>
                                                    <Col>
                                                        <div>Role: {detail.role}</div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <div>Status: {detail.is_active ? 'Active' : 'Locked'}</div>
                                                    </Col>
                                                    <Col>
                                                        <div>City: {detail.city ? detail.city.name : 'No info'}</div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <div>Create at: {detail.created_at}</div>
                                                    </Col>
                                                    <Col>
                                                        <div>Update at: {detail.updated_at}</div>
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                        {
                            skills.length > 0 &&
                            <Row>
                                <Col>
                                    <Card>
                                        <CardHeader>Skills</CardHeader>
                                        <CardBody>
                                            {skills}
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        }
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle()}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {user} = state;
    return {
        detail: user.detail
    }
}

export default connect(mapStateToProps, null)(UserDetail);
