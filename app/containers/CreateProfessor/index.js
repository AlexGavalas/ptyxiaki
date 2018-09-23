import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { createProfessor } from 'common/actions';

class CreateProfessor extends React.Component {

  state = {};

  handleInput = (event) => {

    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {

    event.preventDefault();

    const { name, surname } = this.state;

    const toSend = { name, surname, key: name + surname };

    this.props.dispatch(createProfessor(toSend));

    this.props.history.push('/');
  }

  render() {

    const fields = {
      name: 'Όνομα',
      surname: 'Επώνυμο'
    };

    return (
      <div>
        <h1>Δημιουργία Καθηγητή</h1>
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

const withConnect = connect(mapDispatchToProps);

export default compose(withConnect)(CreateProfessor);
