import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel, DropdownButton, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { updateUser, deleteUser } from '../actions';
import { selectNewUser } from '../selectors';

import { fetchAllRoles } from 'common/actions';
import { selectAllRoles } from 'common/selectors';

class EditUser extends React.Component {

  state = { role: '' };

  componentDidMount() {

    this.setState(this.props.newUser);

    this.props.dispatch(fetchAllRoles());
  }

  handleInput = (event) => {

    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleDropdown = (role) => this.setState({ role });

  handleSubmit = () => {

    this.props.dispatch(updateUser(this.state));

    this.props.history.push('/');
  }

  deleteUser = () => {

    this.props.dispatch(deleteUser(this.props.newUser));

    this.props.history.push('/');
  }

  render() {

    const { roles } = this.props;

    if (!roles) return null;

    const fields = {
      name: 'Όνομα',
      surname: 'Επώνυμο',
      password: 'Κωδικός',
      username: 'Username',
    };

    return (
      <div>
        <h1>Επεξεργασία Χρήστη</h1>
        <div className="Login">
          <form onChange={this.handleInput}>
            {Object.keys(fields).map((field, i) => (
              <FormGroup key={field} bsSize="large">
                <ControlLabel>{fields[field]}</ControlLabel>
                <FormControl
                  name={field}
                  autoFocus={i === 0}
                  defaultValue={this.state[field] || ''}
                />
              </FormGroup>
            ))}
            <DropdownButton
              bsSize="large"
              bsStyle="info"
              title={this.state.role.role || 'Επιλέξτε ρόλο'}
              noCaret={true}
              id={0}>
                {roles.map((role) => (<MenuItem key={role._id} onClick={() => this.handleDropdown(role)}>{role.role}</MenuItem>))}
            </DropdownButton>
            <br />
            <Button
              block
              bsSize="large"
              bsStyle="danger"
              onClick={this.deleteUser}>
                Διαγραφή
            </Button>
            <Button
              block
              onClick={this.handleSubmit}
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
  newUser: selectNewUser,
  roles: selectAllRoles
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(EditUser);
