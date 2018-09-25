import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Table } from 'react-bootstrap';

import { selectCourseToEdit } from 'common/selectors';

class CoursePage extends React.Component {

  state = {
    labHours: 0,
    theoryHours: 0,
    tutorialHours: 0,
    labSegments: 0,
    theorySegments: 0,
    tutorialSegments: 0,
  };

  handleChange = (event) => {

    const { name, value } = event.target;

    if (this.props.course[name] >= +value) {

      this.setState({ [name]: +value });
    }
  }

  render() {

    const { course } = this.props;

    if (!course) return null;

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
                <td><input onChange={this.handleChange} name={segments[index]} defaultValue={this.state[segments[index]]} /></td>
                <td><input onChange={this.handleChange} name={hours[index]} defaultValue={this.state[hours[index]]} /></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = () => createStructuredSelector({
    course: selectCourseToEdit,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(CoursePage);
