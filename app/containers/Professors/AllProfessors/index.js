import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { getAllProfessors, editProfessor } from 'common/actions';
import { selectAllProfessors } from 'common/selectors';

class Professors extends React.Component {

  componentDidMount() {

    this.props.dispatch(getAllProfessors());
  }

  goToEdit = (prof) => {

      this.props.dispatch(editProfessor(prof));

      this.props.history.push('/editProfessor');
  }

  render() {

    const { professors } = this.props;

    if (!professors) return null;

    const headers = ['name', 'surname'];

    return (
      <div>
        <Table>
          <thead>
            <tr>
              {headers.map((header) => (<th key={header}>{header}</th>))}
            </tr>
          </thead>
          <tbody>
            {professors.map((prof) => (
              <tr key={prof.key} onClick={() => this.goToEdit(prof)}>
                <td>{prof.name}</td>
                <td>{prof.surname}</td>
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
  professors: selectAllProfessors,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Professors);
