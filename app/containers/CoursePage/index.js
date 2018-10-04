import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Table, DropdownButton, MenuItem, Button, Glyphicon } from 'react-bootstrap';

import { selectCourseToEdit, selectAllProfessors, selectUser } from 'common/selectors';
import { getAllProfessors, setProfessorToCourse, removeProfFromCourse } from 'common/actions';

const pick = (object, fields) => fields.reduce((acc, val) => (acc[val] = object[val], acc), {});

class CoursePage extends React.Component {

  state = {
    labHours: 0,
    theoryHours: 0,
    tutorialHours: 0,
    labSegments: 0,
    theorySegments: 0,
    tutorialSegments: 0,
    professor: { name: 'Επιλέξτε Διδάσκοντα', surname: '' }
  };

  componentDidMount() {

    this.props.dispatch(getAllProfessors());

    const keys = ['labHours', 'theoryHours', 'tutorialHours', 'labSegments', 'theorySegments', 'tutorialSegments'];

    const remaining = pick(this.props.course, keys);

    const hours = this.props.course.hours || {};

    Object.keys(hours).forEach((assigned) => {

        const thisHours = pick(hours[assigned], keys);

        Object.keys(thisHours).forEach((hour) => {

          remaining[hour] -= thisHours[hour];
        });
    });

    this.setState({ courseId: this.props.course._id, remaining });
  }

  handleChange = (event) => {

    if (this.props.user.role.role !== 'Γραμματεία' && this.props.user.role.role !== this.props.course.role.role) return;

    const { name, value } = event.target;

    if (this.props.course[name] >= +value) {

      this.setState({ [name]: +value });
    }
  }

  removeProf = (prof) => {

    if (this.props.user.role.role !== 'Γραμματεία' && this.props.user.role.role !== this.props.course.role.role) return;

    this.props.dispatch(removeProfFromCourse(prof));

    this.props.history.push('/curriculum');
  }

  handleDropdown = (professor) => {

    if (this.props.user.role.role !== 'Γραμματεία' && this.props.user.role.role !== this.props.course.role.role) return;

    this.setState({ professor });
  }

  assign = () => {

    if (this.props.user.role.role !== 'Γραμματεία' && this.props.user.role.role !== this.props.course.role.role) return;

    delete this.state.remaining;

    this.props.dispatch(setProfessorToCourse(this.state));

    this.props.history.push('/curriculum');
  }

  render() {

    const { course, professors } = this.props;

    const { remaining } = this.state;

    if (!course || !professors || !remaining) return null;

    const headers = ['Κατηγορία', 'Τμήματα', 'Απομένουν', 'Σύνολο', 'Ώρες', 'Απομένουν', 'Σύνολο'];

    const categories = ['Θεωρία', 'Εργαστήριο', 'Φροντιστήριο'];

    const segments = Object.keys(course).filter((f) => f.endsWith('Segments'));

    const hours = Object.keys(course).filter((f) => f.endsWith('Hours'));

    const menu = [0, 1, 2];

    const headers2 = ['Θεωρία', 'Εργαστήριο', 'Φροντιστήριο'];

    const subheaders = ['Διδάσκοντας', 'Ώρες', 'Τμήματα', 'Ώρες', 'Τμήματα', 'Ώρες', 'Τμήματα', ''];

    const hours2 = ['theoryHours', 'theorySegments', 'labHours', 'labSegments', 'tutorialHours', 'tutorialSegments'];

    return (
      <div className="Login">
        <Table>
          <thead>
            <tr>
              {headers.map((header, i) => (<th key={i}>{header}</th>))}
            </tr>
          </thead>
          <tbody>
            {menu.map((index) => (
              <tr key={index}>
                <td>{categories[index]}</td>
                <td><input onChange={this.handleChange} name={segments[index]} value={this.state[segments[index]]} /></td>
                <td>{remaining[segments[index]]}</td>
                <td>{course[segments[index]]}</td>
                <td><input onChange={this.handleChange} name={hours[index]} value={this.state[hours[index]]} /></td>
                <td>{remaining[hours[index]]}</td>
                <td>{course[hours[index]]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="Login">
          <DropdownButton
            bsSize="large"
            bsStyle="info"
            title={`${this.state.professor.name} ${this.state.professor.surname}`}
            noCaret={true}
            id={0}>
              {professors.map((prof) => (<MenuItem onClick={() => this.handleDropdown(prof)} key={prof._id}>{`${prof.name} ${prof.surname}`}</MenuItem>))}
          </DropdownButton>
        </div>
        {course.hours && Object.keys(course.hours).length &&
          <Table>
            <thead>
              <tr>
                <th></th>
                {headers2.map((header, i) => (<th key={i} colSpan={2}>{header}</th>))}
              </tr>
              <tr>
                {subheaders.map((h, i) => (<th key={i}>{h}</th>))}
              </tr>
            </thead>
            <tbody>
              {Object.keys(course.hours).map((key, i) => (
                <tr key={i}>
                  <td>{`${course.hours[key].professor.name} ${course.hours[key].professor.surname}`}</td>
                  {hours2.map((hour, i) => (<td key={i}>{course.hours[key][hour]}</td>))}
                  <td onClick={() => this.removeProf(course.hours[key])}><Glyphicon glyph="glyphicon glyphicon-remove"/></td>
                </tr>
              ))}
            </tbody>
          </Table>
        }
        <br />
        <Button
          block
          bsSize="large"
          onClick={this.assign}
          bsStyle="primary">
            Καταχώρηση
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = () => createStructuredSelector({
    course: selectCourseToEdit,
    professors: selectAllProfessors,
    user: selectUser,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(CoursePage);
