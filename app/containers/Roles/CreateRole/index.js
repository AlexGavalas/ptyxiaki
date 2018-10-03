import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel, DropdownButton, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { createRole } from 'common/actions';

class CreateRole extends React.Component {

  state = {
    role: ''
  }

  handleInput = (event) => {

    const { value } = event.target;

    this.setState({ role: value });
  }

  handleSubmit = (event) => {

    event.preventDefault();

    this.props.dispatch(createRole(this.state));

    this.props.history.push('/');
  }

  render() {

    return (
      <div>
        <h1>Δημιουργία Νέου Ρόλου</h1>
        <div className="Login">
          <form onChange={this.handleInput}>
            <FormGroup bsSize="large">
              <ControlLabel>Ρόλος</ControlLabel>
              <FormControl
                autoFocus={true}
                value={this.state.role}
              />
            </FormGroup>
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
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

const withConnect = connect(mapDispatchToProps);

export default compose(withConnect)(CreateRole);
