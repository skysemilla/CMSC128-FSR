import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';
import GenerateFSR from './../GenerateFSR'
import SendtoAdmin from './../SendtoAdmin'
import GenericDropdown from './../GenericDropdown';
import DeptDropdown from './DeptDropdown'

const dummySample = {
    fname: 'Jasper',
    mname: '123',
    lname: 'Arquilita',
    empid: '1',
    college: 'CAS',
    dept: 'ICS',
    emptype: 'Assistant Professor',
    emptypeno: '1',
    email: 'jasarqui123@up.edu.ph',
    username: 'JasperJeje',
    password: 'jasper123',
    password2: 'jasper123'
};

const optionsMain = [
  { id: 0, text: 'Assistant Professor' },
  { id: 1, text: 'Associate Professor' },
  { id: 2, text: 'Professor' },
  { id: 3, text: 'Instructor' }
];

const optionsMain2 = [
  { id: 0, text: '1' },
  { id: 1, text: '2' },
  { id: 2, text: '3' },
  { id: 3, text: '4' },
  { id: 4, text: '5' },
  { id: 5, text: '6' },
  { id: 6, text: '7' }
];

const optionsMain3 = [
  { id: 0, text: 'CAFS', Subtype : ["Department A", "Department B", "Department C", "Department D", "Department E"]},
  { id: 1, text: 'CAS', Subtype : ["Institute of Biological Sciences", "Institute of Chemistry", "Institute of Computer Science", "Institute of Mathematical Sciences and Physics", "Institute of Statistics"]},
  { id: 2, text: 'CDC', Subtype : ["Department F", "Department G", "Department H", "Department I", "Department J"] },
  { id: 3, text: 'CEAT', Subtype : ["Department K", "Department L", "Department M", "Department N", "Department O"] },
  { id: 4, text: 'CEM', Subtype : ["Department P", "Department Q", "Department R", "Department S", "Department T"] },
  { id: 5, text: 'CFNR', Subtype : ["Department U", "Department V", "Department W", "Department X", "Department Y"] },
  { id: 6, text: 'CHE', Subtype : ["Department Z", "Department 1", "Department 2", "Department 3", "Department 4"] },
  { id: 7, text: 'CVM', Subtype : ["Department 5", "Department 6", "Department 7", "Department 8", "Department 9"] }
];

export default class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: dummySample.fname,
      mname: dummySample.mname,
      lname: dummySample.lname,
      empid: dummySample.empid,
      college: dummySample.college,
      dept: dummySample.dept,
      emptype: dummySample.emptype,
      emptypeno: dummySample.emptypeno,
      email: dummySample.email,
      username: dummySample.username,
      password: dummySample.password,
      password2: dummySample.password2
    };

    this.handleChangeFname=this.handleChangeFname.bind(this);
    this.handleChangeMname=this.handleChangeMname.bind(this);
    this.handleChangeLname=this.handleChangeLname.bind(this);
    this.handleChangeEmpid=this.handleChangeEmpid.bind(this);
    this.handleChangeCollege=this.handleChangeCollege.bind(this);
    this.handleChangeDept=this.handleChangeDept.bind(this);
    this.handleChangeEmptype=this.handleChangeEmptype.bind(this);
    this.handleChangeEmptypeNo=this.handleChangeEmptypeNo.bind(this);
    this.handleChangeEmail=this.handleChangeEmail.bind(this);
    this.handleChangeUsername=this.handleChangeUsername.bind(this);
    this.handleChangePassword=this.handleChangePassword.bind(this);
    this.handleChangePassword2=this.handleChangePassword2.bind(this);
  }

  handleChangeFname(e) {
    this.setState({fname: e.target.value});
  }

  handleChangeMname(e) {
    this.setState({mname: e.target.value});
  }

  handleChangeLname(e) {
    this.setState({lname: e.target.value});
  }

  handleChangeEmpid(e) {
    this.setState({empid: e.target.value});
  }

  handleChangeCollege(e) {
    this.setState({college: e.target.value});
  }

  handleChangeDept(e) {
    this.setState({dept: e.target.value});
  }

  handleChangeEmptype(e) {
    this.setState({emptype: e.target.value});
  }

  handleChangeEmptypeNo(e) {
    this.setState({emptypeno: e.target.value});
  }

  handleChangeEmail(e) {
    this.setState({email: e.target.value});
  }

  handleChangeUsername(e) {
    this.setState({username: e.target.value});
  }

  handleChangePassword(e) {
    this.setState({password: e.target.value});
  }

  handleChangePassword2(e) {
    this.setState({password2: e.target.value});
  }

  startEdit(e) {
    // e.preventDefault();
    // Api.editProfile({
    //   fname: this.state.fname,
    //   mname: this.state.mname,
    //   lname: this.state.lname,
    //   empid: this.state.empid,
    //   college: this.state.college,
    //   dept: this.state.dept,
    //   emptype: this.state.emptype,
    //   email: this.state.email
    // })
    //   .then(result => {
    //     this.props.history.push('./profile');
    //     alert('Profile successfully added!');
    //   })
    //   .catch(e => alert('Error editing Profile!'));
  }

  render() {
    return (
      <div className="App-header">
        <NavBar {...this.props}  Label="profile" subLabel=""/>
        <div
          class="ui piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 class="ui blue header">
              EDIT PROFILE
            </h2>
          </div>
          <Divider hidden="true" />
          <p>
            <a class="ui small header">First name</a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                placeholder={this.state.fname}
                onChange={this.handleChangeFname}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Middle name</a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                placeholder={this.state.mname}
                onChange={this.handleChangeMname}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Last name</a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                placeholder={this.state.lname}
                onChange={this.handleChangeLname}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Employee ID</a>
            <div class="ui input fluid mini focus">
              <input
                type="number"
                placeholder={this.state.empid}
                onChange={this.handleChangeEmpid}
              />
            </div>
          </p>
          <p>
            <div>
            <div class="flex-container dropDown">
                <label>
                  <span><b>College</b></span>
                </label>
                <GenericDropdown
                  labelProper="Select College"
                  value={this.state.college}
                  handler={this.handleChangeCollege}
                  options={optionsMain3}
                />
            </div>

                <DeptDropdown
                  value = {this.state.dept}
                  handler = {this.handleChangeDept}
                  options = {optionsMain3}
                  college = {this.state.college} />
            </div>
          </p>
          <p>
            <div class="flex-container dropDown">
                <label>
                  <span><b>Employee Type</b></span>
                </label>
                <GenericDropdown
                  labelProper="Select Employee Type"
                  value={this.state.emptype}
                  handler={this.handleChangeEmptype}
                  options={optionsMain}
                />
            </div>
            <div>
                <label>
                  <span><b>Number</b></span>
                </label>
                <GenericDropdown
                  labelProper="Select Employee Type Number"
                  value={this.state.emptypeno}
                  handler={this.handleChangeEmptypeNo}
                  options={optionsMain2}
                />
            </div>
          </p>
          <p>
            <a class="ui small header">Email Address</a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                placeholder={this.state.email}
                onChange={this.handleChangeEmail}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Username</a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                placeholder={this.state.username}
                onChange={this.handleChangeUsername}
              />
            </div>
          </p>

          <p>
            <a class="ui small header">New Password</a>
            <div class="ui input fluid mini focus">
              <input
                type="password"
                onChange={this.handleChangePassword}
              />
            </div>

          </p>
          <p>
            <a class="ui small header">Repeat Password</a>
            <div class="ui input fluid mini focus">
              <input
                type="password"
                onChange={this.handleChangePassword2}
              />
            </div>

          </p>
          <div class="ui center aligned container">
            <button
              class="ui center aligned blue button"
              onClick={this.startEdit}>
              Edit Profile
            </button>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
