import React, { Component } from 'react';
//import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Login from './../features/auth/Login';
import Signup from './../features/auth/Signup';
import AddTeachingLoad from './../features/teachingload/AddTeachingLoad';
import EditTeachingLoad from './../features/teachingload/EditTeachingLoad';
import AddStudyLoad from './../features/studyload/AddStudyLoad';
import EditStudyLoad from './../features/studyload/EditStudyLoad';

class App extends Component {
  render() {
    return (
      <div id="main">
        <Router>
          <div id="content-container">
            <Route exact={true} path="/" component={Login}/>
            <Route exact={true} path="/signup" component={Signup}/>
            <Route exact={true} path="/teachingload/add" component={AddTeachingLoad}/>
            <Route exact={true} path="/teachingload/edit" component={EditTeachingLoad}/>
            <Route exact={true} path="/studyload/add" component={AddStudyLoad}/>
            <Route exact={true} path="/studyload/edit" component={EditStudyLoad}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;