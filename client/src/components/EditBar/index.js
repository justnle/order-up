import React from 'react';
import Button from 'react-bootstrap/Button';

function EditBar(props) {
  return (
    // <ButtonGroup aria-label="edit bar">
    <div>
      <Button
        className='mx-1'
        variant='outline-success'
        onClick={() => props.add()}
      >
        Add
      </Button>
      <Button
        hidden={props.noneSelected}
        className='mx-1'
        variant='outline-warning'
      >
        Edit
      </Button>
      <Button
        hidden={props.noneSelected}
        className='mx-1'
        variant='outline-danger'
        onClick={() => props.delete()}
      >
        Delete
      </Button>
    </div>
    // </ButtonGroup>
  );
}

export default EditBar;
