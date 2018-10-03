import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Table } from 'react-bootstrap';

import { fetchAllRoles, addRoleToEdit } from 'common/actions';
import { selectAllRoles } from 'common/selectors';

class AllRoles extends React.Component {

  componentDidMount() {

    this.props.dispatch(fetchAllRoles());
  }

  goToEdit = (role) => {

    this.props.dispatch(addRoleToEdit(role));

    this.props.history.push('/editRole');
  }

  render() {

    const { roles } = this.props;

    if (!roles) return null;

    return (
      <div className="Login">
        <Table>
          <thead>
            <tr>
              <th>Ρόλος</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr onClick={() => this.goToEdit(role)} key={role._id}>
                <td>{role.role}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = () => createStructuredSelector({
  roles: selectAllRoles
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(AllRoles);
