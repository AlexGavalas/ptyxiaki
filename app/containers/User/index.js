import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { postUser, updateUser, deleteUser, addUserToEdit } from 'common/actions';
import { selectNewUser } from 'common/selectors';

class CreateUser extends React.Component {

  state = {};

  componentDidMount() {

    if (this.props.newUser) {

      const { newUser } = this.props;

      newUser.originalUsername = newUser.username;

      this.setState(newUser);
    }
  }

  handleInput = (event) => {

    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {

    event.preventDefault();

    if (!this.props.newUser) this.props.dispatch(postUser(this.state));

    else {

      this.props.dispatch(updateUser(this.state));

      this.props.dispatch(addUserToEdit(null));
    }

    this.props.history.push('/editUser');
  }

  deleteUser = (e) => {

    e.preventDefault();

    this.props.dispatch(deleteUser(this.state.originalUsername));

    this.props.history.push('/editUser');
  }

  render() {

    const fields = {
      name: 'Όνομα',
      surname: 'Επώνυμο',
      password: 'Κωδικός',
      role: 'Ρόλος',
      username: 'Username',
    };

    return (
      <div>
        <h1>{this.props.newUser ? 'Επεξεργασία Χρήστη' : 'Δημιουργία Νέου Χρήστη'}</h1>
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
            {this.props.newUser &&
              <Button
                block
                bsSize="large"
                bsStyle="danger"
                onClick={this.deleteUser}>
                  Διαγραφή
              </Button>}
            <Button
              block
              bsSize="large"
              bsStyle="primary"
              type="submit">
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
  newUser: selectNewUser
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(CreateUser);
