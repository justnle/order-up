import React from 'react';
import { Row, Col } from 'react-bootstrap';

function BohBody(props) {
  return (
    <div>
      {props.data.map((stuff) => (
        <Row>{stuff}</Row>
      ))}
    </div>
  );
}

export default BohBody;
