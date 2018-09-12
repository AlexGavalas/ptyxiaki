import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import Header from '../Header/index';

class CreateCurriculum extends React.Component {

  state = {
    curriculum: '',
    description: '',
  }

  handleInput = () => {
    this.setState({
      curriculum: this.curriculum.value,
      description: this.description.value,
    });
  }

  handleSubmit = (e) => {

    e.preventDefault();

    console.log(this.state);
  }

  render() {

    return (
      <div>
        <Header />
        <h1>Δημιουργία Προγράμματος Σπουδών</h1>
        <div>
          <form onChange = {this.handleInput} onSubmit={this.handleSubmit}>
            <FormGroup bsSize="large">
              <ControlLabel>Όνομα Προγράμματος</ControlLabel>
              <FormControl
                inputRef={(el) => { this.curriculum = el; }}
                autoFocus
                value={this.state.curriculum}
              />
            </FormGroup>
            <FormGroup bsSize="large">
              <ControlLabel>Περιγραφή</ControlLabel>
              <FormControl
                inputRef={(el) => { this.description = el; }}
                value={this.state.description}
              />
            </FormGroup>
            <Button
              href="/createCourse"
              block
              bsSize="large"
              type="submit">
                Επόμενο
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateCurriculum;
