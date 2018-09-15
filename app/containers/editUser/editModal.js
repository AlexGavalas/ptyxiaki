import React from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class EditModal extends React.Component {

  static propTypes = {
    show: PropTypes.bool,
  }

  render() {
    console.log(this.props);
    return (
      <Modal fade={true} show={this.props.show}>
        <Modal.Header closeButton>
          <Modal.Title>User goes here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>HELLO THERE</h1>
        </Modal.Body>
      </Modal>
    );
  }
}
