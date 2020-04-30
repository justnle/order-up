import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import NumPad from '../NumPad';
import Button from 'react-bootstrap/Button';

import './style.css';

export default function Login() {
  const buttons = ['Clock In', 'Clock Out'];

  return (
    <Container className='border border-dark rounded text-center' id='login-container'>
      <Row>
        <Col>
          <NumPad />
        </Col>
        <Col className='my-auto'>
        {buttons.map((button, index) => (
          <Row className='justify-content-center' key={`clock-row-${index}`}>
            <Button variant='primary' className='clock-btn' key={`clock-btn-${index}`}>
              {button}
            </Button>
          </Row>
        ))}
        </Col>
      </Row>
    </Container>
  );
}