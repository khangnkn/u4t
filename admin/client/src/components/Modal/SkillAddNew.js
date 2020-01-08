import React from 'react';
import {connect} from "react-redux";

import {
    Button,
    Col,
    Form,
    FormFeedback,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader, Spinner
} from 'reactstrap';
import validateInput from "../../utils/validations/addNewSkill";
import {addSkill} from "../../actions/skill.actions";

class SkillAddNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            isLoading: false,
            errors: {},
            success: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // isValid() {
    //     const {errors, isValid} = validateInput(this.state);
    //     console.log(errors);
    //     console.log(isValid);
    //     this.setState({
    //         errors: errors
    //     });
    //     return isValid;
    // }

    onSubmit = async () => {
        this.setState({
            isLoading: true,
            success: ''
        });
        try {
            const res = await this.props.addSkill({
                data: {
                    name: this.state.name
                }
            });
            this.setState(res);
            if (res.res) {
                this.props.toggle();
            }
        } catch (e) {
            console.log(e)
        } finally {
            console.log('done.');
            this.setState({
                isLoading: false
            });
        }
    };

    render() {
        const {errors, errorMessage, isLoading} = this.state;
        return (
            <Modal returnFocusAfterClose isOpen={this.props.open}>
                <ModalHeader>
                    {errorMessage ?
                        (<h4>Error message: {errorMessage}</h4>) :
                        'Add new skill'
                    }
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Label sm={3}>Skill name</Label>
                            <Col sm={9}>
                                <Input name="name"
                                       placeholder="Skill name"
                                       onChange={this.onChange}
                                       invalid={errors.name}
                                />
                                <FormFeedback>{errors.name}</FormFeedback>
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={this.onSubmit}
                    >
                        {isLoading ?
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            /> :
                            'Submit'
                        }
                    </Button>{' '}
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
    addSkill
};

export default connect(mapStateToProps, mapDispatchToProps)(SkillAddNew);
