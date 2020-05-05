import React, { useEffect, useState } from 'react';
// import { AddButton, SelectButton } from '../../components/Buttons';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import { Container, Col, Row } from 'react-bootstrap';
import MENU_API from '../../utils/menuAPI';
import SeatOrder from '../../components/SeatOrder';
import ModalMenuItem from '../../components/ModalMenuItem';
import MenuItem from '../../components/MenuItem';
import Form from 'react-bootstrap/Form';
import ORDER_API from '../../utils/activeOrderAPI';

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
    ORDER_API.addActiveOrder({
      tableNumber: tableNumber,
      seatOrders: seatOrders.map((seatOrder, index) => ({
        seatNumber: index + 1,
        menuItems: seatOrder.map((orderItem) => ({
          itemName: orderItem.name,
          itemPrepareTime: orderItem.prepareTime,
          itemPrice: orderItem.price,
        })),
      })),
      //   employeeName: 'some name',
    })
      .then((res) => {
        console.log(res.data);
        alert('Order sent to the kitchen');
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      <div>
        <Container className='d-flex mt-5'>
          <Row>
            <Col size='md-4'>
              <Form className='form-inline mb-3'>
                <Form.Group controlId='formTableNumber'>
                  <Form.Label>Table </Form.Label>
                  <Form.Control
                    type='number'
                    placeholder='Enter a number'
                    onChange={(event) => setTableNumber(event.target.value)}
                  />
                </Form.Group>
              </Form>
              <Table striped bordered variant='dark'>
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
            <Col size='md-8'>
              <Row>
                {menuItems.map((menuItem) => (
                  <MenuItem
                    key={menuItem._id}
                    menuItem={menuItem}
                    handleAddToSeatOrder={() =>
                      handleAddToSeatOrder(menuItem._id)
                    }
                    handleShow={() => handleShow(menuItem._id)}
                  />
                ))}
              </Row>
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
