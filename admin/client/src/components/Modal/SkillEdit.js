import React from 'react';
import {connect} from "react-redux";

import {
    Button,
    Col,
    Form, FormFeedback,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Spinner
} from 'reactstrap';
import {editSkill} from "../../actions/skill.actions";

class SkillEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            isLoading: false,
            errors: {},
            errorMessage: '',
            succeess: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCancle = this.onCancle.bind(this);
    }

    onChange(event) {
        console.log('onchange');
        this.setState({
            [event.target.name]: event.target.value,
            succeess: ''
        })
    }

    onCancle() {
        this.setState({
            name: null,
            isLoading: false,
            errors: {},
            succeess: ''
        });
        this.props.toggle();
    }

    isValid() {
        return this.state.name;
    }

    onSubmit = async () => {
        console.log('edit')
        try {
            if (this.isValid()) {
                this.setState({
                    isLoading: true
                });
                const res = await this.props.editSkill({
                    id: this.props.skill.id,
                    name: this.state.name
                });
                this.setState(res)
                if (res.res) {
                    this.onCancle();
                }
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
        const {errors, errorMessage, isLoading} = this.state;
        const name = this.state.name !== null ? this.state.name : this.props.skill.name;
        return (
            <Modal returnFocusAfterClose isOpen={this.props.open}>
                <ModalHeader>
                    {errorMessage ?
                        (<h4>Error message: {errorMessage}</h4>) :
                        'Edit skill'
                    }
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Label sm={3}>Skill name</Label>
                            <Col sm={9}>
                                <Input
                                    value={name}
                                    onChange={this.onChange}
                                    name="name"
                                    placeholder="Skill name"
                                    invalid={errors.name}/>
                                <FormFeedback>{errors.name}</FormFeedback>
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={this.onSubmit}
                        disabled={!this.isValid()}
                    >
                        {isLoading ?
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            /> :
                            'Save'}
                    </Button>
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
