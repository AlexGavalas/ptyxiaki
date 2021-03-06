import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Image from 'react-image';
import { connect } from 'react-redux';
import { compose } from 'redux';

import 'styles/Login.css';
import logo from 'images/logo.png';

import { authenticateUser } from 'common/actions';

class Login extends React.Component {

  state = {
    username: '',
    password: ''
  }

  handleInput = () => this.setState({ username: this.username.value, password: this.password.value });

  handleSubmit = (event) => {

    event.preventDefault();

    this.props.dispatch(authenticateUser(this.state));
  }

  render() {

    return (
      <div>
        <Image src={logo} style = {{ position: 'relative', left: 200 }} />
        <div className="Login">
          <form onChange = {this.handleInput} onSubmit={this.handleSubmit}>
            <FormGroup controlId="username" bsSize="large">
              <ControlLabel>
                Username
              </ControlLabel>
              <FormControl
                inputRef={(username) => { this.username = username; }}
                autoFocus
                type="text"
                value={this.state.username}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                inputRef={(pass) => { this.password = pass; }}
                value={this.state.password}
                type="password"
              />
            </FormGroup>
            <Button
              block
              bsSize="large"
              type="submit">
                Login
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({ dispatch });

const withConnect = connect(mapDispatchToProps);

export default compose(withConnect)(Login);
