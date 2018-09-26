import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Table, DropdownButton, MenuItem, Button } from 'react-bootstrap';

import { selectCourseToEdit, selectAllProfessors } from 'common/selectors';
import { getAllProfessors } from 'common/actions';

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
  }

  handleChange = (event) => {

    const { name, value } = event.target;

    if (this.props.course[name] >= +value) {

      this.setState({ [name]: +value });
    }
  }

  handleDropdown = (name) => this.setState({ professor: name });

  assign = () => {
    console.log(this.props);
    console.log(this.state);
  }

  render() {

    const { course, professors } = this.props;

    if (!course || !professors) return null;

    const headers = ['Κατηγορία', 'Τμήματα', 'Ώρες'];

    const categories = ['Θεωρία', 'Εργαστήριο', 'Φροντιστήριο'];

    const segments = Object.keys(course).filter((f) => f.endsWith('Segments'));

    const hours = Object.keys(course).filter((f) => f.endsWith('Hours'));

    const menu = [0, 1, 2];

    return (
      <div className="Login">
        <Table>
          <thead>
            <tr>
              {headers.map((header) => (<th key={header}>{header}</th>))}
            </tr>
          </thead>
          <tbody>
            {menu.map((index) => (
              <tr key={index}>
                <td>{categories[index]}</td>
                <td><input onChange={this.handleChange} name={segments[index]} value={this.state[segments[index]]} /></td>
                <td><input onChange={this.handleChange} name={hours[index]} value={this.state[hours[index]]} /></td>
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
            id={0}
          >
            {professors.map((prof) => (<MenuItem onClick={() => this.handleDropdown(prof)} key={prof.name + prof.surname}>{`${prof.name} ${prof.surname}`}</MenuItem>))}
          </DropdownButton>
        </div>
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
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(CoursePage);
