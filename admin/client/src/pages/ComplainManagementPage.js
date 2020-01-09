import React from 'react';
import Page from '../components/Page';
import Row from 'reactstrap/lib/Row';
import Card from 'reactstrap/lib/Card';
import CardBody from 'reactstrap/lib/CardBody';
import Col from 'reactstrap/lib/Col';
import ComplainTable from '../components/Table/ComplainTable';
import PaginationComplain from '../components/Paginattion/PaginationComplain';

class ComplainManagementPage extends React.Component {
    componentDidMount() {
        // this is needed, because InfiniteCalendar forces window scroll
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <Page
                className="ComplainManagementPage"
                title="Complain"
                breadcrumbs={[{ name: 'Skill', active: true }]}
            >
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <ComplainTable></ComplainTable>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center align-items-center flex-column">
                        <PaginationComplain></PaginationComplain>
                    </Col>
                </Row>
            </Page>
        );
    }
}

export default ComplainManagementPage;
