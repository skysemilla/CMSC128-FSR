import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../../api';
import NavBar from './../ui/NavBarAdmin'
import ViewFacultyRow from './../ui/FacultyViewRow';

//Dummy data
const dummySample = {
  id: '1',
  fname: 'Jasper',
  mname: '123',
  lname: 'Arquilita',
  college: 'CAS',
  dept: 'ICS',
  disabled: 'YES'
};

const dummySample2 = {
  id: '2',
  fname: 'Sky',
  mname: 'ABC',
  lname: 'Semilla',
  college: 'CAS',
  dept: 'ICS',
  disabled: 'NO'
};

export default class ViewApprovedFSR extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // data : []
      data: [dummySample, dummySample2] //dummmy data
    };
  }

  // componentDidMount(){
  //   e.preventDefault();
  //   Api.ViewAllFaculty({
  //   })
  //     .then(result => {
  //       this.setState({ data: result});
  //     })
  //     .catch(e => alert('Error loading All Faculty!!'));
  // }

  render() {
    return (
      <div className="App-header">
        <NavBar {...this.props} Label="faculty"/>

        <div class="ui compact piled very padded container segment" color="teal">
          <div class="ui two column grid">
            <h1 class="ui blue header">
              VIEW ALL FACULTY
            </h1>
            <div class="ui right floated search">
              <div class="ui icon input">
                <input class="prompt" type="text" placeholder="Search Name or EmpID..."/>
                <i class="search icon"></i>
              </div>
              <div class="results"></div>
            </div>
          </div>
          <Divider hidden="true" />

          <style>
            {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`}{' '}
          </style>
          <table class="ui celled table">
            <thead>
              <tr>
                <th class="center aligned"> Employee ID </th>
                <th class="center aligned"> Full Name </th>
                <th class="center aligned"> College </th>
                <th class="center aligned"> Department </th>
                <th class="center aligned"> Disable </th>
              </tr>
            </thead>
            <tbody>
                {this.state.data.map(item => {
                return (
                  <ViewFacultyRow {...this.props}
                      id= {item.id}
                      fname= {item.fname}
                      mname= {item.mname}
                      lname= {item.lname}
                      college= {item.college}
                      dept= {item.dept}
                      disabled= {item.disabled}
                      editURL = "../admin/editFSR"
                  />
                );
                })}
            </tbody>
          </table>
          <Divider hidden="true" />
        </div>
      </div>
    );
  }
}
//=========================
ReactDOM.render(<ViewApprovedFSR/>, document.getElementById('root'));
