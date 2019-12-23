import React from 'react';
import { Button, Modal, ModalFooter, ModalHeader, Form, Row, Label } from 'reactstrap';
import { connect } from "react-redux";
import ModalBody from 'reactstrap/lib/ModalBody';
import Col from 'reactstrap/lib/Col';
import Input from 'reactstrap/lib/Input';
import FormGroup from 'reactstrap/lib/FormGroup';

class SkillDelete extends React.Component {
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
        <ModalHeader>Bạn có chắc muốn xóa skill này ?</ModalHeader>
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

export default connect(mapStateToProps, mapDispatchToProps)(SkillDelete);