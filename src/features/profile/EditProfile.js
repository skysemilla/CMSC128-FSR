import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';
import GenerateFSR from './../GenerateFSR'
import SendtoAdmin from './../SendtoAdmin'

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
      email: dummySample.email
    };

    this.handleChangeFname=this.handleChangeFname.bind(this);
    this.handleChangeMname=this.handleChangeMname.bind(this);
    this.handleChangeLname=this.handleChangeLname.bind(this);
    this.handleChangeEmpid=this.handleChangeEmpid.bind(this);
    this.handleChangeCollege=this.handleChangeCollege.bind(this);
    this.handleChangeDept=this.handleChangeDept.bind(this);
    this.handleChangeEmptype=this.handleChangeEmptype.bind(this);
    this.handleChangeEmail=this.handleChangeEmail.bind(this);
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

  handleChangeEmail(e) {
    this.setState({email: e.target.value});
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
                type="text"
                placeholder={this.state.empid}
                onChange={this.handleChangeEmpid}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">College</a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                placeholder={this.state.college}
                onChange={this.handleChangeCollege}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Department</a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                placeholder={this.state.dept}
                onChange={this.handleChangeDept}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Employee Type</a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                placeholder={this.state.emptype}
                onChange={this.handleChangeEmptype}
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
//=========================
ReactDOM.render(<EditProfile />, document.getElementById('root'));
