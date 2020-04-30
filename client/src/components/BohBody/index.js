import React from 'react';
import { Row, Col } from 'react-bootstrap';

function BohBody() {
  // we need state for this!
  // these are just placeholders, should
  // translate easily with logic

  const tables = [
    {
      table: `12`,
      colSize: `3`,
      order: [`Burger`, `Three Bean Platter`, `Cheese Fries`],
      time: `1205`,
    },
    {
      table: `29`,
      colSize: `6`,
      order: [`Spaghetti Bolognese`, `Bruschetta`, `Caprese Salad`],
      time: `1230`,
    },
    {
      table: `4`,
      colSize: `3`,
      order: [`Dumplings`, `Vegetable Fried Rice`, `Hot and Sour Soup`],
      time: `1300`,
    },
  ];

  return (
    <div>
      {tables.map((columns, index) => (
        <Row className='py-2'>
          <Col md={4}>
            <h6>Table #{columns.table}</h6>
          </Col>
          <Col md={4}>
            {columns.order.map((order, index) => (
              <Row>{order}</Row>
            ))}
          </Col>
          <Col md={2} className='text-center'>{columns.time}</Col>
          <Col md={2}><span className='float-right'>sold</span></Col>
        </Row>
      ))}
    </div>
  );
}

export default BohBody;
