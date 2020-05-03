import React from 'react';
import Button from 'react-bootstrap/Button';

function EditBar(props) {
  return (
    // <ButtonGroup aria-label="edit bar">
    <div>
      <Button className='mx-1' variant="primary" onClick={() => props.add()}>Add</Button>
      <Button hidden={props.noneSelected} className='mx-1' variant="warning">Edit</Button>
      <Button hidden={props.noneSelected}className='mx-1' variant="danger" onClick={() => props.delete()}>Delete</Button>
    </div>
    // </ButtonGroup>
  );
}

export default EditBar;
