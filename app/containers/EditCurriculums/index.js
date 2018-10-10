import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Table, Button, DropdownButton, MenuItem } from 'react-bootstrap';

import { selectCurriculums } from 'common/selectors';
import { getCurriculums, setCurriculumToEdit } from 'common/actions';

class AllCurriculums extends React.Component {

  state = {
    year: new Date().getFullYear(),
  }

  componentDidMount() {

      this.props.dispatch(getCurriculums());
  }

  goToAssignment = (curriculum) => {

    this.props.dispatch(setCurriculumToEdit(curriculum));

    this.props.history.push('/editCur');
  }

  handleDropdown = (year) => this.setState({ year });

  render() {

    const { curriculums } = this.props;

    if (!curriculums) return null;

    const headers = ['Title', 'Number of Courses', 'Year'];

    const years = curriculums.reduce((acc, val) => !acc.includes(val.year) ? acc.concat(val.year) : [], []).sort();

    return (
      <div className="Login">
        <div>
          <p>Επιλέξτε έτος:</p>
          <DropdownButton
            bsSize="large"
            bsStyle="info"
            title={this.state.year}
            noCaret={true}
            id={0}>
              {years.map((year) => (<MenuItem key={year} onClick={() => this.handleDropdown(year)}>{year}</MenuItem>))}
          </DropdownButton>
        </div>
        <br />
        <Table>
          <thead>
            <tr>
              {headers.map((header) => (<th key={header}>{header}</th>))}
            </tr>
          </thead>
          <tbody>
            {curriculums.filter((f) => f.year === this.state.year).map((cur, i) => (
              <tr onClick={() => this.goToAssignment(cur)} key={i}>
                <td>{cur.title}</td>
                <td>{Object.keys(cur.courses).length}</td>
                <td>{cur.year}</td>
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
  curriculums: selectCurriculums,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(AllCurriculums);
