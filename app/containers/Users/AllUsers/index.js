import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Table } from 'react-bootstrap';

import { getAllUsers, addUserToEdit } from '../actions';
import { selectAllUsers } from '../selectors';

class AllUsers extends React.Component {

  componentDidMount() {

    this.props.dispatch(getAllUsers());
  }

  goToEdit = (user) => {

    this.props.dispatch(addUserToEdit(user));

    this.props.history.push('/editUser');
  }

  render() {

    const { users } = this.props;

    if (!users) return null;

    const headers = ['name', 'surname', 'username', 'role', 'password'];

    return (
      <div>
        <Table>
          <thead>
            <tr>
              {headers.map((header) => (<th key={header}>{header}</th>))}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr onClick={() => this.goToEdit(user)} key={user.username}>
                {headers.map((key, i) => (<td key={i}>{user[key]}</td>))}
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
  users: selectAllUsers,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(AllUsers);
