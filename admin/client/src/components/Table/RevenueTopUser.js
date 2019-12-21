import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap';
import Avatar from "../Avatar";

class RevenueTopUser extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
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
                                <Avatar className="mb-2" />
                            </th>
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

export default RevenueTopUser;