import React from 'react';
import { connect } from "react-redux";
import { Modal, ModalFooter, Button, ModalHeader } from 'reactstrap';

class ContractDelete extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit = () => async () => {
    try {

    } catch (e) {
      console.log(e);
    } finally {
      console.log('done.');
      this.props.toggle();
    }
  };


  render() {
    return (
      <Modal returnFocusAfterClose isOpen={this.props.open} >
        <ModalHeader>Bạn có chắc muốn xóa này ?</ModalHeader>
        <ModalFooter>
          <Button color="primary" onClick={this.onSubmit()}>Submit</Button>{' '}
          <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(ContractDelete);