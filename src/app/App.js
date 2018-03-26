import React, { Component } from 'react';
//import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {css} from './../index.css'


import Login from './../features/auth/Login';
import Signup from './../features/auth/Signup';
import AddTeachingLoad from './../features/teachingload/AddTeachingLoad';
import EditTeachingLoad from './../features/teachingload/EditTeachingLoad';
import AddStudyLoad from './../features/studyload/AddStudyLoad';
import AddPublication from './../features/publications/AddPublication';
import EditStudyLoad from './../features/studyload/EditStudyLoad';
import ViewPublications from './../features/publications/ViewPublications';
import ViewTeachingLoad from './../features/teachingload/ViewTeachingLoad';
import ViewStudyLoad from './../features/studyload/ViewStudyLoad';
import EditPublications from './../features/publications/EditPublications';
import ViewProfessorialChair from './../features/professorialchair/ViewProfessorialChair';
import AddProfessorialChair from './../features/professorialchair/AddProfessorialChair';
import EditProfessorialChair from './../features/professorialchair/EditProfessorialChair';
import AddAdministrativeWork from './../features/adminWork/AddAdministrativeWork';
import EditAdministrativeWork from './../features/adminWork/EditAdministrativeWork';
import ViewAdminWork from './../features/adminWork/ViewAdminWork';
import EditConsultationHours from './../features/consultationhours/EditConsultationHours';
import AddExtension from './../features/extension/AddExtension';
import Profile from './../features/profile/Profile';
import EditProfile from './../features/profile/EditProfile';
import AddProfession from './../features/profession/AddProfession';
import EditProfession from './../features/profession/EditProfession';
import ViewProfession from './../features/profession/ViewProfession';

class App extends Component {
  render() {
    return (
      <div id="main">
        <Router>
          <div id="content-container">
            <Route exact={true} path="/" component={Login}/>
            <Route exact={true} path="/signup" component={Signup}/>
            <Route exact={true} path="/profile" component={Profile}/>
            <Route exact={true} path="/profile/edit" component={EditProfile}/>
            <Route exact={true} path="/teachingload/add" component={AddTeachingLoad}/>
            <Route exact={true} path="/teachingload/edit" component={EditTeachingLoad}/>
            <Route exact={true} path="/studyload/add" component={AddStudyLoad}/>
            <Route exact={true} path="/studyload/edit" component={EditStudyLoad}/>
            <Route exact={true} path="/publications/view" component={ViewPublications}/>
             <Route exact={true} path="/publications/add" component={AddPublication}/>
            <Route exact={true} path="/teachingload/view" component={ViewTeachingLoad}/>
            <Route exact={true} path="/studyload/view" component={ViewStudyLoad}/>
            <Route exact={true} path="/publications/edit" component={EditPublications}/>
            <Route exact={true} path="/professorialchair/view" component={ViewProfessorialChair}/>
            <Route exact={true} path="/professorialchair/add" component={AddProfessorialChair}/>
            <Route exact={true} path="/professorialchair/edit" component={EditProfessorialChair}/>
            <Route exact={true} path="/adminWork/add" component={AddAdministrativeWork}/>
            <Route exact={true} path="/adminWork/view" component={ViewAdminWork}/>
            <Route exact={true} path="/adminWork/edit" component={EditAdministrativeWork}/>
            <Route exact={true} path="/consultationhours/edit" component={EditConsultationHours}/>
            <Route exact={true} path="/extension/add" component={AddExtension}/>
            <Route exact={true} path="/profession/add" component={AddProfession}/>
            <Route exact={true} path="/profession/edit" component={EditProfession}/>
            <Route exact={true} path="/profession/view" component={ViewProfession}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
