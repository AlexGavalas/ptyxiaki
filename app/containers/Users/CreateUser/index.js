import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel, DropdownButton, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { postUser } from 'common/actions';

class CreateUser extends React.Component {

  state = {};

  handleInput = (event) => {

    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleDropdown = (role) => this.setState({ role });

  handleSubmit = () => {

    this.props.dispatch(postUser(this.state));

    this.props.history.push('/');
  }

  render() {

    const fields = {
      name: 'Όνομα',
      surname: 'Επώνυμο',
      password: 'Κωδικός',
      username: 'Username',
    };

    const roles = {
      admin: 'Διαχειριστής',
      professor: 'Υπεύθυνος Τομέα',
      secretary: 'Γραμματεία',
    };

    return (
      <div>
        <h1>Δημιουργία Νέου Χρήστη</h1>
        <div className="Login">
          <form onChange={this.handleInput}>
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
            <DropdownButton
              bsSize="large"
              bsStyle="info"
              title={roles[this.state.role] || 'Επιλέξτε ρόλο'}
              noCaret={true}
              id={0}>
                {Object.keys(roles).map((role) => (<MenuItem key={role} onClick={() => this.handleDropdown(role)}>{roles[role]}</MenuItem>))}
            </DropdownButton>
            <br />
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

const withConnect = connect(mapDispatchToProps);

export default compose(withConnect)(CreateUser);
