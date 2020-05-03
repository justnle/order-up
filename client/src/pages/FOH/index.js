import React, { useEffect, useState } from 'react';
// import { AddButton, SelectButton } from '../../components/Buttons';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

import { Container, Col, Row } from 'react-bootstrap';
import API from '../../utils/menuAPI';

function FOH() {
  const [menuItems, setMenuItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const showDescriptionModal = () => setShowModal(true);
  const closeDescriptionModal = () => setShowModal(false);

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

  return (
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
                      <Button className='mx-1' size='sm' variant='primary'>
                        Add
                      </Button>
                      <Button className='mx-1' size='sm' variant='success' onClick={showDescriptionModal} >
                        View
                      </Button>
                    </Row>
                  </div>
                </div>
              </div>
            ))}
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default FOH;
