import React from 'react';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './style.css';

function MenuItem(props) {
  return (
    <div className='d-flex text-center bg-dark menuItems'>
      <Card
        id='menuItem'
        value={
          !props.menuItem.value ? props.menuItem.name : props.menuItem.value
        }
        style={{
          width: '8em',
          height: '8em',
          backgroundColor: 'transparent',
          border: 'solid 1px #6c757d',
          borderRadius: '4px',
          textAlign: 'center',
        }}
      >
        <Card.Body>
          <Card.Text>{props.menuItem.name}</Card.Text>
          <Button
            className='mx-1'
            size='sm'
            variant='outline-primary'
            onClick={props.handleAddToSeatOrder}
          >
            Select
          </Button>
          <Button
            className='mx-1'
            size='sm'
            variant='outline-info'
            onClick={props.handleShow}
          >
            View
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MenuItem;
