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
    ModalHeader
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
        this.onChange = this.onChange.bind(this)
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    isValid() {
        const {errors, isValid} = validateInput(this.state);
        console.log(errors);
        console.log(isValid);
        this.setState({
            errors: errors
        });
        return isValid;
    }

    onSubmit = async () => {
        this.setState({
            isLoading: true,
            success: ''
        });
        try {
            if (this.isValid()) {
                await this.props.addSkill({
                    data: {
                        name: this.state.name
                    }
                });
                this.setState({
                    success: 'successfuly',
                    errors: {}
                });
            }
        } catch (e) {
            let connect = '';
            if (e.response) {
                connect = e.response.data.msg
            } else {
                connect = e.message
            }
            this.setState({
                errors: {
                    connect
                }
            })
        } finally {
            console.log('done.');
            this.setState({
                isLoading: false
            });
        }
    };

    render() {
        const {errors} = this.state;
        return (
            <Modal returnFocusAfterClose isOpen={this.props.open}>
                <ModalHeader>
                    {errors.connect && <h4>Error message: {errors.connect}</h4>}
                    Add new skill {this.state.success}
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Label sm={3}>Skill name</Label>
                            <Col sm={9}>
                                <Input name="name" placeholder="Skill name"
                                       onChange={this.onChange}
                                       invalid={errors.name}
                                />
                                <FormFeedback>{errors.name}</FormFeedback>
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.onSubmit}>Submit</Button>{' '}
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
