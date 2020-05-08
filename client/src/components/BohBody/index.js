import React from 'react';
import { Row, Col } from 'react-bootstrap';

function BohBody() {
  // we need state for this!
  // these are just placeholders, should
  // translate easily with logic

  const tables = [
    {
      table: `12`,
      order: [`Burger`, `Three Bean Platter`, `Cheese Fries`],
      time: `1205`,
    },
    {
      table: `29`,
      order: [
        `Spaghetti Bolognese`,
        `Bruschetta`,
        `Caprese Salad`,
        `Ricotta Ravioli`,
      ],
      time: `1230`,
    },
    {
      table: `4`,
      order: [`Dumplings`, `Vegetable Fried Rice`],
      time: `1300`,
    },
  ];

  return (
    <div>
      {tables.map((columns, index) => (
        <Row className='py-2 border' key={`table-row-${index + 1}`}>
          <Col md={4} className='my-auto' key={`table-col`}>
            <h6>Table #{columns.table}</h6>
          </Col>
          <Col md={4} className='d-flex flex-row' key={`order-col`}>
            <Col md={2} key={`order-number-col`}>
              {columns.order.map((order, index) => (
                <Row key={`order-number-${index + 1}`}>{index + 1}</Row>
              ))}
            </Col>
            <Col md={10} key={`order-items-col`}>
              {columns.order.map((order, index) => (
                <Row key={`order-item-${index + 1}`}>{order}</Row>
              ))}
            </Col>
          </Col>
          <Col md={2} className='text-center my-auto' key={`time-col`}>
            {columns.time}
          </Col>
          <Col md={2} key={`sold-col`}>
            <span className='float-right'>sold</span>
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default BohBody;
