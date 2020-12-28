import React, { Component } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import { PortfolioProvider } from './contexts/PortfolioContext';

import NavContainer from './navigation/NavContainer';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Icons from './helpers/Icons';

export default class App extends Component {
  constructor() {
    super();

    Icons();
  }

  render() {
    return (
      <AuthProvider>
        <PortfolioProvider>
          <div className='app'>
            <Router>
              <div>
                <NavContainer />
              </div>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/auth' component={Auth} />
              </Switch>
            </Router>
          </div>
        </PortfolioProvider>
      </AuthProvider>
    );
  }
}
