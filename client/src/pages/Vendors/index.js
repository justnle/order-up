import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/index';
import { Container, Col, Row } from 'react-bootstrap';

function Vendors() {
  return (
    <div>
      <h1 className='d-flex justify-content-center display-4 text-white mt-5'>
        Vendors
      </h1>
      <Container className='mt-5 mb-3'>
        <SearchBar className='col-12 rounded-sm' placeholder='Search vendors' />
      </Container>
    </div>
  );
}

export default Vendors;
