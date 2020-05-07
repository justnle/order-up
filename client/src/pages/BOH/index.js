import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { format } from 'date-fns';
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
      console.log(res.data);
      setActiveOrders(res.data);
    });
  };

  return (
    <Container>
      <BohHeader />
      {activeOrders
        ? activeOrders.map((data, index) => (
            <Row className='py-2 border' key={`table-row-${index + 1}`}>
              <Col md={2} className='my-auto' key={`table-col`}>
                <h6>Table #{data.tableNumber}</h6>
              </Col>
              <Col md={6} className='d-flex flex-row' key={`order-col`}>
                <Col key={`order-items-col`}>
                  {data.seatOrders.map((order, index) => (
                    <Row
                      className='d-flex flex-column'
                      key={`order-item-${index + 1}`}
                    >
                      {order.menuItems.map((items, index) => (
                        <Row className='text-center' key={`menu-items-${index + 1}`}>
                          <Col className='text-center' md={1}>{order.seatNumber}</Col>
                          <Col>{items.itemName}</Col>
                        </Row>
                      ))}
                    </Row>
                  ))}
                </Col>
              </Col>
              <Col md={2} className='text-center my-auto' key={`time-col`}>
                {format(Date.parse(data.orderInTime), 'pp')}
              </Col>
              <Col md={2} className='text-center my-auto' key={`sold-col`}>
                <Button variant='success'>CHECK</Button>
              </Col>
            </Row>
          ))
        : console.log(`nothing there`)}
    </Container>
  );
}

export default Boh;
