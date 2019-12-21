import React from 'react';
import Page from '../components/Page';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import RevenueDay from '../components/Chart/RevenueDay'
import RevenueWeek from '../components/Chart/RevenueWeek'
import RevenueMonth from '../components/Chart/RevenueMonth'
import RevenueYear from '../components/Chart/RevenueYear'
import RevenueTopUser from '../components/Table/RevenueTopUser';
import RevenueTopSkill from '../components/Table/RevenueTopSkill';
import CardBody from 'reactstrap/lib/CardBody';
import { Card, CardHeader } from 'reactstrap';



class RevenueManagementPage extends React.Component {
    componentDidMount() {
        // this is needed, because InfiniteCalendar forces window scroll
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <Page
                className="RevenueManagementPage"
                title="Revenue"
                breadcrumbs={[{ name: 'Revenue', active: true }]}
            >
                <Row>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <RevenueDay></RevenueDay>
                    </Col>

                    <Col lg="6" md="6" sm="12" xs="12">
                        <RevenueWeek></RevenueWeek>
                    </Col>
                </Row>

                <Row>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <RevenueMonth></RevenueMonth>
                    </Col>

                    <Col lg="6" md="6" sm="12" xs="12">
                        <RevenueYear></RevenueYear>
                    </Col>
                </Row>

                <Row>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <Card>
                            <CardHeader>Top revenue users</CardHeader>
                            <CardBody>
                                <RevenueTopUser></RevenueTopUser>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg="6" md="6" sm="12" xs="12">
                    <Card>
                            <CardHeader>Top revenue skills</CardHeader>
                            <CardBody>
                            <RevenueTopSkill></RevenueTopSkill>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Page>
        );
    }
}

export default RevenueManagementPage;
