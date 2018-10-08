import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Table, Button } from 'react-bootstrap';

import { selectCurriculums } from 'common/selectors';
import { getCurriculums, setCurriculumToEdit } from 'common/actions';

class AllCurriculums extends React.Component {

  componentDidMount() {

      this.props.dispatch(getCurriculums());
  }

  goToAssignment = (curriculum) => {

    this.props.dispatch(setCurriculumToEdit(curriculum));

    this.props.history.push('/editCur');
  }

  render() {

    const { curriculums } = this.props;

    if (!curriculums) return null;

    const headers = ['Title', 'Number of Courses'];

    return (
      <div className="Login">
        <Table>
          <thead>
            <tr>
              {headers.map((header) => (<th key={header}>{header}</th>))}
            </tr>
          </thead>
          <tbody>
            {curriculums.map((cur, i) => (
              <tr onClick={() => this.goToAssignment(cur)} key={i}>
                <td>{cur.title}</td>
                <td>{Object.keys(cur.courses).length}</td>
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
