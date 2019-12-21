import React from 'react';
import {Modal, ModalFooter, Button, ModalHeader} from 'reactstrap';

class SkillEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit = () => () => {
    console.log('submit...')
    this.props.toggle();
  }

  render(){
    return(
      <Modal returnFocusAfterClose isOpen={this.props.open} >
        <ModalHeader>Edit skill</ModalHeader>
        <ModalFooter>
          <Button color="primary" onClick={this.onSubmit()}>Save</Button>
          {' '}
          <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

export default SkillEdit;