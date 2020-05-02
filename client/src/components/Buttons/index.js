import React from 'react';
import Button from 'react-bootstrap/Button';

function AddButton(props) {
  return (
    <Button variant='outline-success' {...props}>
      Add
    </Button>
  );
}
function SubmitButton(props) {
  return (
    <Button variant='outline-info' type='Submit' {...props}>
      Submit
    </Button>
  );
}
function SelectButton() {
  return <Button variant='success'>Select</Button>;
}
function ViewButton(props) {
  return (
    <Button variant='outline-info' {...props}>
      View
    </Button>
  );
}
function LogoutButton() {
  return <Button variant='danger'>Logout</Button>;
}
function CloseButton(props) {
  return (
    <Button variant='outline-danger' {...props}>
      X
    </Button>
  );
}
function OrderSoldButton() {
  return <Button variant='danger'>Mark Order Sold</Button>;
}
function ClockInButton() {
  return <Button variant='primary'>Clock In</Button>;
}
function ClockOutButton() {
  return <Button variant='danger'>Clock Out</Button>;
}
function MenuItemButton({ children }) {
  return <Button variant='dark'>{children}</Button>;
}
export {
  AddButton,
  SubmitButton,
  ViewButton,
  LogoutButton,
  CloseButton,
  OrderSoldButton,
  ClockInButton,
  ClockOutButton,
  MenuItemButton
};
