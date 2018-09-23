import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { updateProfessor, deleteProfessor } from 'common/actions';
import { selectProfessorToEdit } from 'common/selectors';

class EditProfessor extends React.Component {

  state = {};

  componentDidMount() {

    this.setState(this.props.professorToEdit);
  }

  handleInput = (event) => {

    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  deleteProfessor = () => {

    this.props.dispatch(deleteProfessor(this.state));

    this.props.history.push('/');
  }

  handleSubmit = () => {

    this.props.dispatch(updateProfessor(this.state));

    this.props.history.push('/');
  }

  render() {

    const { professorToEdit } = this.props;

    if (!professorToEdit) return null;

    const fields = {
      name: 'Όνομα',
      surname: 'Επώνυμο'
    };

    return (
      <div>
        <h1>Επεξεργασία Καθηγητή</h1>
        <div className="Login">
          <form onChange={this.handleInput} onSubmit={this.handleSubmit}>
            {Object.keys(fields).map((field, i) => (
              <FormGroup key={field} bsSize="large">
                <ControlLabel>{fields[field]}</ControlLabel>
                <FormControl
                  name={field}
                  autoFocus={i === 0}
                  value={this.state[field] || ''}
                />
              </FormGroup>
            ))}
            <Button
              block
              onClick={this.deleteProfessor}
              bsSize="large"
              bsStyle="danger">
                Διαγραφή
            </Button>
            <Button
              block
              onClick={this.handleSubmit}
              bsSize="large"
              bsStyle="primary">
                Καταχώρηση
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = () => createStructuredSelector({
  professorToEdit: selectProfessorToEdit,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(EditProfessor);
