import AuthForm from '../components/Auth/AuthForm';
import React from 'react';
import { Card, Col, Row } from 'reactstrap';

class AuthPage extends React.Component {
  goToDashBoard = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <Row
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Col md={6} lg={4}>
          <Card body>
            <AuthForm
                goToDashBoard={this.goToDashBoard}
            />
          </Card>
        </Col>
      </Row>
    );
  }
}

export default AuthPage;
