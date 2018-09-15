import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import {
  ListGroup,
  ListGroupItem,
  ButtonToolbar,
  Button,
  Table,
  Modal,
} from 'react-bootstrap';

import Header from '../Header';
import { fetchAllUsers, addUserToEdit } from './actions';
import { makeSelectAllUsers, selectAllUsers } from './selectors';

class editUser extends React.Component {

  static propTypes = {
    users: PropTypes.array,
    dispatch: PropTypes.func,
  }

  state = {
  }

  componentDidMount() {

    this.props.dispatch(fetchAllUsers());
  }

  openModal = (user) => {

    this.props.dispatch(addUserToEdit(user));

    this.props.history.push('/createUser');
  }

  render() {

    const { users } = this.props;

    if (!users) return null;

    const headers = Object.keys(users[0]);

    return (
      <div>
        <Header />

        <Table>
          <thead>
            <tr>
              {headers.map((header) => (<th key={header}>{header}</th>))}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr onClick={() => this.openModal(user)} key={user.username}>
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
)(editUser);
