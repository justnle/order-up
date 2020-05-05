import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import PropTypes from 'prop-types';

function DropDownInput(props) {
  return (
    <Dropdown {...props}>
      <Dropdown.Toggle variant='outline-info'>{props.children}</Dropdown.Toggle>
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
