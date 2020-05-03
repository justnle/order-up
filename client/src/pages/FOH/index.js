import React, { useEffect, useState } from 'react';
// import { AddButton, SelectButton } from '../../components/Buttons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { Container, Col, Row } from 'react-bootstrap';
import API from '../../utils/menuAPI';
// import API2 from '../../utils/activeOrderAPI';

function FOH() {
  const [menuItems, setMenuItems] = useState([]);
  const [show, setShow] = useState(null);
  const [order, setOrder] = useState([]);
  //   const [newOrder]

  const handleClose = () => setShow(false);
  const handleShow = (id) => setShow(id);

  useEffect(() => {
    loadMenu();
  }, []);

  const loadMenu = () => {
    API.getMenu()
      .then((res) => {
        console.log(res.data);
        setMenuItems(res.data);
      })
      .catch((err) => console.error(err));
  };

  function handleAddToOrder(id) {
    const selectedItem = menuItems.find((item) => item._id === id);

    console.log('id: ' + id);
    console.log(menuItems);

    const orderItem = {
      ...selectedItem,
    };

    setOrder([...order, orderItem]);
    //   API2.addActiveOrder()
    // when the menu item is clicked add it to active orders -API post method
  }

  const modalData = show ? menuItems.find((item) => item._id === show) : null;

  console.log(order);
  return (
    <>
      <div>
        <Container className='d-flex justify-content-center mt-5'>
          <Col size='md-8, sm-12'>
            <Row>
              {menuItems.map((item) => (
                <div
                  className='grid-container'
                  key={item._id}
                  style={{
                    display: 'grid',
                  }}
                >
                  <div
                    className='m-1 text-white'
                    value={!item.value ? item.name : item.value}
                    style={{
                      width: '8em',
                      height: '8em',
                      backgroundColor: 'transparent',
                      border: 'solid 1px #6c757d',
                      borderRadius: '4px',
                      textAlign: 'center',
                    }}
                  >
                    {item.name}
                    <div className='d-flex justify-content-center align-content-flex-end mt-3'>
                      <Row>
                        <Button
                          className='mx-1'
                          size='sm'
                          variant='primary'
                          onClick={() => handleAddToOrder(item._id)}
                        >
                          Select
                        </Button>
                        <Button
                          className='mx-1'
                          size='sm'
                          variant='success'
                          onClick={handleShow}
                        >
                          View
                        </Button>
                      </Row>
                    </div>
                  </div>
                </div>
              ))}
            </Row>
          </Col>
          {show && (
            <Modal key={modalData._id} show={show != null} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>
                  {modalData.name}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>Description</h4>
                <p>{modalData.description}</p>
                <h4>Pairings</h4>
                <p>{modalData.pairing}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>
                  Close
                </Button>
                <Button
                  variant='primary'
                  onClick={() => handleAddToOrder(modalData._id)}
                >
                  Select
                </Button>
              </Modal.Footer>
            </Modal>
          )}
        </Container>
      </div>
      <Container>
        <ul className='text-white'>
          {order.map((orderItem) => (
            <li key={orderItem._id}>{orderItem.name}</li>
          ))}
        </ul>
      </Container>
    </>
  );
}

export default FOH;
