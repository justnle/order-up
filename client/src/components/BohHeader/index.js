import React from 'react';
import { Row, Col } from 'react-bootstrap';

function BohHeader() {
    const titles = [
        {
            name: `Ticket Info`,
            size: 2
        },
        {
            name: `Items`,
            size: 6
        },
        {
            name: `Time`,
            size: 2
        },
        {
            name: ``,
            size: 2
        }
    ];

  return (
      <Row>
          {titles.map((columns, index) => (
              <Col md={columns.size} key={`col-${index}`} className='text-center py-2 font-weight-bold'>{columns.name}</Col>
          ))}
      </Row>
  );
}

export default BohHeader;
