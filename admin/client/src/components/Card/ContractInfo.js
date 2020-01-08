import React from 'react';
import {Badge, Card, CardBody, Col, Form, FormGroup, Input, Label, ListGroup, ListGroupItem, Row} from "reactstrap";
import Avatar from "../Avatar";

class ContractInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const learner = this.props.details && this.props.details.learner ? this.props.details.learner : {};
        const tutor = this.props.details && this.props.details.tutor ? this.props.details.tutor : {};
        const detail = this.props.details ? this.props.details : {};

        console.log(learner)
        console.log(tutor)
        console.log(detail)

        let reviews;
        if (this.props.details && this.props.details.reviews) {
            reviews = this.props.details.reviews.map(item => {
                return (
                    <ListGroupItem
                        className="justify-content-between">
                        item.content
                        {'  '}
                        <Badge>rating</Badge>
                    </ListGroupItem>
                )
            })
        } else {
            reviews = <ListGroupItem
                className="justify-content-between">
                No review
                {'  '}
                <Badge>5</Badge>
            </ListGroupItem>
        }
        return (
            <Card>
                <Row>
                    <Col>
                        <CardBody>
                            <Row>
                                <Col>
                                    <h5>Title: {detail.title}</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    Description: {detail.description}
                                </Col>
                            </Row>
                        </CardBody>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CardBody>
                            <Row>
                                <Col>Prices: {detail.price}</Col>
                                <Col>Total: {detail.total}</Col>
                                <Col>Rating: {detail.rating}</Col>
                            </Row>
                            <Row>
                                <Col>Issuing time: {detail.issuing_time}</Col>
                                <Col>Start : {detail.start_date}</Col>
                                <Col>End: {detail.end_date}</Col>
                            </Row>
                        </CardBody>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CardBody
                            className="d-flex justify-content-center align-items-center flex-column">
                            <Row className="pb-2">
                                <Avatar src={tutor.avatar ? tutor.avatar : ''} size={100}/>
                            </Row>
                        </CardBody>
                        <CardBody>
                            <Form>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <h3>Tutor</h3>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label for="usernameTutor">Username</Label>
                                            <Input
                                                value={tutor.username ? tutor.username : "No data"}
                                                readonly
                                                name="usernameTutor" id="usernameTutor" placeholder="Username"/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label for="emailTutor">Email</Label>
                                            <Input
                                                value={tutor.email ? tutor.email : "No data"}
                                                readonly
                                                name="emailTutor" id="emailTutor" placeholder="Email"/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label for="fullnameTutor">Full name</Label>
                                            <Input
                                                value={tutor.fullname ? tutor.fullname : "No data"}
                                                readonly
                                                name="fullnameTutor" id="fullnameTutor" placeholder="Fullname"/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>
                    </Col>
                    <Col>
                        <CardBody
                            className="d-flex justify-content-center align-items-center flex-column">
                            <Row className="pb-2">
                                <Avatar src={learner.avatar ? learner.avatar : ""} size={100}/>
                            </Row>
                        </CardBody>
                        <CardBody>
                            <Form>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <h3>Learner</h3>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label for="username">Username</Label>
                                            <Input
                                                value={learner.username ? learner.username : "No data"}
                                                readonly
                                                name="username" id="username" placeholder="Username"/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label for="email">Email</Label>
                                            <Input
                                                value={learner.email ? learner.email : "No data"}
                                                readonly
                                                name="email" id="email" placeholder="Email"/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label for="fullname">Full name</Label>
                                            <Input
                                                value={learner.fullname ? learner.fullname : "No data"}
                                                readonly
                                                name="fullname" id="fullname" placeholder="Fullname"/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CardBody>
                            <Row>
                                <Col>
                                    <h5>Reviews:</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <ListGroup>
                                        {reviews}
                                    </ListGroup>
                                </Col>
                            </Row>
                        </CardBody>
                    </Col>
                </Row>
            </Card>
        )
    }
}

export default ContractInfo;
