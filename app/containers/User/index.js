import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Header from '../Header';
import { postUser } from './actions';

class createUser extends React.Component {

  state = {

  }

  handleInput = (event) => {

    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {

    e.preventDefault();

    this.props.dispatch(postUser(this.state));
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
        <Header />
        <h1>Δημιουργία Νέου Χρήστη</h1>
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
              bsSize="large"
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

const withConnect = connect(mapDispatchToProps);

export default compose(
  withConnect,
)(createUser)
