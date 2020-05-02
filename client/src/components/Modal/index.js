import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Modals() {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p></p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant='secondary'>Cancel</Button>
        <Button variant='primary'>OK</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default Modals;
