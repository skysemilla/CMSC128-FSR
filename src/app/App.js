import React, { Component } from 'react';
//import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Login from './../features/auth/Login';
import AddTeachingLoad from './../features/teachingload/AddTeachingLoad';
import AddStudyLoad from './../features/studyload/AddStudyLoad';

class App extends Component {
  render() {
    return (
      <div id="main">
        <Router>
          <div id="content-container">
            <Route exact={true} path="/" component={Login}/>
            <Route exact={true} path="/teachingload/add" component={AddTeachingLoad}/>
            <Route exact={true} path="/studyload/add" component={AddStudyLoad}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;