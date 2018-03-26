import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';

const dummySample = {
    fname: 'Jasper',
    mname: '123',
    lname: 'Arquilita',
    empid: '1',
    college: 'CAS',
    dept: 'ICS',
    emptype: 'Faculty',
    email: 'jasarqui123@up.edu.ph'
};

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state={
      data: dummySample
    }

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.history.push('./profile/edit');
  }

  render() {
    return (
       <div classname="App-header">
            <NavBar {...this.props} Label="profile" subLabel=""/>
        <div
          class="ui piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 class="ui blue header">
              PROFILE
            </h2>
          </div>
          <div class="ui large list">
              <div>
              <div class="item">
                  <div class="content">
                    <b><i class="user circle icon"></i>Full Name: </b>
                    {this.state.data.fname} {this.state.data.mname} {this.state.data.lname}
                  </div>
              </div>
              <div class="item">
                  <div class="content">
                    <b><i class="id card outline icon"></i>Employee ID: </b>
                    {this.state.data.empid}
                  </div>
              </div>
              <div class="item">
                  <div class="content">
                    <b><i class="building icon"></i>Department and College: </b>
                    {this.state.data.dept}, {this.state.data.college}
                  </div>
              </div>
              <div class="item">
                  <div class="content">
                    <b><i class="users icon"></i>Employee Type: </b>
                    {this.state.data.emptype}
                  </div>
              </div>
              <div class="item">
                  <div class="content">
                    <b><i class="mail outline icon"></i>Email Address: </b>
                    {this.state.data.email}
                  </div>
              </div>
              </div>
          </div>
          <Divider hidden="true" />
          <Divider hidden="true" />
          <div>
            <h2 class="ui blue header">
              FSRs
            </h2>
            <table class="ui blue table">
              <thead>
                <tr><th>School Year</th>
                <th>Semester</th>
                <th>View/Edit</th>
              </tr></thead><tbody>
                <tr>
                  <td>2017-2018</td>
                  <td>2nd</td>
                  <td><button class="ui blue button">Edit</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
//=========================
ReactDOM.render(<Profile />, document.getElementById('root'));
