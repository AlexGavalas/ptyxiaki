import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

class Panel extends React.Component {

  render() {
    return (
      <div>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large" href="/createCurriculum">Δημηιουργία Νέου Προγραμματος Σπουδών</Button>
          <Button bsStyle="primary" bsSize="large" href="/createCourse">Δημηιουργία Νέου Μαθήματος</Button>
          <Button bsStyle="primary" bsSize="large" href="/createUser">Δημηιουργία Νέου Χρήστη</Button>
          <Button bsStyle="primary" bsSize="large" href="/editUser">Επεξεργασία Χρήστη</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Panel;
