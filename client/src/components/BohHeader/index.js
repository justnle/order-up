import React from 'react';
import { Row, Col } from 'react-bootstrap';

function BohHeader() {
  const titles = [
    {
      name: `Table`,
      size: 2
    },
    {
      name: `Seat`,
      size: 1
    },
    {
      name: `Items`,
      size: 4
    },
    {
      name: `Prep (min)`,
      size: 1
    },
    {
      name: `Time`,
      size: 2
    },
    {
      name: `Completed`,
      size: 2
    }
  ];

  return (
    <Row>
      {titles.map((columns, index) => (
        <Col
          xs={columns.size}
          key={`col-${index}`}
          className='text-center py-2 font-weight-bold'
        >
          {columns.name}
        </Col>
      ))}
    </Row>
  );
}

export default BohHeader;
