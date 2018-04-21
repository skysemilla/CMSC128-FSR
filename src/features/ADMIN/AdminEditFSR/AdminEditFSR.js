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
      <div classNameName="App-header">
        <div>
          <NavBar {...this.props} Label="edit" />
          <SideNav {...this.props} subLabel="teachingload" />
        </div>
        <div classNameName="bodydiv">
          <div
            className="ui compact piled very padded container segment"
            color="teal">
            <div className="ui two column grid">
              <h1 className="ui blue header">EDIT FSR</h1>
              <div className="ui right floated search">
                <div className="ui icon input">
                  <input
                    className="prompt"
                    type="text"
                    placeholder="Search Name or EmpID..."
                  />
                  <i className="search icon" />
                </div>
                <div className="results" />
              </div>
            </div>
            <Divider hidden="true" />

            <style>
              {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`}{' '}
            </style>
            <table className="ui celled table">
              <thead>
                <tr>
                  <th className="center aligned"> Employee ID </th>
                  <th className="center aligned"> Full Name </th>
                  <th className="center aligned"> College </th>
                  <th className="center aligned"> Department </th>
                  <th className="center aligned"> Approved? </th>
                  <th className="center aligned"> FSR </th>
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
