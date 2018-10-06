import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectUser } from 'common/selectors';

class Panel extends React.Component {

  render() {

    const { user } = this.props;

    if (!user) return null;

    const adminButtons = (
      <ButtonToolbar>
        <Button bsStyle="primary" bsSize="large" href="/users">Όλοι οι Χρήστες</Button>
        <Button bsStyle="primary" bsSize="large" href="/createUser">Δημιουργία Νέου Χρήστη</Button>
        <Button bsStyle="primary" bsSize="large" href="/professors">Όλοι οι Διδάσκοντες</Button>
        <Button bsStyle="primary" bsSize="large" href="/createProfessor">Δημιουργία Διδάσκοντα</Button>
        <Button bsStyle="primary" bsSize="large" href="/createRole">Δημιουργία Ρόλου</Button>
        <Button bsStyle="primary" bsSize="large" href="/allRoles">Όλοι οι Ρόλοι</Button>
      </ButtonToolbar>
    );

    const secretaryButtons = (
      <ButtonToolbar>
        <Button bsStyle="primary" bsSize="large" href="/curriculums">Όλα τα Προγράμματα Σπουδών</Button>
        <Button bsStyle="primary" bsSize="large" href="/curriculums">Ανάθεση Διδάσκοντα σε Μάθημα</Button>
        <Button bsStyle="primary" bsSize="large" href="/createCurriculum">Δημιουργία Νέου Προγράμματος Σπουδών</Button>
        <Button bsStyle="primary" bsSize="large" href="/courses">Όλα τα Μαθήματα</Button>
        <Button bsStyle="primary" bsSize="large" href="/createCourse">Δημιουργία Νέου Μαθήματος</Button>
      </ButtonToolbar>
    );

    const professorButtons = (
      <ButtonToolbar>
        <Button bsStyle="primary" bsSize="large" href="/curriculums">Ανάθεση Διδάσκοντα σε Μάθημα</Button>
      </ButtonToolbar>
    );

    const buttonsMenu = {
      'Admin': adminButtons,
      'Γραμματεία': secretaryButtons,
    };

    return (
      <div>
        {buttonsMenu[user.role.role] || professorButtons}
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = createStructuredSelector({
  user: selectUser
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Panel);
