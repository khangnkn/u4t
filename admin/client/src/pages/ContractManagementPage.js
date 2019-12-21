import React from 'react';
import Page from '../components/Page';
import Row from 'reactstrap/lib/Row';
import Card from 'reactstrap/lib/Card';
import CardBody from 'reactstrap/lib/CardBody';
import Col from 'reactstrap/lib/Col';
import ContractsTable from '../components/Table/ContractTable';
import PaginationContract from '../components/Paginattion/PaginationContract';


class ContractManagementPage extends React.Component {
    componentDidMount() {
        // this is needed, because InfiniteCalendar forces window scroll
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <Page
                className="SkillsManagementPage"
                title="Skill"
                breadcrumbs={[{ name: 'Skill', active: true }]}
            >
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <ContractsTable></ContractsTable>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center align-items-center flex-column">
                        <PaginationContract></PaginationContract>
                    </Col>
                </Row>
            </Page>
        );
    }
}

export default ContractManagementPage;
