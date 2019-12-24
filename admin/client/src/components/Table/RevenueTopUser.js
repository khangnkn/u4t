import React from 'react';
import {Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';
import Avatar from "../Avatar";
import Input from "reactstrap/lib/Input";
import {connect} from "react-redux";

class RevenueTopUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = async (event) => {
        try {
            console.log(event.target.value);
            this.setState({
                value: event.target.value
            })
        } catch (e) {
            console.log(e);
        } finally {
            console.log('done.');
        }
    };

    render() {
        const items = [
            {name: 'Today', id: 1},
            {name: 'Week', id: 2},
            {name: 'Month', id: 3},
            {name: 'Year', id: 4},
        ];

        let selects = items.map((item, id) => {
            return (
                <option value={item.id}>{item.name}</option>
            )
        });

        let title = `Top Revenue User In ${items[this.state.value - 1].name}`;

        return (
            <div>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <Row>
                                    <Col>
                                        {title}
                                    </Col>
                                    <Col sm={3}>
                                        <Input type="select" onChange={this.handleChange}>
                                            {selects}
                                        </Input>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Table hover>
                                    <thead>
                                    <tr>
                                        <th>Avatar</th>
                                        <th>Full name</th>
                                        <th>Revenue</th>
                                        <th>Growth</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">
                                            <Avatar className="mb-2"/>
                                        </th>
                                        <td>Mark</td>
                                        <td>2.000.000</td>
                                        <td>30%</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {revenue} = state;
    return revenue.datasTopUser
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RevenueTopUser);

