import React from "react";
import Button from "react-bootstrap/Button";

export function AddButton() {
  return <Button variant="success">Add</Button>;
}
export function SubmitButton() {
  return (
    <Button variant="primary" type="Submit">
      Submit
    </Button>
  );
}
export function SelectButton() {
  return <Button variant="success">Select</Button>;
}
export function ViewButton() {
  return <Button variant="info">View</Button>;
}
export function LogoutButton() {
  return <Button variant="danger">Logout</Button>;
}
export function CloseButton() {
  return <Button variant="danger">X</Button>;
}
export function OrderSold() {
  return <Button variant="danger">Mark Order Sold</Button>;
}
export function ClockInButton() {
  return <Button variant="primary">Clock In</Button>;
}
// 8. Clock in button
// 9. Clock out button
// 10. Menu Item button
