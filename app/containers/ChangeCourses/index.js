import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Table, Button } from 'react-bootstrap';

import { selectCurToEdit, selectAvailableCourses } from 'common/selectors';
import { getALlExceptTheseCourses, updateCurriculum, setCoursesToName } from 'common/actions';

class ChangeCourses extends React.Component {

  state = { selected: {} };

  componentDidMount() {

      this.props.dispatch(getALlExceptTheseCourses(this.props.curToEdit.courses));
  }

  selectCourse = (id) => {

    const { selected } = this.state;

    selected[id] = selected[id] ? !selected[id] : true;

    this.setState({ selected });
  }

  handleSubmit = (event) => {

    event.preventDefault();

    let newCourses = this.props.availableCourses.registered.filter(f => this.props.curToEdit.courses.includes(f._id)).filter(f => !this.state.selected[f._id]);;

    newCourses = newCourses.concat(this.props.availableCourses.available.filter(f => this.state.selected[f._id]));

    newCourses = newCourses.map((item) => {

        item.id = item.ids ? item.ids[this.props.curToEdit._id] : item.id;

        item.name = item.curriculumNames ? item.curriculumNames[this.props.curToEdit._id] : item.name;

        return item;
    });

    this.props.dispatch(setCoursesToName({ newCourses, curID: this.props.curToEdit._id }));

    this.props.history.push('/editCoursesNameAndCode');
  }

  render() {

    const { curToEdit, availableCourses } = this.props;

    if (!curToEdit || !availableCourses) return null;

    return (
      <div className="Login2">
        <div style={{ float: 'left' }}>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {availableCourses.registered.map((course, i) => (
                <tr key={course._id} onClick={() => this.selectCourse(course._id)} className={this.state.selected[course._id] ? 'selected-red' : ''}>
                  <td>{course.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div style={{ float: 'right' }}>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {availableCourses.available.map((course) => (
                <tr key={course._id} onClick={() => this.selectCourse(course._id)} className={this.state.selected[course._id] ? 'selected-green' : ''}>
                  <td>{course.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button
            block
            onClick={this.handleSubmit}
            bsSize="large"
            bsStyle="primary">
              Επόμενο
          </Button>
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = createStructuredSelector({
  curToEdit: selectCurToEdit,
  availableCourses: selectAvailableCourses,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(ChangeCourses);
