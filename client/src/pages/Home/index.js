import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import NumPad from '../../components/NumPad';
import { ClockInButton, ClockOutButton } from '../../components/Buttons';

import './style.css';

function Home() {
  return (
    <Container
      className='border border-dark rounded text-center mt-5'
      id='home-container'
    >
      <Row id='home-row'>
        <Col className='py-3'>
          <NumPad />
        </Col>
        <Col className='my-auto clock-btns'>
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

export default Home;
