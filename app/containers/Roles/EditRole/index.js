import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { updateRole, deleteRole } from 'common/actions';
import { selectRole } from 'common/selectors';

class EditRole extends React.Component {

  state = {
    role: ''
  };

  componentDidMount() {

    this.setState(this.props.roleToEdit);
  }

  handleInput = (event) => {

    const { value } = event.target;

    this.setState({ role: value });
  }

  handleSubmit = () => {

    this.props.dispatch(updateRole(this.state));

    this.props.history.push('/');
  }

  deleteRole = () => {

    this.props.dispatch(deleteRole(this.state));

    this.props.history.push('/');
  }

  render() {

    return (
      <div>
        <h1>Επεξεργασία Ρόλου</h1>
        <div className="Login">
          <form onChange={this.handleInput}>
            <FormGroup bsSize="large">
              <ControlLabel>Ρόλος</ControlLabel>
              <FormControl
                autoFocus={true}
                value={this.state.role}
              />
            </FormGroup>
            <Button
              block
              bsSize="large"
              bsStyle="danger"
              onClick={this.deleteRole}>
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
  roleToEdit: selectRole
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(EditRole);
