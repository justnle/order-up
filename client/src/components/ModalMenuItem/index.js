import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModalMenuItem(props) {
  return (
    <Modal
      key={props.modalMenuItem._id}
      show={props.show}
      onHide={props.handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          {props.modalMenuItem.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Description</h4>
        <p>{props.modalMenuItem.description}</p>
        <h4>Pairings</h4>
        <p>{props.modalMenuItem.pairing}</p>
        <h4>Price</h4>
        <p>{props.modalMenuItem.price}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={props.handleClose}>
          Close
        </Button>
        <Button
          variant='primary'
          onClick={props.handleAddToSeatOrder}
        >
          Select
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalMenuItem;
