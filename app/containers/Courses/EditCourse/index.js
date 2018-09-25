import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { updateCourse, deleteCourse } from 'common/actions';
import { selectCourseToEdit } from 'common/selectors';

class EditCourse extends React.Component {

  state = {};

  componentDidMount() {

    this.setState(this.props.courseToEdit);
  }

  handleInput = (event) => {

    const { name, value } = event.target;

    this.setState({ [name]: (name === 'name') ? value : +value });
  }

  removeCourse = () => {

    this.props.dispatch(deleteCourse(this.state));

    this.props.history.push('/');
  }

  handleSubmit = () => {

    this.props.dispatch(updateCourse(this.state));

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
        <h1>Επεξεργασία Μαθήματος</h1>
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
              onClick={this.removeCourse}
              bsSize="large"
              bsStyle="danger">
                Διαγραφή
            </Button>
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
  courseToEdit: selectCourseToEdit,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(EditCourse);
