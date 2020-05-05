import React, { useEffect, useState } from 'react';
// import { AddButton, SelectButton } from '../../components/Buttons';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import { Container, Col, Row } from 'react-bootstrap';
import API from '../../utils/menuAPI';
import SeatOrder from '../../components/SeatOrder';
import ModalMenuItem from '../../components/ModalMenuItem';
import MenuItem from '../../components/MenuItem';
import Form from 'react-bootstrap/Form';
// import API2 from '../../utils/activeOrderAPI';

function FOH() {
  const [menuItems, setMenuItems] = useState([]);
  const [modalMenuItemId, setModalMenuItemId] = useState(null);
  const [seatOrders, setSeatOrders] = useState([]);
  const [selectedSeatOrder, setSelectedSeatOrder] = useState(null);

  const handleClose = () => setModalMenuItemId(null);
  const handleShow = (id) => setModalMenuItemId(id);

  useEffect(() => {
    loadMenu();
  }, []);

  const loadMenu = () => {
    API.getMenu()
      .then((res) => {
        setMenuItems(res.data);
      })
      .catch((err) => console.error(err));
  };

  function handleAddToSeatOrder(id) {
    if (selectedSeatOrder === null) {
      return;
    }

    const selectedItem = menuItems.find((item) => item._id === id);

    const orderItem = {
      ...selectedItem,
    };

    setSeatOrders(
      seatOrders.map((seatOrder, index) =>
        selectedSeatOrder === index ? [...seatOrder, orderItem] : [...seatOrder]
      )
    );
  }

  function addSeatOrder() {
    setSeatOrders([...seatOrders, []]);
  }

  function selectSeat(index) {
    setSelectedSeatOrder(index);
  }

  const modalMenuItem = modalMenuItemId
    ? menuItems.find((item) => item._id === modalMenuItemId)
    : null;

 function getTableNumber() {

 }

  return (
    <>
      <div>
        <Container className='d-flex mt-5'>
          <Row>
            <Col size='md-4'>
              <Form className='form-inline mb-3'>
                <Form.Group controlId='formTableNumber'>
                  <Form.Label>Table # </Form.Label>
                  <Form.Control
                    type='number'
                    placeholder='1'
                  />
                </Form.Group>
                <Button variant='primary' type='submit'>
                  Submit
                </Button>
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
                      seatOrderNumberIndex={index}
                      seatOrder={seatOrder}
                      isActiveRow={selectedSeatOrder === index}
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
