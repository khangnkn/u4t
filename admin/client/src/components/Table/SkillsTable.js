import React from 'react';
import {connect} from 'react-redux';
import {Button, Table} from 'reactstrap';
import SkillDelete from '../Modal/SkillDelete';
import SkillEdit from '../Modal/SkillEdit';
import {getSkillList} from "../../actions/skill.actions";

class SkillsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal_edit: false,
            modal_delete: false,
            skillChoosed: {}
        }
    }

    componentDidMount() {
        const _payload = {
            page: 1,
            limit: 5
        };
        this.props.getSkillList(_payload);
    }

    toggle = (modalType, payload) => () => {
        switch (modalType) {
            case 'detail':
                this.setState({
                    modal_detail: !this.state.modal_detail,
                    skillChoosed: payload
                });
                break;
            case 'edit':
                this.setState({
                    modal_edit: !this.state.modal_edit,
                    skillChoosed: payload
                });
                break;
            case 'delete':
                this.setState({
                    modal_delete: !this.state.modal_delete,
                    skillChoosed: payload
                });
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
            <th>Operation</th>
        </tr>;

        let items = this.props.datas.map((data, index) => {
            return (
                <tr>
                    <td>{data.name}</td>
                    <td>{data.created_at}</td>
                    <td>{data.updated_at}</td>
                    <td>
                        {/*<Button onClick={this.toggle('detail', {username: data.username})}>Detail</Button>*/}
                        <Button
                            className="mr-2"
                            onClick={this.toggle('edit', {name: data.name, id: data._id})}
                        >Edit</Button>
                        <Button
                            onClick={this.toggle('delete', {name: data.name, id: data._id})}
                        >Delete</Button>
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
                <SkillEdit
                    open={this.state.modal_edit}
                    toggle={this.toggle('edit', {})}
                    skill={this.state.skillChoosed}
                />
                <SkillDelete
                    open={this.state.modal_delete}
                    toggle={this.toggle('delete', {})}
                    skill={this.state.skillChoosed}
                />
            </div>
        );
    }
}

const mapDispatchToProps = {
    getSkillList
};

function mapStateToProps(state) {
    const {skill} = state;
    console.log('mapStateToProps');
    return {
        datas: skill.datas,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillsTable);
