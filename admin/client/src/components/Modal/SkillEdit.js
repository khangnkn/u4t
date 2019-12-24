import React from 'react';
import {connect} from "react-redux";

import {Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {editSkill} from "../../actions/skill.actions";

class SkillEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            isLoading: false,
            errors: {},
            succeess: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCancle = this.onCancle.bind(this);
    }

    onChange(event) {
        console.log('onchange');
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onCancle() {
        this.setState({
            name: null
        });
        this.props.toggle();
    }

    isValid() {
        return this.state.name;
    }

    onSubmit = async () => {
        try {
            if (this.isValid()) {
                this.setState({
                    isLoading: true
                });
                await this.props.editSkill({
                    id: this.props.skill.id,
                    name: this.state.name
                });
                this.setState({
                    succeess: 'successfully'
                })
            }
        } catch (e) {
            console.log(e);
        } finally {
            this.setState({
                isLoading: false
            });
        }
    };

    render() {
        console.log('render');
        const name = this.state.name !== null ? this.state.name : this.props.skill.name;
        return (
            <Modal returnFocusAfterClose isOpen={this.props.open}>
                <ModalHeader>Edit skill {this.state.succeess}</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Label sm={3}>Skill name</Label>
                            <Col sm={9}>
                                <Input
                                    value={name}
                                    onChange={this.onChange}
                                    name="name"
                                    placeholder="Skill name"/>
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary"
                            onClick={this.onSubmit}
                    >Save</Button>
                    <Button color="secondary"
                            onClick={this.onCancle}
                    >Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

const mapDispatchToProps = {
    editSkill
};


export default connect(mapStateToProps, mapDispatchToProps)(SkillEdit);
