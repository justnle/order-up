import React from 'react';
import Form from 'react-bootstrap/Form';
function FormWrapper() {
  return <Form></Form>;
}
function FGroup() {
  return <Form.Group></Form.Group>;
}
function FLabel() {
  return <Form.Label></Form.Label>;
}
function FControl(props) {
  return <Form.Control {...props} />;
}
function FText() {
  return <Form.Text></Form.Text>;
}
export default FControl;
