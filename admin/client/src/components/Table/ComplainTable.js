import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap';
import ComplainDetail from '../Modal/ComplainDetail';
import ComplainDelete from '../Modal/ComplainDelete';


class ComplainTable extends React.Component {
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
                            <th>Learner</th>
                            <th>Contents</th>
                            <th>Star</th>
                            <th>Created</th>
                            <th>Updated</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Learner</td>
                            <td>Bad</td>
                            <td>1</td>
                            <td>10/10/2010</td>
                            <td>10/11/2010</td>
                            <td>
                                <Button onClick={this.toggle('detail')}>Detail</Button>
                                <Button onClick={this.toggle('delete')}>Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <ComplainDetail open={this.state.modal_detail} toggle={this.toggle('detail')}></ComplainDetail>
                <ComplainDelete open={this.state.modal_delete} toggle={this.toggle('delete')}></ComplainDelete>
            </div>
        );
    }
};

export default ComplainTable;