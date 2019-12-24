import React from 'react';
import {Card, CardBody, CardHeader} from 'reactstrap';
import {Line} from 'react-chartjs-2';
import Input from "reactstrap/lib/Input";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";
import {connect} from "react-redux";


class RevenueTotal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = async (event) => {
        try {
            console.log(event.target.value)
            this.setState({
                value: event.target.value
            })
        } catch (e) {
            console.log(e);
        } finally {
            console.log('done.');
        }
    };

    render() {
        const chartjs = {
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Revenue for this year',
                        borderColor: '#6a82fb',
                        backgroundColor: '#6a82fb',
                        data: [0, 1300, 2200, 3400, 4600, 3500, 3000],
                    },

                    {
                        label: 'Revenue for last year',
                        borderColor: '#fc5c7d',
                        backgroundColor: '#fc5c7d',
                        data: [0, 1300, 2200, 3400, 4600, 3500, 3000],
                    },
                ],
            },
            options: {
                responsive: true,
                legend: {
                    display: false,
                },
                title: {
                    display: false,
                    text: 'Chart.js Line Chart - Stacked Area',
                },
                tooltips: {
                    intersect: false,
                    mode: 'nearest',
                },
                hover: {
                    mode: 'index',
                },
                scales: {
                    xAxes: [
                        {
                            scaleLabel: {
                                display: false,
                                labelString: 'Month',
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            stacked: true,
                            scaleLabel: {
                                display: false,
                                labelString: 'Value',
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                },
            },
        };

        const items = [
            {name: 'Today', id: 1},
            {name: 'Week', id: 2},
            {name: 'Month', id: 3},
            {name: 'Year', id: 4},
        ];

        let selects = items.map((item, id) => {
            return (
                <option value={item.id}>{item.name}</option>
            )
        });

        let title = `Total Revenue In ${items[this.state.value - 1].name}`

        return (
            <div>
                <Card>
                    <CardHeader>
                        <Row>
                            <Col>
                                {title}
                            </Col>
                            <Col sm={3}>
                                <Input type="select" onChange={this.handleChange}>
                                    {selects}
                                </Input>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <Line data={chartjs.data} options={chartjs.options}/>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {revenue} = state;
    return revenue.datasChart
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RevenueTotal);
