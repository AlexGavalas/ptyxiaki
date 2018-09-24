import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Table } from 'react-bootstrap';

import { selectCourseToEdit } from 'common/selectors';

class CoursePage extends React.Component {

  state = {};
  // componentDidMount() {
  //
  //   this.setState(this.props.course);
  // }

  handleChange = (event) => {

    const { name, value } = event.target;

    this.setState({ [name]: +value });
  }

  render() {

    const { course } = this.props;
    console.log(this.state);
    console.log(course);

    if (!course) return null;

    const headers = ['Κατηγορία', 'Τμήματα', 'Ώρες'];

    const categories = ['Θεωρία', 'Εργαστήριο', 'Φροντιστήριο'];

    const segments = Object.keys(course).filter((f) => f.endsWith('Segments'));

    const hours = Object.keys(course).filter((f) => f.endsWith('Hours'));
    const menu = [0,1,2];
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
                <td><input onChange={this.handleChange} name={segments[index]} max={course[segments[index]]} defaultValue={0} /></td>
                <td><input onChange={this.handleChange} name={categories[index]} max={course[categories[index]]} defaultValue={0} /></td>
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
