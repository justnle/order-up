import React from 'react';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './style.css';

function MenuItem(props) {
  return (
    <div
      className='grid-container'
    >
      <div
        className='m-1 text-white'
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
        {props.menuItem.name}
        <div className='d-flex justify-content-center align-content-flex-end mt-3'>
          <Row>
            <Button
              className='mx-1'
              size='sm'
              variant='primary'
              onClick={props.handleAddToSeatOrder}
            >
              Select
            </Button>
            <Button
              className='mx-1'
              size='sm'
              variant='success'
              onClick={props.handleShow}
            >
              View
            </Button>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
