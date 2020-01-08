import React from 'react';
import {connect} from "react-redux";
import {Button, Modal, ModalFooter, ModalHeader} from 'reactstrap';
import ModalBody from 'reactstrap/lib/ModalBody';
import ContractInfo from "../Card/ContractInfo";

class ContractDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let details = this.props.detail;
        return (
            <Modal
                size={'lg'}
                returnFocusAfterClose
                isOpen={this.props.open}
            >
                <ModalHeader>Contract detail</ModalHeader>
                <ModalBody>
                    <ContractInfo details={details}/>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

function mapStateToProps(state) {
    const {contract} = state;
    return {
        detail: contract.detail
    }
}

const mapDispatchToProps = {};


export default connect(mapStateToProps, mapDispatchToProps)(ContractDetail);
