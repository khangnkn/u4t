import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap';
import Avatar from "../Avatar";

import UserDetail from '../Modal/UserDetail'
import UserLock from '../Modal/UserLock';

class UsersTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal_active: false,
            modal_detail: false,
        }
    }

    toggle = (modalType) => () => {
        switch (modalType) {
            case 'active':
                this.setState({
                    modal_active: !this.state.modal_active
                })
                break;
            case 'detail':
                this.setState({
                    modal_detail: !this.state.modal_detail
                })
                break;
            default:
                break;
        }
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
                            <th>Status</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                <Avatar className="mb-2" />
                            </th>
                            <td>Mark</td>
                            <td>+84 123456789</td>
                            <td>01-01-1990</td>
                            <td>abc@gmail.com</td>
                            <td>
                                <Button onClick={this.toggle('active')}>Active</Button>
                            </td>
                            <td>
                                <Button onClick={this.toggle('detail')}>Detail</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <UserLock open={this.state.modal_active} toggle={this.toggle('active')}></UserLock>
                <UserDetail open={this.state.modal_detail} toggle={this.toggle('detail')}></UserDetail>
            </div>
        );
    }
};

export default UsersTable;