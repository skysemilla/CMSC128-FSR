import React, { Component } from 'react';
//import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {css} from './../index.css'

import Login from './../features/auth/Login';
import Signup from './../features/auth/Signup';
import EditProfile from './../features/profile/EditProfile';
import Profile from './../features/profile/Profile';

import AddTeachingLoad from './../features/teachingload/AddTeachingLoad';
import EditTeachingLoad from './../features/teachingload/EditTeachingLoad';
import ViewTeachingLoad from './../features/teachingload/ViewTeachingLoad';

import AddStudyLoad from './../features/studyload/AddStudyLoad';
import EditInfo from './../features/studyload/EditInfo';
import EditStudyLoad from './../features/studyload/EditStudyLoad';
import ViewStudyLoad from './../features/studyload/ViewStudyLoad';

import AddPublication from './../features/publications/AddPublication';
import ViewPublications from './../features/publications/ViewPublications';
import EditPublications from './../features/publications/EditPublications';

import ViewProfessorialChair from './../features/professorialchair/ViewProfessorialChair';
import EditProfessorialChair from './../features/professorialchair/EditProfessorialChair';

import AddAdministrativeWork from './../features/adminWork/AddAdministrativeWork';
import EditAdministrativeWork from './../features/adminWork/EditAdministrativeWork';
import ViewAdminWork from './../features/adminWork/ViewAdminWork';

import EditConsultationHours from './../features/consultationhours/EditConsultationHours';
import AddConsultationHours from './../features/consultationhours/AddConsultationHours';
import ViewConsultationHours from './../features/consultationhours/ViewConsultationHours';

import AddExtension from './../features/extension/AddExtension';
import EditExtension from './../features/extension/EditExtension';
import ViewExtension from './../features/extension/ViewExtension';

import AddProfession from './../features/profession/AddProfession';
import EditProfession from './../features/profession/EditProfession';
import ViewProfession from './../features/profession/ViewProfession';

import RedirectToTeachingLoad from './../features/ADMIN/teachingload/RedirectToTeachingLoad';

import ViewAllFSR from './../features/ADMIN/AllFSR/ViewAllFSR';
import ViewApprovedFSR from './../features/ADMIN/ApprovedFSR/ViewApprovedFSR';
import ViewPendingFSR from './../features/ADMIN/PendingFSR/ViewPendingFSR';
import ViewAllFaculty from './../features/ADMIN/AllFaculty/ViewAllFaculty';

import AdminAddTeachingLoad from './../features/ADMIN/teachingload/AddTeachingLoad';
import AdminEditTeachingLoad from './../features/ADMIN/teachingload/EditTeachingLoad';
import AdminViewTeachingLoad from './../features/ADMIN/teachingload/ViewTeachingLoad';

import AdminAddPublications from './../features/ADMIN/publications/AddPublication';
import AdminEditPublications from './../features/ADMIN/publications/EditPublications';
import AdminViewPublications from './../features/ADMIN/publications/ViewPublications';

import AdminAddStudyLoad from './../features/ADMIN/studyload/AddStudyLoad';
import AdminEditStudyLoad from './../features/ADMIN/studyload/EditStudyLoad';
import AdminViewStudyLoad from './../features/ADMIN/studyload/ViewStudyLoad';

import AdminAddExtension from './../features/ADMIN/extension/AddExtension';
import AdminEditExtension from './../features/ADMIN/extension/EditExtension';
import AdminViewExtension from './../features/ADMIN/extension/ViewExtension';

import AdminAddConsultationHours from './../features/ADMIN/consultationhours/AddConsultationHours';
import AdminEditConsultationHours from './../features/ADMIN/consultationhours/EditConsultationHours';
// import AdminView from './../features/ADMIN/consultationhours/View';

import AdminAddProfession from './../features/ADMIN/profession/AddProfession';
import AdminEditProfession from './../features/ADMIN/profession/EditProfession';
import AdminViewProfession from './../features/ADMIN/profession/ViewProfession';

import AdminAddProfessorialChair from './../features/ADMIN/professorialchair/AddProfessorialChair';
import AdminEditProfessorialChair from './../features/ADMIN/professorialchair/EditProfessorialChair';
import AdminViewProfessorialChair from './../features/ADMIN/professorialchair/ViewProfessorialChair';

import AdminAddAdministrativeWork from './../features/ADMIN/adminWork/AddAdministrativeWork';
import AdminEditAdministrativeWork from './../features/ADMIN/adminWork/EditAdministrativeWork';
import AdminViewAdministrativeWork from './../features/ADMIN/adminWork/ViewAdministrativeWork';

import ViewSubjects from './../features/subject/ViewSubjects';
import AddSubjects from './../features/subject/AddSubjects';
import EditSubjects from './../features/subject/EditSubjects';

import BeingApproved from './../features/ui/beingApproved';

class App extends Component {
  render() {
    return (
      <div id="main">
        <Router>
          <div id="content-container">
            <Route exact={true} path="/" component={Login}/>
            <Route exact={true} path="/signup" component={Signup}/>
            <Route exact={true} path="/beingApproved" component={BeingApproved}/>

            <Route exact={true} path="/profile" component={Profile}/>
            <Route exact={true} path="/profile/edit" component={EditProfile}/>

            <Route exact={true} path="/teachingload/add" component={AddTeachingLoad}/>
            <Route exact={true} path="/teachingload/edit" component={EditTeachingLoad}/>
            <Route exact={true} path="/teachingload/view" component={ViewTeachingLoad}/>

            <Route exact={true} path="/studyload/add" component={AddStudyLoad}/>
            <Route exact={true} path="/studyload/edit" component={EditStudyLoad}/>
            <Route exact={true} path="/studyload/view" component={ViewStudyLoad}/>
            <Route exact={true} path="/studyload/editInfo" component={EditInfo}/>

            <Route exact={true} path="/publications/view" component={ViewPublications}/>
             <Route exact={true} path="/publications/add" component={AddPublication}/>
            <Route exact={true} path="/publications/edit" component={EditPublications}/>

            <Route exact={true} path="/professorialchair/view" component={ViewProfessorialChair}/>
            <Route exact={true} path="/professorialchair/edit" component={EditProfessorialChair}/>

            <Route exact={true} path="/adminWork/add" component={AddAdministrativeWork}/>
            <Route exact={true} path="/adminWork/view" component={ViewAdminWork}/>
            <Route exact={true} path="/adminWork/edit" component={EditAdministrativeWork}/>

            <Route exact={true} path="/consultationhours/edit" component={EditConsultationHours}/>
            <Route exact={true} path="/consultationhours/add" component={AddConsultationHours}/>
            <Route exact={true} path="/consultationhours/view" component={ViewConsultationHours}/>

            <Route exact={true} path="/extension/view" component={ViewExtension}/>
            <Route exact={true} path="/extension/add" component={AddExtension}/>
            <Route exact={true} path="/extension/edit" component={EditExtension}/>
            
            <Route exact={true} path="/profession/add" component={AddProfession}/>
            <Route exact={true} path="/profession/edit" component={EditProfession}/>
            <Route exact={true} path="/profession/view" component={ViewProfession}/>

            <Route exact={true} path="/subjects/view" component={ViewSubjects}/>
            <Route exact={true} path="/subjects/add" component={AddSubjects}/>
            <Route exact={true} path="/subjects/edit" component={EditSubjects}/>
      
            <Route exact={true} path="/admin/viewAllFSR" component={ViewAllFSR}/>
            <Route exact={true} path="/admin/viewApprovedFSR" component={ViewApprovedFSR}/>
            <Route exact={true} path="/admin/viewPendingFSR" component={ViewPendingFSR}/>
            <Route exact={true} path="/admin/ViewAllFaculty" component={ViewAllFaculty}/>
            
            <Route exact={true} path="/admin/editFSR/teachingload/view" component={AdminViewTeachingLoad}/>
            <Route exact={true} path="/admin/editFSR/teachingload/add" component={AdminAddTeachingLoad}/>
            <Route exact={true} path="/admin/editFSR/teachingload/edit" component={AdminEditTeachingLoad}/>

            <Route exact={true} path="/admin/editFSR/publications/add" component={AdminAddPublications}/>
            <Route exact={true} path="/admin/editFSR/publications/edit" component={AdminEditPublications}/>
            <Route exact={true} path="/admin/editFSR/publications/view" component={AdminViewPublications}/>

            <Route exact={true} path="/admin/editFSR/studyload/add" component={AdminAddStudyLoad}/>
            <Route exact={true} path="/admin/editFSR/studyload/edit" component={AdminEditStudyLoad}/>
            <Route exact={true} path="/admin/editFSR/studyload/view" component={AdminViewStudyLoad}/>

            <Route exact={true} path="/admin/editFSR/extension/add" component={AdminAddExtension}/>
            <Route exact={true} path="/admin/editFSR/extension/edit" component={AdminEditExtension}/>
            <Route exact={true} path="/admin/editFSR/extension/view" component={AdminViewExtension}/>

            <Route exact={true} path="/admin/editFSR/consultation/add" component={AdminAddConsultationHours}/>
            <Route exact={true} path="/admin/editFSR/consultation/edit" component={AdminEditConsultationHours}/>
            
            <Route exact={true} path="/admin/editFSR/profession/add" component={AdminAddProfession}/>
            <Route exact={true} path="/admin/editFSR/profession/edit" component={AdminEditProfession}/>
            <Route exact={true} path="/admin/editFSR/profession/view" component={AdminViewProfession}/>

            <Route exact={true} path="/admin/editFSR/profchair/add" component={AdminAddProfessorialChair}/>
            <Route exact={true} path="/admin/editFSR/profchair/edit" component={AdminEditProfessorialChair}/>
            <Route exact={true} path="/admin/editFSR/profchair/view" component={AdminViewProfessorialChair}/>

            <Route exact={true} path="/admin/editFSR/adminWork/add" component={AdminAddAdministrativeWork}/>
            <Route exact={true} path="/admin/editFSR/adminWork/edit" component={AdminEditAdministrativeWork}/>
            <Route exact={true} path="/admin/editFSR/adminWork/view" component={AdminViewAdministrativeWork}/>

          </div>
        </Router>
      </div>
    )
  }
}

export default App;
