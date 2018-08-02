import React from 'react';
import { Switch, Route } from 'react-router'
import Login from '../Login/index.js'
import Header from '../Header/index.js'

class Home extends React.Component {
  render() {
    return(
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Header} />
      </Switch>
    );
  }
}

export default Home;
