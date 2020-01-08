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
    ModalHeader,
    Spinner
} from "reactstrap";

import {addUser} from "../../actions/user.actions";
import Avatar from "../Avatar";
import {cities} from "../../constants/cities";


class UserAddNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: null,
            avatarUrl: null,
            username: null,
            password: null,
            passwordConfirmation: null,
            email: null,
            fullname: null,
            city: null,
            is_active: '1',
            gender: false,
            role: '',
            datas: [],
            errors: {},
            errorMessage: '',
            isLoading: false,
        };
        this.onChange = this.onChange.bind(this);
        this.onChangeAvatar = this.onChangeAvatar.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({[event.target.name]: event.target.value});
    };

    onChangeAvatar(event) {
        const image = event.target.files.length >= 1 ? event.target.files[0] : null;
        const imageUrl = image != null ? URL.createObjectURL(image) : '';
        this.setState({
            avatar: image,
            avatarUrl: imageUrl
        })
    }

    onSubmit = async () => {
        this.setState({
            isLoading: true
        });
        try {
            const _payload = {
                ...{},
                ...{
                    admin: this.state.role === '2' || this.state.role === '3',
                    data: {
                        avatar: null,
                        username: this.state.username,
                        password: this.state.password,
                        passwordConfirmation: this.state.passwordConfirmation,
                        email: this.state.email,
                        fullname: this.state.fullname,
                        city: this.state.city,
                        is_active: this.state.is_active,
                        gender: this.state.gender,
                        role: this.state.role,
                        datas: [],
                    }
                }
            };
            console.log(_payload);
            console.log('submmit....');
            const res = await this.props.addUser(_payload);
            this.setState(res);
            if (res.res) {
                this.setState({
                    avatar: null,
                    avatarUrl: null,
                    username: null,
                    password: null,
                    passwordConfirmation: null,
                    email: null,
                    fullname: null,
                    city: null,
                    is_active: '1',
                    gender: false,
                    role: '',
                    datas: [],
                    errors: {},
                    errorMessage: '',
                    isLoading: false,
                });
                this.props.toggle();
            }
        } catch (e) {
        } finally {
            this.setState({
                isLoading: false,
            });
            console.log('done.');
        }
    };

    render() {

        const {errors, errorMessage, isLoading} = this.state;

        let itemsCity = cities.map((item) => {
            return (
                <option value={item._id}>{item.name}</option>
            )
        });

        return (
            <Modal returnFocusAfterClose isOpen={this.props.open} size="lg">
                <ModalHeader>
                    {errorMessage ?
                        <h3>{errors.connect}</h3> :
                        'Add new user'
                    }
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Label sm={2}>Avatar</Label>
                            <Col sm={10}>
                                {this.state.avatar &&
                                <Avatar size={100} src={this.state.avatarUrl}></Avatar>
                                }
                                <Input type="file" name="avatar" placeholder="Avatar"
                                       onChange={this.onChangeAvatar}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>Username</Label>
                            <Col sm={10}>
                                <Input name="username" placeholder="Username"
                                       value={this.state.username}
                                       onChange={this.onChange}
                                       invalid={errors.username}/>
                                <FormFeedback>{errors.username}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>Password</Label>
                            <Col sm={5}>
                                <Input type="password" name="password" placeholder="Password"
                                       value={this.state.password}
                                       onChange={this.onChange}
                                       invalid={errors.password}/>
                                <FormFeedback>{errors.password}</FormFeedback>
                            </Col>
                            <Col sm={5}>
                                <Input type="password" name="passwordConfirmation" placeholder="Confirm password"
                                       value={this.state.passwordConfirmation}
                                       onChange={this.onChange}
                                       invalid={errors.passwordConfirmation}/>
                                <FormFeedback>{errors.passwordConfirmation}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input type="email" name="email" placeholder="Email"
                                       value={this.state.email}
                                       onChange={this.onChange}
                                       invalid={errors.email}/>
                                <FormFeedback>{errors.email}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>Fullname</Label>
                            <Col sm={10}>
                                <Input name="fullname" placeholder="Fullname"
                                       value={this.state.fullName}
                                       onChange={this.onChange}
                                       invalid={errors.fullname}/>
                                <FormFeedback>{errors.fullname}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>City</Label>
                            <Col sm={10}>
                                <Input type="select" name="city" placeholder="City"
                                       value={this.state.city}
                                       onChange={this.onChange}
                                       invalid={errors.city}>
                                    <option value={-1}>Choose city</option>
                                    {itemsCity}
                                </Input>
                                <FormFeedback>{errors.city}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>Status</Label>
                            <Col sm={10}>
                                <Input type="select" name="is_active" placeholder="status"
                                       value={this.state.is_active}
                                       onChange={this.onChange}
                                       invalid={errors.is_active}>
                                    <option value={0}>Lock</option>
                                    <option value={1}>Active</option>
                                </Input>
                                <FormFeedback>{errors.is_active}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>Sex</Label>
                            <Col sm={10}>
                                <Input type="select" name="gender" placeholder="Sex"
                                       value={this.state.gender}
                                       onChange={this.onChange}
                                       invalid={errors.gender}>
                                    <option value={true}>Female</option>
                                    <option value={false}>Male</option>
                                </Input>
                                <FormFeedback>{errors.gender}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>Role</Label>
                            <Col sm={10}>
                                <Input type="select" name="role" placeholder="Role"
                                       value={this.state.role}
                                       onChange={this.onChange}
                                       invalid={errors.role}>
                                    <option value={-1}>Choose role</option>
                                    <option value={0}>Learner</option>
                                    <option value={1}>Tutor</option>
                                    <option value={2}>Admin</option>
                                    <option value={3}>Root</option>
                                </Input>
                                <FormFeedback>{errors.role}</FormFeedback>
                            </Col>
                        </FormGroup>

                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary"
                            onClick={this.onSubmit}
                            disabled={isLoading}
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
                    <Button color="secondary"
                            onClick={this.props.toggle}
                    >Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

function mapStateToProps(state) {
    return null
}

const mapDispatchToProps = {
    addUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAddNew);
