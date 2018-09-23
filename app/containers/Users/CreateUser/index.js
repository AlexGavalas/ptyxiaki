import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { postUser } from 'common/actions';

class CreateUser extends React.Component {

  state = {};

  handleInput = (event) => {

    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit = () => {

    this.props.dispatch(postUser(this.state));

    this.props.history.push('/');
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
