import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './Login.css';
import './bootstrap.min.css';
import Image from 'react-image';
import logo from './logo.png';


class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  handleInput = () => {
    this.setState( { username: this.username.value });
    this.setState( { password: this.password.value });
  //  console.log(this.state.password);
  //  console.log(this.state.username);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    window.location = '/home';
  }

  render() {
    return (
      <div>
        <Image src={logo} style = {{position: 'relative', left: 200 }} />

        <div className="Login">

          <form onChange = {this.handleInput} onSubmit={this.handleSubmit}>
            <FormGroup controlId="username" bsSize="large">
              <ControlLabel>Username</ControlLabel>
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
              type="submit"
            >
              Login
            </Button>
          </form>
          </div>
        </div>


    );
  }
}

export default Login;
