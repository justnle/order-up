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

// 5. Logout button
// 6. Close button
// 7. Mark order as sold button
// 8. Clock in button
// 9. Clock out button
// 10. Menu Item button
