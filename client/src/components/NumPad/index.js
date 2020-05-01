import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';

export default function NumPad() {
  const [pin, setPin] = useState([]);

  const handleBtnInput = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setPin([...pin, value]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleDelete = () => {
    const pinArr = pin;
    if (pinArr.length !== 0) {
      pinArr.splice(-1, 1);
      setPin([...pinArr]);
    }
  };

  const buttons = [
    [
      {
        name: `1`,
        value: `1`,
      },
      {
        name: `2`,
        value: `2`,
      },
      {
        name: `3`,
        value: `3`,
      },
    ],
    [
      {
        name: `4`,
        value: `4`,
      },
      {
        name: `5`,
        value: `5`,
      },
      {
        name: `6`,
        value: `6`,
      },
    ],
    [
      {
        name: `7`,
        value: `7`,
      },
      {
        name: `8`,
        value: `8`,
      },
      {
        name: `9`,
        value: `9`,
      },
    ],
    [
      {
        name: <i className='fas fa-backspace del-btn'></i>,
        value: `del`,
      },
      {
        name: `0`,
        value: `0`,
      },
      {
        name: <i className='fas fa-sign-in-alt submit-btn'></i>,
        value: `login`,
      },
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
            value={pin.join('')}
            onChange={handleSubmit}
          />
        </Form.Group>
      </Form>
      {buttons.map((rows, index) => (
        <ButtonGroup key={`button-row-${index}`}>
          {rows.map((button, buttonIndex) => (
            <Button
              variant='outline-secondary'
              key={`button-index-${buttonIndex}`}
              value={button.value}
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
  );
}
