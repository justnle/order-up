import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function DropDownInput() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Dropdown
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">action 1</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDownInput;
