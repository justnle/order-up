import React from 'react';
import Button from 'react-bootstrap/Button';
import './style.css';

function AddButton(props) {
  return (
    <Button variant='outline-success' {...props}>
      Add
    </Button>
  );
}
function FilterButton(props) {
  return (
    <Button variant='outline-info' {...props}>
      Remove Filter
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
function ClockInButton(props) {
  return (
    <Button id='clockInBtn' variant='primary' {...props}>
      Clock In
    </Button>
  );
}
function ClockOutButton(props) {
  return (
    <Button id='clockOutBtn' variant='danger' {...props}>
      Clock Out
    </Button>
  );
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
  MenuItemButton,
  FilterButton
};
