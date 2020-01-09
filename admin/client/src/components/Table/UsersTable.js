import React from 'react';
import {connect} from "react-redux";
import {Button, Table} from 'reactstrap';
import Avatar from "../Avatar";

import UserDetail from '../Modal/UserDetail'
import UserLock from '../Modal/UserLock';
import {getDetailUser} from "../../actions/user.actions";

class UsersTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal_active: false,
            modal_detail: false,
            userChoosed: {}
        }
    }

    toggle = (modalType, payload) => async () => {
        switch (modalType) {
            case 'active':
                this.setState({
                    modal_active: !this.state.modal_active,
                    userChoosed: payload
                });
                break;
            case 'detail':
                this.setState({
                    modal_detail: !this.state.modal_detail,
                    userChoosed: payload
                });
                if (!this.state.modal_detail) {
                    const isAdmin = this.props.admin
                    let newPayload = {
                        ...payload,
                        ...{
                            admin: isAdmin
                        }
                    };
                    await this.props.getDetailUser(newPayload)
                }
                break;
            default:
                break;
        }
    };

    render() {
        let header = <tr>
            <th>Avatar</th>
            <th>Full name</th>
            <th>Username</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Status</th>
            <th>Operation</th>
        </tr>;

        let items = this.props.datas.map((data, index) => {
            return (
                <tr>
                    <th scope="row">
                        <Avatar className="mb-2" src={data.avatar}/>
                    </th>
                    <td>{data.fullname}</td>
                    <td>{data.username}</td>
                    <td>{data.created_at}</td>
                    <td>{data.updated_at}</td>
                    <td>{data.is_active ? <h5>Active</h5> : <h5>Locked</h5>}</td>
                    <td className="pr-0 pl-0">
                        <Button
                            onClick={this.toggle('active', {
                                id: data._id,
                                active: data.is_active
                            })}
                        >
                            {data.is_active ? 'Lock' : 'Unlock'}
                        </Button>
                    </td>
                    <td className="pr-0 pl-0">
                        <Button
                            onClick={this.toggle('detail', {id: data._id})}
                        >
                            Detail
                        </Button>
                    </td>
                </tr>
            )
        });

        if (items.length === 0) {
            items = (<h3>No data!!</h3>)
        }

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
                <UserLock open={this.state.modal_active} toggle={this.toggle('active', {})}
                          user={this.state.userChoosed}
                />
                <UserDetail open={this.state.modal_detail} toggle={this.toggle('detail', {})}
                            user={this.state.userChoosed}
                />
            </div>
        );
    }
}

const mapDispatchToProps = {
    getDetailUser
};

function mapStateToProps(state) {
    const {user} = state;
    return {
        datas: user.datas,
        type: user.type,
        detail: user.detail,
        admin: user.admin
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);
