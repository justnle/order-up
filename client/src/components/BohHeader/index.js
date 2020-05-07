import React from 'react';
import { Row, Col } from 'react-bootstrap';

function BohHeader() {
    const titles = [
        {
            name: `Ticket Info`,
            size: 2
        },
        {
            name: `Seat`,
            size: 1
        },
        {
            name: `Items`,
            size: 5
        },
        {
            name: `Time`,
            size: 2
        },
        {
            name: `Mark Sold`,
            size: 2
        }
    ];

  return (
      <Row>
          {titles.map((columns, index) => (
              <Col xs={columns.size} key={`col-${index}`} className='text-center py-2 font-weight-bold'>{columns.name}</Col>
          ))}
      </Row>
  );
}

export default BohHeader;
