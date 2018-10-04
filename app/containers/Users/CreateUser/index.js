import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel, DropdownButton, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { createUser } from '../actions';
import { fetchAllRoles } from 'common/actions';
import { selectAllRoles } from 'common/selectors';

class CreateUser extends React.Component {

  state = { role: '' }

  componentDidMount() {

    this.props.dispatch(fetchAllRoles());
  }

  handleInput = (event) => {

    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleDropdown = (role) => this.setState({ role });

  handleSubmit = () => {

    this.props.dispatch(createUser(this.state));

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
              title={this.state.role || 'Επιλέξτε ρόλο'}
              noCaret={true}
              id={0}>
                {roles.map((role) => (<MenuItem key={role._id} onClick={() => this.handleDropdown(role)}>{role.role}</MenuItem>))}
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

const mapStateToProps = () => createStructuredSelector({
  roles: selectAllRoles,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(CreateUser);
