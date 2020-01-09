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
            const id = this.props.user.id;
            const isAdmin = this.props.admin
            if (this.props.user.active) {
                console.log('lock account');
                await this.props.lockAccount({id: id, admin: isAdmin});
            } else {
                console.log('unlock account');
                await this.props.unlockAccount({id: id, admin: isAdmin});
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

function mapStateToProps(state) {
    const {user} = state;
    return {admin: user.admin}
}

const mapDispatchToProps = {
    lockAccount,
    unlockAccount
};


export default connect(mapStateToProps, mapDispatchToProps)(UserLock);
