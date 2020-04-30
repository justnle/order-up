import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import NumPad from '../../components/NumPad';
import { ClockInButton, ClockOutButton } from '../../components/Buttons';

import './style.css';

function Login() {
  return (
    <Container
      className='border border-dark rounded text-center'
      id='login-container'
    >
      <Row>
        <Col>
          <NumPad />
        </Col>
        <Col className='my-auto'>
          <Row className='justify-content-center py-1'>
            <ClockInButton />
          </Row>
          <Row className='justify-content-center py-1'>
            <ClockOutButton />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
