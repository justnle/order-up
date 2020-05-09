import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { format } from 'date-fns';
import BohHeader from '../../components/BohHeader';
import ACTIVE_ORDER_API from '../../utils/activeOrderAPI';
import ARCHIVED_ORDER_API from '../../utils/archivedOrderAPI';
import './style.css';

function Boh() {
  const [activeOrders, setActiveOrders] = useState([]);
  const [archivedOrder, setArchivedOrder] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  useEffect(() => {
    ARCHIVED_ORDER_API.addArchivedOrder(archivedOrder).catch(err =>
      console.error(err)
    );
  }, [archivedOrder]);

  const loadOrders = () => {
    ACTIVE_ORDER_API.getActiveOrders()
      .then(res => {
        setActiveOrders(res.data);
      })
      .catch(err => console.error(err));
  };

  const removeActive = event => {
    event.preventDefault();
    const { value } = event.target;

    ACTIVE_ORDER_API.getActiveOrder(value)
      .then(res => {
        console.log(res.data);
        setArchivedOrder([res.data]);
      })
      .catch(err => console.error(err));

    ACTIVE_ORDER_API.deleteActiveOrder(value)
      .then(() => loadOrders())
      .catch(err => console.error(err));
  };

  return (
    <Container className='h-100 pt-5'>
      <BohHeader />
      {activeOrders.length > 0 ? (
        activeOrders.map((data, index) => (
          <Row className='py-2 my-2 border bg-dark' key={`table-row-${index + 1}`}>
            <Col
              xs={2}
              className='my-auto text-center'
              key={`table-col-${index + 1}`}
            >
              <span>#{data.tableNumber}</span>
            </Col>
            <Col
              xs={6}
              className='d-flex flex-row my-auto'
              key={`order-col-${index + 1}`}
            >
              <Col key={`order-items-col-${index + 1}`}>
                {data.seatOrders.map((order, index) => (
                  <Row
                    className='d-flex flex-column'
                    key={`order-item-${index + 1}`}
                  >
                    {order.menuItems.map((item, index) => (
                      <Row
                        className='text-center'
                        key={`menu-items-${index + 1}`}
                      >
                        <Col className='text-center my-auto ml-2' xs={1}>
                          {order.seatNumber}
                        </Col>
                        <Col className='text-center my-auto'>
                          {item.itemName}
                        </Col>
                        <Col className='text-center my-auto' xs={2}>
                          {item.itemPrepareTime}
                        </Col>
                      </Row>
                    ))}
                  </Row>
                ))}
              </Col>
            </Col>
            <Col
              xs={2}
              className='text-center my-auto'
              key={`time-col-${index + 1}`}
            >
              {format(Date.parse(data.orderInTime), 'pp')}
            </Col>
            <Col
              xs={2}
              className='text-center my-auto'
              key={`sold-col-${index + 1}`}
            >
              <Button variant='success' value={data._id} onClick={removeActive}>
                Done
              </Button>
            </Col>
          </Row>
        ))
      ) : (
        <Container fluid className='h-100'>
          <Row className='justify-content-center h-100'>
            <h1 className='my-auto'>No Active Orders</h1>
          </Row>
        </Container>
      )}
    </Container>
  );
}

export default Boh;
