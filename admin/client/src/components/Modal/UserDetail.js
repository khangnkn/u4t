import React from 'react';
import {Button, Modal, ModalBody, ModalFooter, Row, Col} from 'reactstrap';
import {connect} from "react-redux";
import UserProfile from "../Card/UserProfile";

class UserDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    toggle = () => () => {
        this.props.toggle();
    };


    render() {
        const {detail} = this.props;
        return (
            <div>
                <Modal returnFocusAfterClose isOpen={this.props.open} size="lg">
                    <ModalBody>
                        <Row className="pb-3">
                            <Col>
                                <UserProfile user={detail}/>
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle()}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {user} = state;
    return {
        detail: user.detail
    }
}

export default connect(mapStateToProps, null)(UserDetail);
