import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function FOHOrderDisplay(props) {
  return (
    <Container>
      <Card {...props}>
        <Card.Body>
          <Card.Title>{props.children}</Card.Title>
          <Card.Text>
            {props.children}
          </Card.Text>
        </Card.Body>
      </Card>

    </Container>
  );
}

FOHOrderDisplay.propTypes = {
  children: PropTypes.node
};

export default FOHOrderDisplay;
