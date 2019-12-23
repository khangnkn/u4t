import React from 'react';
import { Button, Modal, ModalFooter, ModalHeader, Form, Row, Label } from 'reactstrap';
import { lockAccount, unlockAccount } from "../../actions/user.actions";
import { connect } from "react-redux";
import ModalBody from 'reactstrap/lib/ModalBody';
import Col from 'reactstrap/lib/Col';
import Input from 'reactstrap/lib/Input';
import FormGroup from 'reactstrap/lib/FormGroup';

class SkillEdit extends React.Component {
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
        <ModalHeader>Edit skill</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label sm={2}>Skill name</Label>
              <Col sm={10}>
                <Input name="skillname" placeholder="Skill name"></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Status</Label>
              <Col sm={10}>
                <Input type="select" name="status" placeholder="status">
                  <option>Active</option>
                  <option>Lock</option>
                </Input>
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.onSubmit()}>Save</Button>
          {' '}
          <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

function mapStateToProps(state) {
  return{}
}

const mapDispatchToProps = {

};



export default connect(mapStateToProps, mapDispatchToProps)(SkillEdit);
