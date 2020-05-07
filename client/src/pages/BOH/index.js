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
  }, []);

  const loadOrders = () => {
    ACTIVE_ORDER_API.getActiveOrders()
      .then((res) => {
        setActiveOrders(res.data);
      })
      .catch((err) => console.error(err));
  };

  const archiveOrder = () => {
    ARCHIVED_ORDER_API.addArchivedOrder()
      .then((res) => {
        setArchivedOrders();
      })
      .catch((err) => console.error(err));
  };

  const test = (event) => {
    event.preventDefault();
    const { value } = event.target;
    console.log(value);
  }

  return (
    <Container>
      <BohHeader />
      {activeOrders
        ? activeOrders.map((data, index) => (
            <Row className='py-2 border' key={`table-row-${index + 1}`}>
              <Col md={2} className='my-auto text-center' key={`table-col-${index + 1}`}>
                <span>Table #{data.tableNumber}</span>
              </Col>
              <Col md={6} className='d-flex flex-row my-auto' key={`order-col-${index + 1}`}>
                <Col key={`order-items-col-${index + 1}`}>
                  {data.seatOrders.map((order, index) => (
                    <Row
                      className='d-flex flex-column'
                      key={`order-item-${index + 1}`}
                    >
                      {order.menuItems.map((items, index) => (
                        <Row
                          className='text-center'
                          key={`menu-items-${index + 1}`}
                        >
                          <Col className='text-center my-auto' md={1}>
                            {order.seatNumber}
                          </Col>
                          <Col>{items.itemName}</Col>
                        </Row>
                      ))}
                    </Row>
                  ))}
                </Col>
              </Col>
              <Col md={2} className='text-center my-auto' key={`time-col-${index + 1}`}>
                {format(Date.parse(data.orderInTime), 'pp')}
              </Col>
              <Col md={2} className='text-center my-auto' key={`sold-col-${index + 1}`}>
                <Button variant='success' onClick={test}>CHECK</Button>
              </Col>
            </Row>
          ))
        : console.log(`nothing there`)}
    </Container>
  );
}

export default Boh;
