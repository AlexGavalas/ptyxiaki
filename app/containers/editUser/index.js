import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import { fetchAllUsers, addUserToEdit } from 'common/actions';
import { selectAllUsers } from 'common/selectors';

class EditUser extends React.Component {

  static propTypes = {
    users: PropTypes.array,
    dispatch: PropTypes.func,
  }

  componentDidMount() {

    this.props.dispatch(fetchAllUsers());
  }

  goToEdit = (user) => {

    this.props.dispatch(addUserToEdit(user));

    this.props.history.push('/createUser');
  }

  render() {

    const { users } = this.props;

    if (!users) return null;

    const headers = Object.keys(users[0]);

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
                {Object.keys(user).map((key, i) => (<td key={user.username + i}>{user[key]}</td>))}
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

export default compose(
  withConnect,
)(EditUser);
