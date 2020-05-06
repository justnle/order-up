import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BohHeader from '../../components/BohHeader';
import ACTIVE_ORDER_API from '../../utils/activeOrderAPI';
import ARCHIVED_ORDER_API from '../../utils/archivedOrderAPI';
import './style.css';
import Button from 'react-bootstrap/Button';

function Boh() {
  const [activeOrders, setActiveOrders] = useState();
  const [archivedOrders, setArchivedOrders] = useState();

  useEffect(() => {
    loadOrders();
    console.log(activeOrders);
  }, []);

  const loadOrders = () => {
    ACTIVE_ORDER_API.getActiveOrders().then((res) => {
      setActiveOrders(res.data);
    });
  };

  return (
    <Container>
      <BohHeader />
      {activeOrders
        ? activeOrders.map((data, index) => (
            <Row className='py-2 border' key={`table-row-${index + 1}`}>
              <Col md={4} className='my-auto' key={`table-col`}>
                <h6>Table #{data.tableNumber}</h6>
              </Col>
              <Col md={4} className='d-flex flex-row' key={`order-col`}>
                <Col md={2} key={`order-number-col`}>
                  {data.seatOrders.map((order, index) => (
                    <Row key={`order-number-${index + 1}`}>{index + 1}</Row>
                  ))}
                </Col>
                <Col md={10} key={`order-items-col`}>
                  {data.seatOrders.map((order, index) => (
                    <Row key={`order-item-${index + 1}`}>
                      {order.menuItems.map((items, index) => items.itemName)}
                    </Row>
                  ))}
                </Col>
              </Col>
              <Col md={2} className='text-center my-auto' key={`time-col`}>
                {data.orderInTime}
              </Col>
              <Col md={2} className='text-center' key={`sold-col`}>
                <Button variant='success'>CHECK</Button>
              </Col>
            </Row>
          ))
        : console.log(`nothing there`)}
    </Container>
  );
}

export default Boh;
