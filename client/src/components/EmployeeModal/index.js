import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Modals(props) {
  return (
    <Modal show={props.show} onHide={props.cancel}>

      <Modal.Header closeButton>
        <Modal.Title>Add an employee</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Group>
          <Form.Label>Employee Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name="name"
            onChange={event => props.updateNewEmployee(event)}
          />
          <Form.Text className="text-muted">Required</Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>PIN</Form.Label>
          <Form.Control type="number" placeholder="Enter PIN" name="id"
            onChange={event => props.updateNewEmployee(event)}
          />
          <Form.Text className="text-muted">Require 6 digits</Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Position</Form.Label>
          <Form.Control type="text" placeholder="Enter position" name="position"
            onChange={event => props.updateNewEmployee(event)}
          />
          <Form.Text className="text-muted">Required (e.g. server)</Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Hourly Rate</Form.Label>
          <Form.Control type="number" placeholder="Enter hourly rate" name="rate"
            onChange={event => props.updateNewEmployee(event)}
          />
          <Form.Text className="text-muted">Required (format: 0.00)</Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Permission</Form.Label>
          <Form.Control type="number" placeholder="Set permission level" name="permission"
            onChange={event => props.updateNewEmployee(event)}
          />
          <Form.Text className="text-muted">Required (from 0 to 5)</Form.Text>
        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={props.cancel}>Cancel</Button>
        <Button variant="primary" onClick={event => props.submit(event)}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Modals;
