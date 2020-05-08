import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './style.css';

import { Container, Col, Row } from 'react-bootstrap';
import MENU_API from '../../utils/menuAPI';
import SeatOrder from '../../components/SeatOrder';
import ModalMenuItem from '../../components/ModalMenuItem';
import Form from 'react-bootstrap/Form';
import ORDER_API from '../../utils/activeOrderAPI';
import MenuTabs from '../../components/MenuTabs';

function FOH() {
  const [menuItems, setMenuItems] = useState([]);
  const [modalMenuItemId, setModalMenuItemId] = useState(null);
  const [seatOrders, setSeatOrders] = useState([]);
  const [selectedSeatOrderIndex, setSelectedSeatOrderIndex] = useState(null);
  const [tableNumber, setTableNumber] = useState('');

  const handleClose = () => setModalMenuItemId(null);
  const handleShow = (id) => setModalMenuItemId(id);

  useEffect(() => {
    loadMenu();
  }, []);

  const loadMenu = () => {
    MENU_API.getMenu()
      .then((res) => {
        setMenuItems(res.data);
      })
      .catch((err) => console.error(err));
  };

  function handleAddToSeatOrder(id) {
    if (selectedSeatOrderIndex === null) {
      return;
    }

    const selectedItem = menuItems.find((item) => item._id === id);

    const orderItem = {
      ...selectedItem,
    };

    setSeatOrders(
      seatOrders.map((seatOrder, index) =>
        selectedSeatOrderIndex === index
          ? [...seatOrder, orderItem]
          : [...seatOrder]
      )
    );
  }

  function addSeatOrder() {
    setSeatOrders([...seatOrders, []]);
  }

  function selectSeat(index) {
    setSelectedSeatOrderIndex(index);
  }

  const modalMenuItem = modalMenuItemId
    ? menuItems.find((item) => item._id === modalMenuItemId)
    : null;

  function submitOrder() {
    if (tableNumber) {
      ORDER_API.addActiveOrder({
        orderInTime: Date.now(),
        tableNumber: tableNumber,
        seatOrders: seatOrders.map((seatOrder, index) => ({
          seatNumber: index + 1,
          menuItems: seatOrder.map((orderItem) => ({
            itemName: orderItem.name,
            itemPrepareTime: orderItem.prepareTime,
            itemPrice: orderItem.price
          })),
        })),
        //   employeeName: 'some name',
      })
        .then((res) => {
          console.log(res.data);
          alert('Order sent to the kitchen');
        })
        .catch((err) => console.error(err));
    } else {
      alert(`You must enter a table number to submit order`);
    }
  }

  const clickDeleteBtn = (event) => {
    const selectedIndex = event.target.getAttribute(`data-id`);

    const copyOfSeatOrder = [...seatOrders[selectedSeatOrderIndex]];

    copyOfSeatOrder.splice(selectedIndex, 1);

    setSeatOrders(
      seatOrders.map((seatOrder, index) =>
        selectedSeatOrderIndex === index ? copyOfSeatOrder : [...seatOrder]
      )
    );
  };

  return (
    <>
      <div>
        <Container fluid className='d-flex mt-5'>
          <Row>
            <Col></Col>
            <Col xs={4}>
              <Form className='form-inline mb-3'>
                <Form.Group controlId='formTableNumber'>
                  <Form.Label className='mr-1'>Table #</Form.Label>
                  <Form.Control
                    type='number'
                    placeholder='Enter a number'
                    onChange={(event) => setTableNumber(event.target.value)}
                  />
                  <Button hidden={true}>Remove Item </Button>
                </Form.Group>
              </Form>
              <Table bordered variant='dark'>
                <thead>
                  <tr>
                    <th>Seat #</th>
                    <th>Items</th>
                  </tr>
                </thead>
                <tbody>
                  {seatOrders.map((seatOrder, index) => (
                    <SeatOrder
                      key={'seat-order-' + index}
                      seatOrderNumber={index + 1}
                      seatOrder={seatOrder}
                      isActiveRow={selectedSeatOrderIndex === index}
                      onClick={() => {
                        selectSeat(index);
                      }}
                      clickDeleteBtn={clickDeleteBtn}
                    />
                  ))}
                </tbody>
              </Table>
              <Button variant='primary' onClick={addSeatOrder}>
                Add Seat
              </Button>
              <Button
                variant='danger'
                onClick={() => {
                  submitOrder();
                }}
              >
                Submit Order
              </Button>
            </Col>
            <Col xs={6} className='menu'>
              <MenuTabs
                menuItems={menuItems}
                handleAddToSeatOrder={handleAddToSeatOrder}
                handleShow={handleShow}
              />
            </Col>
          </Row>
          {modalMenuItemId && (
            <ModalMenuItem
              show={modalMenuItemId !== null}
              modalMenuItem={modalMenuItem}
              handleClose={handleClose}
              handleAddToSeatOrder={() => handleAddToSeatOrder(modalMenuItemId)}
            />
          )}
        </Container>
      </div>
    </>
  );
}

export default FOH;
