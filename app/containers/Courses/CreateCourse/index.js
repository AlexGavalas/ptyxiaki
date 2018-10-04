import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button, DropdownButton, MenuItem, Checkbox } from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { setCourse, fetchAllRoles } from 'common/actions';
import { selectAllRoles } from 'common/selectors';

class CreateCourse extends React.Component {

  state = { role: '', provided: true }

  componentDidMount() {

    this.props.dispatch(fetchAllRoles());
  }

  handleInput = (event) => {

    const { name, value } = event.target;

    this.setState({ [name]: (name === 'name') ? value : +value });
  }

  handleDropdown = (role) => this.setState({ role });

  handeCheckbox = () => this.setState({ provided: !this.state.provided });

  handleSubmit = () => {

    this.props.dispatch(setCourse(this.state));

    this.props.history.push('/');
  }

  render () {

    const { roles } = this.props;

    if (!roles) return null;

    const fields = {
      name: 'Τίτλος Μαθήματος',
      theoryHours: 'Ώρες Θεωρίας',
      theorySegments: 'Τμήματα Θεωρίας',
      labHours: 'Ώρες Εργαστηρίου',
      labSegments: 'Τμήματα Εργαστηρίου',
      tutorialHours: 'Ώρες Φροντιστηρίου',
      tutorialSegments: 'Τμήματα Φροντιστηρίου',
      semester: 'Εξάμηνο',
    };

    return (
      <div>
        <h1>Δημιουργία Νέου Μαθήματος</h1>
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
            <p>Επιλέξτε ένα πρωτεύον ρόλο για τις αναθέσεις σε αυτό το μάθημα:</p>
            <DropdownButton
              bsSize="large"
              bsStyle="info"
              title={this.state.role.role || 'Επιλέξτε ρόλο'}
              noCaret={true}
              id={0}>
                {roles.map((role) => (<MenuItem key={role._id} onClick={() => this.handleDropdown(role)}>{role.role}</MenuItem>))}
            </DropdownButton>
            <br />
            <Checkbox onChange={this.handeCheckbox} checked={this.state.provided}>Προσφέρεται το μάθημα φέτος?</Checkbox>
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

export default compose(withConnect)(CreateCourse);
