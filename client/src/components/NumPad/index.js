import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import { Redirect } from 'react-router-dom';
import { ClockInButton, ClockOutButton } from '../../components/Buttons';
import EMPLOYEE_API from '../../utils/employeesAPI';
import TIME_API from '../../utils/timeAPI';
import Modal from 'react-bootstrap/Modal';

export default function NumPad() {
  const [pin, setPin] = useState(``);
  const [loggedIn, setLoggedIn] = useState({
    success: false,
    permission: 0
  });
  const [showModal, setShowModal] = useState(false);
  const [modalBody, setModalBody] = useState(``);

  const handleBtnInput = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setPin(pin + value);
  };

  const handleSubmit = () => {
    if (pin.length > 0) {
      EMPLOYEE_API.getEmployees()
        .then((res) => {
          const search = res.data.find(({ id }) => id === pin);

          if (search !== undefined) {
            clockIn(search);
          } else {
            errorPin();
          }
        })
        .catch((err) => console.error(err));
    }
  };

  const clockIn = (employee) => {
    TIME_API.getTimeClock()
      .then((res) => {
        const searchId = res.data.find(({ employeeId }) => employeeId === pin);

        switch (searchId.onTheClock) {
          case false:
          case null:
            TIME_API.updateEmployeeTimeClock(searchId._id, {
              clockIn: Date.now(),
              onTheClock: true
            });
            setLoggedIn({ success: true, permission: employee.permission });
            break;
          case true:
            setPin(``);
            setModalBody(`${searchId.employeeName} is already clocked in`);
            setShowModal(true);
            break;
          default:
            console.error(`Error, shouldn't be logging!`);
        }
      })
      .catch((err) => console.error(err));
  };

  const clockOut = () => {
    TIME_API.getTimeClock()
      .then((res) => {
        const searchId = res.data.find(({ employeeId }) => employeeId === pin);

        TIME_API.updateEmployeeTimeClock(searchId._id, {
          clockOut: Date.now(),
          onTheClock: false
        }).catch((err) => console.error(err));
        setLoggedIn({ success: false, permission: 0 });
        setPin(``);
        setModalBody(`${searchId.employeeName} successfully clocked out`);
        setShowModal(true);
      })
      .catch((err) => console.error(err));
  };

  const handleDelete = () => {
    if (pin.length > 0) {
      let pinStr = pin;
      pinStr = pinStr.slice(0, -1);
      setPin(pinStr);
    }
  };

  const errorPin = () => {
    setPin(``);
    setModalBody(`Incorrect PIN`);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  function permissionPages(checkPermission) {
    switch (checkPermission) {
      case 1:
        return <Redirect to='/manager' />;
      case 2:
        return <Redirect to='/foh' />;
      case 3:
        return <Redirect to='/boh' />;
      default:
        return <Redirect to='/home' />;
    }
  }

  const buttons = [
    [
      {
        name: `1`
      },
      {
        name: `2`
      },
      {
        name: `3`
      }
    ],
    [
      {
        name: `4`
      },
      {
        name: `5`
      },
      {
        name: `6`
      }
    ],
    [
      {
        name: `7`
      },
      {
        name: `8`
      },
      {
        name: `9`
      }
    ],
    [
      {
        name: <i className='fas fa-backspace del-btn'></i>,
        value: `del`
      },
      {
        name: `0`
      },
      {
        name: <i className='fas fa-sign-in-alt submit-btn'></i>,
        value: `login`
      }
    ]
  ];

  return (
    <>
      {loggedIn.success ? permissionPages(loggedIn.permission) : null}
      <Row>
        <Col className='py-3'>
          <ButtonGroup vertical>
            <Form>
              <Form.Group controlId='formPIN'>
                <Form.Control
                  autoFocus
                  name='pin'
                  type='password'
                  placeholder='Enter PIN'
                  value={pin}
                  onChange={(e) => {
                    setPin(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleSubmit();
                    }
                  }}
                />
              </Form.Group>
            </Form>
            {buttons.map((rows, index) => (
              <ButtonGroup key={`button-row-${index}`}>
                {rows.map((button, buttonIndex) => (
                  <Button
                    variant='outline-secondary'
                    key={`button-index-${buttonIndex}`}
                    value={!button.value ? button.name : button.value}
                    onClick={
                      button.value === `del`
                        ? handleDelete
                        : button.value === `login`
                        ? handleSubmit
                        : handleBtnInput
                    }
                  >
                    {button.name}
                  </Button>
                ))}
              </ButtonGroup>
            ))}
          </ButtonGroup>
        </Col>
      </Row>
      <Row className='justify-content-around'>
        <Col>
          <ClockInButton className='mx-1' onClick={handleSubmit} />
          <ClockOutButton className='mx-1' onClick={clockOut} />
        </Col>
      </Row>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalBody}</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
