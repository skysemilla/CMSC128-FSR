import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../../api';
import NavBar from './../ui/NavBarAdmin';
import SideNav from './../ui/SideNav';
import ViewFSRRow from './../ui/FSRViewRow';

//Dummy data
const dummySample = {
  id: '1',
  fname: 'Jasper',
  mname: '123',
  lname: 'Arquilita',
  college: 'CAS',
  dept: 'ICS',
  approved: 'NO'
};

const dummySample2 = {
  id: '2',
  fname: 'Sky',
  mname: 'ABC',
  lname: 'Semilla',
  college: 'CAS',
  dept: 'ICS',
  approved: 'YES'
};

export default class AdminEditFSR extends Component {
  // this page will open when admin clicked edit icon

  constructor(props) {
    super(props);

    this.state = {
      data: [dummySample, dummySample2]
    };
  }

  render() {
    return (
      <div className="App-header">
        <div>
          <NavBar {...this.props} Label="edit" />
          <SideNav {...this.props} subLabel="teachingload" />
        </div>
        <div className="bodydiv">
          <div
            class="ui compact piled very padded container segment"
            color="teal">
            <div class="ui two column grid">
              <h1 class="ui blue header">EDIT FSR</h1>
              <div class="ui right floated search">
                <div class="ui icon input">
                  <input
                    class="prompt"
                    type="text"
                    placeholder="Search Name or EmpID..."
                  />
                  <i class="search icon" />
                </div>
                <div class="results" />
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
                  <th class="center aligned"> Approved? </th>
                  <th class="center aligned"> FSR </th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map(item => {
                  return (
                    <ViewFSRRow
                      {...this.props}
                      id={item.id}
                      fname={item.fname}
                      mname={item.mname}
                      lname={item.lname}
                      college={item.college}
                      dept={item.dept}
                      approved={item.approved}
                      editURL="../admin/editFSR"
                      label="edit"
                    />
                  );
                })}
              </tbody>
            </table>
            <Divider hidden="true" />
          </div>
        </div>
      </div>
    );
  }
}
