import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import { setCurriculumName } from 'common/actions';

class CreateCurriculum extends React.Component {

  state = { title: '' };

  handleInput = () => this.setState({ title: this.title.value });

  handleSubmit = (e) => {

    e.preventDefault();

    this.props.dispatch(setCurriculumName(this.state.title));

    this.props.history.push('/courses');
  }

  render() {

    return (
      <div>
        <h1>Δημιουργία Προγράμματος Σπουδών</h1>
        <div className="Login">
          <form onChange = {this.handleInput} onSubmit={this.handleSubmit}>
            <FormGroup bsSize="large">
              <ControlLabel>Τίτλος Προγράμματος</ControlLabel>
              <FormControl
                inputRef={(el) => { this.title = el; }}
                autoFocus
                value={this.state.title}
              />
            </FormGroup>
            <Button
              block
              bsSize="large"
              bsStyle="primary"
              type="submit">
                Επιλογή Μαθημάτων
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({ dispatch });

const withConnect = connect(mapDispatchToProps);

export default compose(withConnect)(CreateCurriculum);
