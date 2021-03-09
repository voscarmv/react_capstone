import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Cat from './Cat';
import Home from './Home';

const App = () => (
  <Router>
    <Nav />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/cat">
        <Cat />
      </Route>
    </Switch>
  </Router>
);

export default App;
