import React from 'react';
import { connect } from "react-redux";
import { Modal, ModalFooter, Button, ModalHeader, Form, FormGroup, Input } from 'reactstrap';
import ModalBody from 'reactstrap/lib/ModalBody';
import Label from 'reactstrap/lib/Label';
import Col from 'reactstrap/lib/Col';

class ContractEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Contract name',
      tutor: 'Nguyen van a',
      learner: 'Nguyen van b',
      prices: '1.000.000',
      start_date: '10/10/2020',
      end_date: '10/10/2020',
    }
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
      <Modal returnFocusAfterClose isOpen={this.props.open} size="lg">
        <ModalHeader>Edit Contract</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label sm={3}>Contract name</Label>
              <Col sm={9}>
                <Input name="name" placeholder="Contract name" value={this.state.name}></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={3}>Tutor</Label>
              <Col sm={9}>
                <Input name="tutor" placeholder="Tutor name" value={this.state.tutor}></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={3}>Learner</Label>
              <Col sm={9}>
                <Input name="learner" placeholder="Learner name" value={this.state.learner}></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={3}>Prices</Label>
              <Col sm={9}>
                <Input name="prices" placeholder="Prices" value={this.state.prices}></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={3}>Start date</Label>
              <Col sm={9}>
                <Input name="start" placeholder="Start date" value={this.state.start_date}></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={3}>End date</Label>
              <Col sm={9}>
                <Input name="end" placeholder="End date" value={this.state.end_date}></Input>
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
  return {}
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(ContractEdit);