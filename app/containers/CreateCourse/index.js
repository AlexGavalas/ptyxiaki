import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { setCourse } from 'common/actions';
import { selectCourseToEdit } from 'common/selectors';

class CreateCourse extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func,
    courseToEdit: PropTypes.object,
  };

  state = {};

  componentDidMount() {

    if (this.props.courseToEdit) {

      this.setState(this.props.courseToEdit);
    }
  }

  handleInput = (event) => {

    const { name, value } = event.target;

    this.setState({ [name]: (name === 'name') ? value : +value });
  }

  handleSubmit = (e) => {

    e.preventDefault();

    this.props.dispatch(setCourse(this.state));

    this.props.history.push('/');
  }

  render() {

    const fields = {
      name: 'Τίτλος Μαθήματος',
      theoryHours: 'Ώρες Θεωρίας',
      theroySegments: 'Τμήματα Θεωρίας',
      labHours: 'Ώρες Εργαστηρίου',
      labSegments: 'Τμήματα Εργαστηρίου',
      tutorialHours: 'Ώρες Φροντιστηρίου',
      tutorialSegments: 'Τμήματα Φροντιστηρίου',
      semester: 'Εξάμηνο',
    };

    return (
      <div>
        <h1>{this.props.courseToEdit ? 'Επεξεργασία Μαθήματος' : 'Δημιουργία Νέου Μαθήματος'}</h1>
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

const mapStateToProps = () => createStructuredSelector({
  courseToEdit: selectCourseToEdit,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(CreateCourse);
