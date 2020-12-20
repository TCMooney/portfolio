import React, { Component } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

import NavContainer from './navigation/NavContainer';
import Home from './pages/Home';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavContainer />
          </div>
          <Route exact path='/' component={Home} />
        </Router>
      </div>
    );
  }
}
