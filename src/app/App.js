import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import Login from '../features/auth/Login.js';

export default class App extends Component {
  constructor() {
    super();

    // this.state() = {
    /*states here*/
    // };
    /*binds here*/
  }
  /*handlers here*/
  render() {
    return (
      <Router>
        <div>
          <Login />
          {/*page contents here*/}
        </div>
      </Router>
    );
  }
}
