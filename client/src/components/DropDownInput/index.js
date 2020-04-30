import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function DropDownInput(props) {
  return (
    <Dropdown {...props}>
      <Dropdown.Toggle variant="secondary">
        {props.children}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>{props.children}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

DropDownInput.propTypes = {
  children: PropTypes.node
};

export default DropDownInput;
