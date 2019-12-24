import React from 'react';
import Page from '../components/Page';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import RevenueTotal from '../components/Chart/RevenueTotal'
import RevenueTopUser from '../components/Table/RevenueTopUser';
import RevenueTopSkill from '../components/Table/RevenueTopSkill';


class RevenueManagementPage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Page
                className="RevenueManagementPage"
                title="Revenue"
                breadcrumbs={[{name: 'Revenue', active: true}]}
            >

                <Row>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <RevenueTopUser></RevenueTopUser>
                    </Col>

                    <Col lg="6" md="6" sm="12" xs="12">
                        <RevenueTopSkill></RevenueTopSkill>
                    </Col>
                </Row>

                <Row>
                    <Col xs="11">
                        <RevenueTotal></RevenueTotal>
                    </Col>
                </Row>
            </Page>
        );
    }
}

export default RevenueManagementPage;
