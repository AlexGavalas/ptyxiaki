import React from 'react';

class CreateCourse extends React.Component {

  state = { };

  handleInput = () => {

  }

  handleSubmit = (e) => {

    e.preventDefault();

    console.log(this.state);
  }

  render() {

    return (
      <div>
        <h1>Δημιουργία Νέου Μαθήματος</h1>
        <div className="Login">
          <form onChange={this.handleInput} onSubmit={this.handleSubmit}>

            <FormGroup key={field} bsSize="large">
              <ControlLabel>{fields[field]}</ControlLabel>
              <FormControl
                name={field}
                autoFocus={i === 0}
                value={this.state[field] || ''}
              />
            </FormGroup>

            <Button
              block
              bsSize="large"
              bsStyle="primary"
              type="submit">
                Καταχώρηση
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateCourse;
