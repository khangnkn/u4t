import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap';
import Avatar from "../Avatar";


class RevenueTopSkill extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Table hover>
                    <thead>
                        <tr>
                            <th>Skill name</th>
                            <th>Revenue</th>
                            <th>Growth</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>2.000.000</td>
                            <td>30%</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
};

export default RevenueTopSkill;