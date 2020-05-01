import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';

export default function NumPad() {
  const [pin, setPin] = useState([]);

  const handleInput = (event) => {
    event.preventDefault();
    const { value } = event.target;

    if (value !== undefined && value !== '[object Object]') {
      setPin([...pin, value]);
    } else {
      handleDelete();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  const handleDelete = () => {
    const pinArr = pin;
    console.log(`current pin: ${pinArr}`);
    if (pinArr.length !== 0) {
      pinArr.splice(-1, 1);
      console.log(`new pin: ${pinArr}`);
      setPin([...pinArr]);
    }
  };

  const buttons = [
    [`1`, `2`, `3`],
    [`4`, `5`, `6`],
    [`7`, `8`, `9`],
    [
      <i className='fas fa-backspace'></i>,
      `0`,
      <i className='fas fa-sign-in-alt'></i>,
    ],
  ];

  return (
    <ButtonGroup vertical>
      <Form>
        <Form.Group controlId='formPIN'>
          <Form.Control
            autoFocus
            name='pin'
            type='password'
            placeholder='Enter PIN'
            onChange={handleInput}
            value={pin.join('')}
          />
        </Form.Group>
      </Form>
      {buttons.map((rows, index) => (
        <ButtonGroup key={`button-row-${index}`}>
          {rows.map((button, buttonIndex) => (
            <Button
              variant='outline-secondary'
              key={`button-index-${buttonIndex}`}
              value={button}
              onClick={handleInput}
            >
              {button}
            </Button>
          ))}
        </ButtonGroup>
      ))}
    </ButtonGroup>
  );
}
