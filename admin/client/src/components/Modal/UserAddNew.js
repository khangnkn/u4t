import React from 'react';
import { Button, Modal, ModalFooter, ModalHeader, Form, Row, Label } from 'reactstrap';
import { lockAccount, unlockAccount } from "../../actions/user.actions";
import { connect } from "react-redux";
import ModalBody from 'reactstrap/lib/ModalBody';
import Col from 'reactstrap/lib/Col';
import Input from 'reactstrap/lib/Input';
import FormGroup from 'reactstrap/lib/FormGroup';

class UserAddNew extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit = () => async () => {
        try {

        } catch (e) {
            console.log(e);
        } finally {
            console.log('done.');
            this.props.toggle();
        }
    };

    render() {
        return (
            <Modal returnFocusAfterClose isOpen={this.props.open} size="lg">
                <ModalHeader>Add new user</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Label sm={2}>Avatar</Label>
                            <Col sm={10}>
                                <Input type="file" name="avatar" placeholder="Avatar"></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>Username</Label>
                            <Col sm={10}>
                                <Input name="username" placeholder="Username"></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>Password</Label>
                            <Col sm={5}>
                                <Input type="password" name="password" placeholder="Password"></Input>
                            </Col>
                            <Col sm={5}>
                                <Input type="password" name="confirmpassword" placeholder="Confirm password"></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>Fullname</Label>
                            <Col sm={10}>
                                <Input name="fullname" placeholder="Fullname"></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>City</Label>
                            <Col sm={10}>
                                <Input type="select" name="city" placeholder="City">
                                    <option>TP1</option>
                                    <option>TP2</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>Status</Label>
                            <Col sm={10}>
                                <Input type="select" name="status" placeholder="status">
                                    <option>Active</option>
                                    <option>Lock</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>Role</Label>
                            <Col sm={10}>
                                <Input type="select" name="role" placeholder="role">
                                    <option>Learner</option>
                                    <option>Tutor</option>
                                    <option>Admin</option>
                                    <option>Root</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>Sex</Label>
                            <Col sm={10}>
                                <Input type="select" name="sex" placeholder="Sex">
                                    <option>Male</option>
                                    <option>Female</option>
                                </Input>
                            </Col>
                        </FormGroup>

                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.onSubmit()}>Submit</Button>{' '}
                    <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

const mapDispatchToProps = {
    lockAccount,
    unlockAccount
};


export default connect(null, mapDispatchToProps)(UserAddNew);
