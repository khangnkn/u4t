import React from 'react';
import {connect} from 'react-redux';
import {Button, Table} from 'reactstrap';
import ContractDetail from '../Modal/ContractDetail';
import ContractEdit from '../Modal/ContractEdit';
import ContractDelete from '../Modal/ContractDelete';
import {getContractDetail, getContractList} from "../../actions/contract.actions";

class ContractsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal_detail: false,
            modal_edit: false,
            modal_delete: false,
            contractChoosed: {}
        }
    }

    componentDidMount() {
        const _payload = {
            page: 1,
            limit: 5
        };
        this.props.getContractList(_payload);
    }

    toggle = (modalType, payload) => async () => {
        switch (modalType) {
            case 'detail':
                if (!this.state.modal_detail) {
                    const res = await this.props.getContractDetail(payload)
                }
                this.setState({
                    modal_detail: !this.state.modal_detail,
                    contractChoosed: payload
                });
                break;
            case 'edit':
                this.setState({
                    modal_edit: !this.state.modal_edit,
                    contractChoosed: payload
                });
                break;
            case 'delete':
                this.setState({
                    modal_delete: !this.state.modal_delete,
                    contractChoosed: payload
                });
                break;
            default:
                break;
        }
    };

    render() {

        let header = <tr>
            <th>Contract name</th>
            <th>Tutor</th>
            <th>Learner</th>
            <th>Price</th>
            <th>Start date</th>
            <th>End date</th>
            <th>Operation</th>
            <th></th>
            <th></th>
        </tr>;


        let items = this.props.datas.map((data, index) => {
            return (
                <tr>
                    <td>{data.title}</td>
                    <td>{data.tutor ? data.tutor.username : ""}</td>
                    <td>{data.learner ? data.tutor.username : ""}</td>
                    <td>{data.price}</td>
                    <td>{data.start_date}</td>
                    <td>{data.end_date}</td>
                    <td>
                        <Button
                            onClick={this.toggle('detail', {id: data._id})}
                        >
                            Detail
                        </Button>
                    </td>
                    <td>
                        <Button disabled
                            onClick={this.toggle('edit', {id: data._id})}
                        >
                            Edit
                        </Button>
                    </td>
                    <td>
                        <Button
                            onClick={this.toggle('delete', {id: data._id})}
                        >
                            Delete
                        </Button>
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
                    {items}
                    </tbody>
                </Table>
                <ContractDetail
                    open={this.state.modal_detail}
                    toggle={this.toggle('detail', {})}
                />
                <ContractEdit
                    open={this.state.modal_edit}
                    toggle={this.toggle('edit', {})}
                />
                <ContractDelete
                    open={this.state.modal_delete}
                    toggle={this.toggle('delete', {})}
                />

            </div>
        );
    }
}

function mapStateToProps(state) {
    const {contract} = state;
    return {
        datas: contract.datas,
        detail: contract.detail
    }
}


const mapDispatchToProps = {
    getContractList,
    getContractDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(ContractsTable);
