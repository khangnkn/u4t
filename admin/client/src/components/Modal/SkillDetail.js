import React from 'react';
import {Modal, ModalFooter, Button, ModalHeader} from 'reactstrap';

class SkillDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <Modal returnFocusAfterClose isOpen={this.props.open} >
        <ModalHeader>Skill detail</ModalHeader>
        <ModalFooter>
          <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

export default SkillDetail;