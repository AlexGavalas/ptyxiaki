import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Table, Button } from 'react-bootstrap';

import { selectCurriculumToAssign, selectCoursesToAssign } from 'common/selectors';
import { fetchCoursesForOneCurriculum } from 'common/actions';

class CurriculumToAssign extends React.Component {

  componentDidMount() {

    this.props.dispatch(fetchCoursesForOneCurriculum(this.props.curriculum));
  }

  render() {

      const { curriculum, coursesToAssign } = this.props;

      const headers = ['Name'];

      if (!curriculum || !coursesToAssign) return null;

      return (
        <div className="Login">
          <Table>
            <thead>
              <tr>
                {headers.map((header) => (<th key={header}>{header}</th>))}
              </tr>
            </thead>
            <tbody>
              {Object.keys(coursesToAssign).map((id) => (
                <tr key={coursesToAssign[id].maidenName}>
                  <td>{coursesToAssign[id].maidenName}</td>
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
  curriculum: selectCurriculumToAssign,
  coursesToAssign: selectCoursesToAssign,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(CurriculumToAssign);
