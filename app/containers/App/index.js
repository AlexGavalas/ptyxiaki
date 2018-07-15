import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import HomePage from 'containers/HomePage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Login from 'containers/Login';

import { fetchUserInfo } from './actions';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchUserInfo());
  }

  render() {
    return (
      <div>
        <Helmet
          titleTemplate="%s - JMCAO"
          defaultTitle="JMCAO"
        />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
};

export default App;
