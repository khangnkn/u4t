import React from 'react';
import {Button, Card, CardBody, CardHeader, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter} from 'reactstrap';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Avatar from '../Avatar';
import {MdPersonPin} from 'react-icons/md';
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
        return (
            <div>
                <Modal returnFocusAfterClose isOpen={this.props.open} size="lg">

                    <ModalBody>
                        <Row>
                            <Col>
                                <Card>
                                    <CardHeader className="border-light">User Profile</CardHeader>
                                    <CardBody className="d-flex justify-content-center align-items-center flex-column">
                                        <Avatar src="http://game4v.com/g4v-content/uploads/2019/08/12-5.jpg"
                                                size={detail.avatar}/>
                                    </CardBody>
                                    <CardBody>
                                        <ListGroup flush>
                                            <ListGroupItem className="border-light">
                                                <MdPersonPin/> Fullname:
                                            </ListGroupItem>
                                            <ListGroupItem className="border-light">
                                                <MdPersonPin/> Username:
                                            </ListGroupItem>
                                            <ListGroupItem className="border-light">
                                                <MdPersonPin/> Email:
                                            </ListGroupItem>
                                            <ListGroupItem className="border-light">
                                                <MdPersonPin/> Birthday:
                                            </ListGroupItem>
                                            <ListGroupItem className="border-light">
                                                <MdPersonPin/> Status:
                                            </ListGroupItem>
                                            <ListGroupItem className="border-light">
                                                <MdPersonPin/> Create at:
                                            </ListGroupItem>
                                            <ListGroupItem className="border-light">
                                                <MdPersonPin/> Update at:
                                            </ListGroupItem>
                                        </ListGroup>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col>
                                <h4>Contract List</h4>
                                <h4>Complain List</h4>
                            </Col>
                        </Row>
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
