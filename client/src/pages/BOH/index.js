import React from 'react';
import { Container } from 'react-bootstrap';
import BohHeader from '../../components/BohHeader';
import BohBody from '../../components/BohBody';
// import BohTable from '../../components/BohTable';

function Boh() {
  return (
    <Container>
      <BohHeader />
      <BohBody />
      {/* <BohTable /> */}
    </Container>
  );
}

export default Boh;
