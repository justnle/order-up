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

import Decrement_API from '../../utils/inventoryAPI';


function FOH() {
  const [menuItems, setMenuItems] = useState([]);
  const [modalMenuItemId, setModalMenuItemId] = useState(null);
  const [seatOrders, setSeatOrders] = useState([]);
  const [selectedSeatOrderIndex, setSelectedSeatOrderIndex] = useState(null);
  const [tableNumber, setTableNumber] = useState('');
  const [ingredients, setIngredients] = useState([]);
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
      alert(`You must click on a seat number before adding items to the order`);
      return;
    }
    const selectedItem = menuItems.find((item) => item._id === id);
    const orderItem = {
      ...selectedItem
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
  function setDecrement(id) {
    const item = menuItems.find((item) => item._id === id);
    if (item === undefined) {
      return;
    } else {
      const itemIngredients = [];
      const ing = item.ingredients;
      for (let i = 0; i < ing.length; ++i) {
        itemIngredients.push(ing[i].productName);
      }
      setIngredients([...ingredients, itemIngredients]);
    }
  }
  function decrementInventory() {
    console.log(`Submitting order`);
    const flatIng = Object.values(ingredients).flat();
    console.log(flatIng);
    Decrement_API.updateManyInventoryQuantity({
      productName: flatIng
    })
      .then((res) => {
        console.log(`${res.status}`);
        console.log(`Affected records: ${res.data.n}`);
      })
      .catch((err) => console.error(err));
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
        <Container fluid className='mt-5'>
          <Row>
            <Col></Col>
            <Col md={4}>
              <Form className='form-inline mb-3'>
                <Form.Group controlId='formTableNumber'>
                  <Form.Label className='mr-1'>Table #</Form.Label>
                  <Form.Control
                    type='number'
                    placeholder='Enter a number'
                    onChange={(event) => setTableNumber(event.target.value)}
                  />
                  {/* <Button hidden={true}>Remove Item </Button> */}
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
              <Button 
                id='FOHbtn'
                variant='outline-success'
                onClick={() => {
                  addSeatOrder();
                  setDecrement();
                }}
              >
                Add Seat
              </Button>
              <Button
                variant='outline-danger'
                onClick={() => {
                  submitOrder();
                  decrementInventory();
                }}
              >
                Submit Order
              </Button>
            </Col>

            <Col md={6} className='menuContainer'>
              <MenuTabs
                menuItems={menuItems}
                handleAddToSeatOrderAndDecrement={(id) => {
                      handleAddToSeatOrder(id);
                      setDecrement(id);}}
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
