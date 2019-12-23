import React from 'react';
import Page from '../components/Page';
import Row from 'reactstrap/lib/Row';
import Card from 'reactstrap/lib/Card';
import SkillsTable from '../components/Table/SkillsTable';
import CardBody from 'reactstrap/lib/CardBody';
import Col from 'reactstrap/lib/Col';
import PaginationSkill from '../components/Paginattion/PaginationSkill';
import SkillAddNew from '../components/Modal/SkillAddNew';
import Button from 'reactstrap/lib/Button';

class SkillsManagementPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalAddSkill: false
        }
    }

    toggle = () => () => {
        const isOpen = this.state.isModalAddSkill;
        this.setState({
            isModalAddSkill: !isOpen
        })
    }

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
                        <Button onClick={this.toggle()}>Add new skill</Button>
                        <SkillAddNew open={this.state.isModalAddSkill} toggle={this.toggle()}></SkillAddNew>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <SkillsTable></SkillsTable>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center align-items-center flex-column">
                        <PaginationSkill></PaginationSkill>
                    </Col>
                </Row>
            </Page>
        );
    }
}

export default SkillsManagementPage;
