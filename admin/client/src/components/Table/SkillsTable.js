import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap';
import Avatar from "../Avatar";

import UserDetail from '../Modal/UserDetail'
import UserLock from '../Modal/UserLock';
import SkillDetail from '../Modal/SkillDetail';
import SkillDelete from '../Modal/SkillDelete';
import SkillEdit from '../Modal/SkillEdit';

class SkillsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal_detail: false,
            modal_edit: false,
            modal_delete: false,
        }
    }

    toggle = (modalType) => () => {
        switch (modalType) {
            case 'detail':
                this.setState({
                    modal_detail: !this.state.modal_detail
                })
                break;
            case 'edit':
                this.setState({
                    modal_edit: !this.state.modal_edit
                })
                break;
            case 'delete':
                this.setState({
                    modal_delete: !this.state.modal_delete
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
                            <th>Skill name</th>
                            <th>Created</th>
                            <th>Update</th>
                            <th>Status</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>name</td>
                            <td>13213</td>
                            <td>123465</td>
                            <td>12a1sd2as</td>
                            <td>
                                <Button onClick={this.toggle('detail')}>Detail</Button>
                                <Button onClick={this.toggle('edit')}>Edit</Button>
                                <Button onClick={this.toggle('delete')}>Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <SkillDetail open={this.state.modal_detail} toggle={this.toggle('detail')}></SkillDetail>
                <SkillEdit open={this.state.modal_edit} toggle={this.toggle('edit')}></SkillEdit>
                <SkillDelete open={this.state.modal_delete} toggle={this.toggle('delete')}></SkillDelete>

            </div>
        );
    }
};

export default SkillsTable;