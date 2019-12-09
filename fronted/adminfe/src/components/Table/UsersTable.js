import React from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, Table} from 'reactstrap';
import Avatar from "../Avatar";

class UsersTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            modal_backdrop: false,
            modal_nested_parent: false,
            modal_nested: false,
            backdrop: true,
        }
    }

    toggle = modalType => () => {
        if (!modalType) {
            return this.setState({
                modal: !this.state.modal,
            });
        }

        this.setState({
            [`modal_${modalType}`]: !this.state[`modal_${modalType}`],
        });
    };

    render() {
        return (
            <div>
                <Table hover>
                    <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Full name</th>
                        <th>Phone</th>
                        <th>Birthday</th>
                        <th>Email</th>
                        <th>Operation</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">
                            <Avatar className="mb-2"/>
                        </th>
                        <td>Mark</td>
                        <td>+84 123456789</td>
                        <td>01-01-1990</td>
                        <td>abc@gmail.com</td>
                        <td>
                            <Button onClick={this.toggle('backdrop')}>Detail</Button>
                            <Button onClick={this.toggle('backdrop')}>Edit</Button>
                            <Button onClick={this.toggle('backdrop')}>Delete</Button>

                        </td>
                    </tr>
                    </tbody>
                </Table>
                <Modal
                    isOpen={this.state.modal_backdrop}
                    toggle={this.toggle('backdrop')}
                    backdrop={this.state.backdrop}>
                    <ModalHeader toggle={this.toggle('backdrop')}>
                        Modal title
                    </ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle('backdrop')}>
                            Do Something
                        </Button>{' '}
                        <Button color="secondary" onClick={this.toggle('backdrop')}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
};

export default UsersTable;