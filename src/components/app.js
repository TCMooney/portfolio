import React, { Component } from 'react';
import {
  Swtich,
  Route,
  Router
} from 'react-router-dom';
import history from '../history';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <h2>React Bootstrap</h2>
      </div>
    );
  }
}
