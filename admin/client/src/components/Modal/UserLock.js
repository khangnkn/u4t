import React from 'react';
import {Button, Modal, ModalFooter, ModalHeader} from 'reactstrap';
import {lockAccount, unlockAccount} from "../../actions/user.actions";
import {connect} from "react-redux";

class UserLock extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit = () => async () => {
        try {
            const username = this.props.user.username;
            if (this.props.user.active) {
                console.log('lock account');
                await this.props.lockAccount({username: username});
            } else {
                console.log('unlock account');
                await this.props.unlockAccount({username: username});
            }
        } catch (e) {
            console.log(e);
        } finally {
            console.log('done.');
            this.props.toggle();
        }
    };

    render() {
        const message = this.props.user.active ? 'khóa' : 'mở khóa';
        return (
            <Modal returnFocusAfterClose isOpen={this.props.open}>
                <ModalHeader>Bạn có chắc muốn {message}?</ModalHeader>
                <ModalFooter>
                    <Button color="primary" onClick={this.onSubmit()}>Submit</Button>{' '}
                    <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

const mapDispatchToProps = {
    lockAccount,
    unlockAccount
};


export default connect(null, mapDispatchToProps)(UserLock);
