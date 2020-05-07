import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import './style.css';

export default function NumPad(props) {
  return (
    <ButtonGroup vertical>
      <Form>
        <Form.Group controlId='formPIN'>
          <Form.Control
            autoFocus
            name='pin'
            type='password'
            placeholder='Enter PIN'
            value={props.pin}
            onChange={(e) => props.setPin(e.target.value)}
            onKeyDown={(e) => props.formInput(e)}
          />
        </Form.Group>
      </Form>
      {props.buttons.map((rows, index) => (
        <ButtonGroup key={`button-row-${index}`}>
          {rows.map((button, buttonIndex) => (
            <Button
              variant='outline-secondary'
              key={`button-index-${buttonIndex}`}
              value={!button.value ? button.name : button.value}
              onClick={
                button.value === `del`
                  ? props.delete
                  : button.value === `login`
                  ? props.submit
                  : (e) => props.buttonInput(e)
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
