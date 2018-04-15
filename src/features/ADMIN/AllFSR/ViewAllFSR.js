import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../../api';
import NavBar from './../ui/NavBarAdmin';
import ViewFSRRow from './../ui/FSRViewRow';

const dummy1 = {
  id: '0000000000',
  fname: 'asd',
  mname: 'efg',
  lname: 'qweqwe',
  college: 'CAS',
  dept: 'asdasad',
  approved: 'YES'
};

const dummy2 = {
  id: '0000000001',
  fname: 'asd',
  mname: 'efg',
  lname: 'qweqwe',
  college: 'CAS',
  dept: 'asdasad',
  approved: 'NO'
};

const dummy3 = {
  id: '0000000001',
  fname: 'asd',
  mname: 'efg',
  lname: 'qweqwe',
  college: 'CAS',
  dept: 'asdasad',
  approved: 'NO'
};

const dummy4 = {
  id: '0000000001',
  fname: 'asd',
  mname: 'efg',
  lname: 'qweqwe',
  college: 'CAS',
  dept: 'asdasad',
  approved: 'NO'
};

const dummy5 = {
  id: '0000000001',
  fname: 'asd',
  mname: 'efg',
  lname: 'qweqwe',
  college: 'CAS',
  dept: 'asdasad',
  approved: 'NO'
};

const dummy6 = {
  id: '0000000001',
  fname: 'asd',
  mname: 'efg',
  lname: 'qweqwe',
  college: 'CAS',
  dept: 'asdasad',
  approved: 'NO'
};

const dummy7 = {
  id: '0000000001',
  fname: 'asd',
  mname: 'efg',
  lname: 'qweqwe',
  college: 'CAS',
  dept: 'asdasad',
  approved: 'NO'
};

const dummy8 = {
  id: '0000000001',
  fname: 'asd',
  mname: 'efg',
  lname: 'qweqwe',
  college: 'CAS',
  dept: 'asdasad',
  approved: 'NO'
};

const dummy9 = {
  id: '0000000001',
  fname: 'asd',
  mname: 'efg',
  lname: 'qweqwe',
  college: 'CAS',
  dept: 'asdasad',
  approved: 'NO'
};

const dummy10 = {
  id: '0000000001',
  fname: 'asd',
  mname: 'efg',
  lname: 'qweqwe',
  college: 'CAS',
  dept: 'asdasad',
  approved: 'NO'
};

export default class ViewAllFSR extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [dummy1, dummy2, dummy3, dummy4, dummy5, dummy6, dummy7, dummy8, dummy9, dummy10]
    };
  }

  componentDidMount() {
    // Api.ViewAllFSR().then(result => {
    //   this.setState({ data: result.data.data[0] });
    // });
  }

  render() {
    return (
      <div className="App-header">
        <div>
        <NavBar {...this.props} Label="all" />
        </div>
        <Divider hidden='true'/>
        <Divider hidden='true'/>
        <Divider hidden='true'/>
        <div className="bodydiv">
        <div
          class="ui compact piled very padded container segment"
          color="teal">
          <div class="ui two column grid">
            <h1 class="ui blue header">VIEW ALL FSR</h1>
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
          <div className="scrollTable">
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
                    />
                  );
                })}
            </tbody>
          </table>
          </div>
          <Divider hidden="true" />
          </div>
        </div>
      </div>
    );
  }
}
//=========================
ReactDOM.render(<ViewAllFSR />, document.getElementById('root'));
