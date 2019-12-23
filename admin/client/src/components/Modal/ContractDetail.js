import React from 'react';
import { connect } from "react-redux";
import { Modal, ModalFooter, Button, ModalHeader, Col, Label } from 'reactstrap';
import ModalBody from 'reactstrap/lib/ModalBody';
import Row from 'reactstrap/lib/Row';

class ContractDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let detail = this.props.detail;
    return (
      <Modal returnFocusAfterClose isOpen={this.props.open}>
        <ModalHeader>Contract detail</ModalHeader>
        <ModalBody>
          <Row>
            <Col>
              <Row>
                <Col>
                  <h4>Contrac name</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label sm={3}>Totor:</Label>Nguyen Van A
            </Col>
              </Row>
              <Row>
                <Col>
                  <Label sm={3}>Learner:</Label>Nguyen Van B
            </Col>
              </Row>
              <Row>
                <Col>
                  <Label sm={3}>Prices:</Label>1.000.000
            </Col>
              </Row>
              <Row>
                <Col>
                  <Label sm={3}>Start date:</Label>23/12/2019
            </Col>
              </Row>
              <Row>
                <Col>
                  <Label sm={3}>End date:</Label>23/12/2019
            </Col>
              </Row>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
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



export default connect(mapStateToProps, mapDispatchToProps)(ContractDetail);
