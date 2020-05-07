import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css';

function MenuItem(props) {
  return (
    <div className= 'd-flex text-center'>
      <Card
        id='menuItem'
        value={
          !props.menuItem.value ? props.menuItem.name : props.menuItem.value
        }
        style={{ width: '11rem' }}
        bg='transparent'
        className='text-white'
      >
        <Card.Body>
          <Card.Text>{props.menuItem.name}</Card.Text>
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
        </Card.Body>
      </Card>

      {/* <div
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
      </div> */}
    </div>
  );
}

export default MenuItem;
