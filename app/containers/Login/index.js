import React from 'react';
import { Form, FormGroup, Col, FormControl, Checkbox, ControlLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import axios from 'axios';

import { sendLoginInfo } from 'containers/HomePage/actions';

class Login extends React.Component {

  state = {
    username: '',
    password: '',
  }

  handleUsername = () => {
    this.setState({
      ...this.state,
      username: this.username.value,
    });
  }

  handlePass = () => {
    this.setState({
      ...this.state,
      password: this.password.value,
    });
  }

  login = async (event) => {
    event.preventDefault();
    // this.props.dispatch(sendLoginInfo(this.state));

    const resp = await axios.post('/sendLoginInfo', this.state);

    console.log(resp);
  }

  render() {
    return (
      <Form horizontal >
        <FormGroup controlId="formHorizontalEmail" onChange={this.handleUsername}>
          <Col componentClass={ControlLabel} sm={2}>
            Username
          </Col>
          <Col sm={5}>
            <FormControl type="text" placeholder="Username" inputRef={(input) => { this.username = input; }} />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword" onChange={this.handlePass}>
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={5}>
            <FormControl type="password" placeholder="Password" inputRef={(input) => { this.password = input; }} />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Checkbox>Remember me</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit" onClick={this.login} >Sign in</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

const withConnect = connect(mapDispatchToProps);

export default compose(withConnect)(Login);
