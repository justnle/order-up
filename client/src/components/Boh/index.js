import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Boh() {
    const titles = [
        {
            name: `Ticket Info`,
            size: 3
        },
        {
            name: `Items`,
            size: 6
        },
        {
            name: `Time`,
            size: 3
        },
    ];

  return (
      <Row>
          {titles.map((columns, index) => (
              <Col md={columns.size} key={`col-${index}`} className='text-center'>{columns.name}</Col>
          ))}
      </Row>
  );
}

export default Boh;
