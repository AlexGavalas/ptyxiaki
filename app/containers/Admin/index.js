import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  ButtonToolbar,
  Button
} from 'react-bootstrap';

import Header from '../Header/index';

class Panel extends React.Component {

  render() {
    return (
      <div>
        <Header />

        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large" href="/createCurriculum">Δημηιουργία Νέου Προγραμματος Σπουδών</Button>
          <Button bsStyle="primary" bsSize="large" href="/createCourse">Δημηιουργία Νέου Μαθήματος</Button>
        </ButtonToolbar>

        <br />

        <ListGroup>
          <ListGroupItem>12</ListGroupItem>
          <ListGroupItem>12</ListGroupItem>
          <ListGroupItem>12</ListGroupItem>
          <ListGroupItem>12</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

export default Panel;
