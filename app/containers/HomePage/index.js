import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Jumbotron, Button } from 'react-bootstrap';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchUserInfo } from './actions';

class HomePage extends React.PureComponent {

  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
    this.props.dispatch(fetchUserInfo());
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="" />
        </Helmet>
        <Jumbotron bsClass="jumbotron-home-page">
          <h1>Hello, world!</h1>
          <p>
            The only thing we have to loose, are our chains.
          </p>
          <p>
            <Button bsStyle="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </article>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func,
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
