import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import { Bar, Line } from 'react-chartjs-2';

const chartjs = {
  bar: {
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
              {
                  label: 'Expense for this year',
                  backgroundColor: '#6a82fb',
                  stack: 'Expense',
                  data: [10000, 30000, 50000, 80000, 60000, 20000, 10000],
              },
              {
                  label: 'Expense for last year',
                  backgroundColor: '#fc5c7d',
                  stack: 'Expense',
                  data: [30000, 80000, 50000, 100000, 60000, 40000, 90000],
              },
          ],
      },
      options: {
          title: {
              display: false,
              text: 'Chart.js Bar Chart - Stacked',
          },
          tooltips: {
              mode: 'index',
              intersect: false,
          },
          responsive: true,
          legend: {
              display: false,
          },
          scales: {
              xAxes: [
                  {
                      stacked: true,
                      display: false,
                  },
              ],
              yAxes: [
                  {
                      stacked: true,
                      display: false,
                  },
              ],
          },
      },
  },
  doughnut: {
      data: {
          datasets: [
              {
                  data: [20, 30, 40, 50, 60],
                  backgroundColor: [
                      '#6a82fb',
                      '#fc5c7d',
                      '#45b649',
                      '#00c9ff',
                      '#ffd700',
                  ],
                  label: 'Dataset 1',
              },
          ],
          labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
      },
      options: {
          responsive: true,
          legend: {
              display: false,
          },
          title: {
              display: false,
              text: 'Chart.js Doughnut Chart',
          },
          animation: {
              animateScale: true,
              animateRotate: true,
          },
      },
  },
  line: {
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
  },
};


class RevenueWeek extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            Total Revenue{' '}
            <small className="text-muted text-capitalize">ToWeek</small>
          </CardHeader>
          <CardBody>
            <Line data={chartjs.line.data} options={chartjs.line.options} />
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default RevenueWeek;