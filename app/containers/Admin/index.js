import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

class Panel extends React.Component {

  render() {

    return (
      <div>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large" href="/createCurriculum">Δημιουργία Νέου Προγράμματος Σπουδών</Button>
          <Button bsStyle="primary" bsSize="large" href="/curriculums">Όλα τα Προγράμματα Σπουδών</Button>
          <Button bsStyle="primary" bsSize="large" href="/createCourse">Δημιουργία Νέου Μαθήματος</Button>
          <Button bsStyle="primary" bsSize="large" href="/courses">Όλα τα Μαθήματα</Button>
          <Button bsStyle="primary" bsSize="large" href="/createUser">Δημιουργία Νέου Χρήστη</Button>
          <Button bsStyle="primary" bsSize="large" href="/users">Όλοι οι Χρήστες</Button>
          <Button bsStyle="primary" bsSize="large" href="/curriculums">Ανάθεση Καθηγητή σε Μάθημα</Button>
          <Button bsStyle="primary" bsSize="large" href="/professors">Όλοι οι Καθηγητές</Button>
          <Button bsStyle="primary" bsSize="large" href="/createProfessor">Δημιουργία Καθηγητή</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Panel;
