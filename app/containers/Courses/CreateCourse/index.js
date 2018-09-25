import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { setCourse } from 'common/actions';

class CreateCourse extends React.Component {

  state = {};

  handleInput = (event) => {

    const { name, value } = event.target;

    this.setState({ [name]: (name === 'name') ? value : +value });
  }

  handleSubmit = () => {

    this.props.dispatch(setCourse(this.state));

    this.props.history.push('/');
  }

  render() {

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

export default compose(withConnect)(CreateCourse);
