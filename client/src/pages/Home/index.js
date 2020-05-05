import React from 'react';
import { Container } from 'react-bootstrap';
import NumPad from '../../components/NumPad';
import './style.css';

function Home() {
  return (
    <Container
      className='border border-dark rounded text-center mt-5'
      id='home-container'
    >
      <NumPad />
    </Container>
  );
}

export default Home;
