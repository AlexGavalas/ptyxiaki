import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { getAllProfessors } from 'common/actions';
import { selectAllProfessors } from 'common/selectors';

class Professors extends React.Component {

  componentDidMount() {

    this.props.dispatch(getAllProfessors());
  }

  render() {

    const { professors } = this.props;

    if (!professors) return null;

    return (
      <h1>hello</h1>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = () => createStructuredSelector({
  professors: selectAllProfessors,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Professors);
