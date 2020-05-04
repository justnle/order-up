import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function InputModal(props) {
  return (
    <Modal show={props.show} onHide={props.cancel}>

      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
          props.inputs.map(input => {
            return (
              <Form.Group key={input.name}>
                <Form.Label>{input.label}</Form.Label>
                <Form.Control type={input.type} placeholder={input.placeholder} name={input.name} value={props.value ? props.value[input.name] : ``}
                  onChange={event => input.onChange(event)}
                />
                <Form.Text className="text-muted">{input.text}</Form.Text>
              </Form.Group>
            )
          })
        }
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => props.cancel()}>Cancel</Button>
      <Button variant="primary" onClick={event => props.submit(event)}>{props.submitButtonLabel}</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default InputModal;
