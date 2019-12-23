import React from 'react';
import {connect} from 'react-redux';
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
            skillChoosed: {}
        }
    }

    toggle = (modalType, payload) => () => {
        switch (modalType) {
            case 'detail':
                this.setState({
                    modal_detail: !this.state.modal_detail,
                    skillChoosed: payload
                })
                break;
            case 'edit':
                this.setState({
                    modal_edit: !this.state.modal_edit,
                    skillChoosed: payload
                })
                break;
            case 'delete':
                this.setState({
                    modal_delete: !this.state.modal_delete,
                    skillChoosed: payload
                })
                break;
            default:
                break;
        }
    };

    render() {
        let header = <tr>
            <th>Skill name</th>
            <th>Created</th>
            <th>Update</th>
            <th>Status</th>
            <th>Operation</th>
        </tr>

        let items = this.props.datas.map((data, index) => {
            return (
                <tr>
                    <td>{data.name}</td>
                    <td>{data.created_at}</td>
                    <td>{data.updated_at}</td>
                    <td>{data.is_active ? 'Active' : 'Locked'}</td>
                    <td>
                        <Button onClick={this.toggle('active', {
                            username: data.username,
                            active: data.is_active
                        }
                        )}>
                            {data.is_active ? 'Lock' : 'Unlock'}
                        </Button>
                    </td>
                    <td>
                        <Button onClick={this.toggle('detail', { username: data.username })}>Detail</Button>
                        <Button onClick={this.toggle('edit', { username: data.username })}>Edit</Button>
                        <Button onClick={this.toggle('delete', { username: data.username })}>Delete</Button>
                    </td>
                </tr>
            )
        });

        return (
            <div>
                <Table hover>
                    <thead>
                        {header}
                    </thead>
                    <tbody>
                        <tr>
                            <td>name</td>
                            <td>13213</td>
                            <td>123465</td>
                            <td>12a1sd2as</td>
                            <td>
                                <Button onClick={this.toggle('edit')}>Edit</Button>
                                <Button onClick={this.toggle('delete')}>Delete</Button>
                            </td>
                        </tr>
                        {items}
                    </tbody>
                </Table>
                <SkillEdit open={this.state.modal_edit} toggle={this.toggle('edit')}></SkillEdit>
                <SkillDelete open={this.state.modal_delete} toggle={this.toggle('delete')}></SkillDelete>

            </div>
        );
    }
};

const mapDispatchToProps = {
};

function mapStateToProps(state) {
    const {skill} = state;
    return {
        datas: skill.datas,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillsTable);