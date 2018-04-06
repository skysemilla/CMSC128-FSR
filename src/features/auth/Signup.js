import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GenericDropdown from './../GenericDropdown'
import {
  Form,
  Button,
  Container,
  Tab,
  Segment,
  Image,
  Label,
  Icon,
  Divider,
  Grid,
  Menu
} from 'semantic-ui-react';
import * as Api from '../../api';

const optionsMain = [ {id : 0, text : 'Assistant Professor'},
                      {id : 1, text : 'Associate Professor'},
                      {id : 2, text : 'Professor'},
                      {id : 3, text : 'Instructor'}]

const optionsMain2 = [ {id : 0, text : '1'},
                      {id : 1, text : '2'},
                      {id : 2, text : '3'},
                      {id : 3, text : '4'},
                      {id : 4, text : '5'},
                      {id : 5, text : '6'},
                      {id : 6, text : '7'}]

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      fname: '',
      mname: '',
      lname: '',
      empid: '',
      college: '',
      dept: '',
      emptype: '',
      emptypeno: '',
      email: '',
      fulltime: 0
    };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeFname = this.handleChangeFname.bind(this);
    this.handleChangeMname = this.handleChangeMname.bind(this);
    this.handleChangeLname = this.handleChangeLname.bind(this);
    this.handleChangeEmpid = this.handleChangeEmpid.bind(this);
    this.handleChangeCollege = this.handleChangeCollege.bind(this);
    this.handleChangeDept = this.handleChangeDept.bind(this);
    this.handleChangeEmptype = this.handleChangeEmptype.bind(this);
    this.handleChangeEmptypeNo = this.handleChangeEmptypeNo.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeFulltime = this.handleChangeFulltime.bind(this);
    this.startSignup = this.startSignup.bind(this);
  }

  handleChangeUsername(e) {
    this.setState({ username: e.target.value });
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleChangeFname(e) {
    this.setState({ fname: e.target.value });
  }

  handleChangeMname(e) {
    this.setState({ mname: e.target.value });
  }

  handleChangeLname(e) {
    this.setState({ lname: e.target.value });
  }

  handleChangeEmpid(e) {
    this.setState({ empid: e.target.value });
  }

  handleChangeCollege(e) {
    this.setState({ college: e.target.value });
  }

  handleChangeDept(e) {
    this.setState({ dept: e.target.value });
  }

  handleChangeEmptype(e) {
    this.setState({ emptype: e.target.value });
  }

  handleChangeEmptypeNo(e) {
    this.setState({ emptypeno: e.target.value });
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleChangeFulltime(e) {
    this.setState({ fulltime: e.target.value });
  }

  startSignup(e) {
    e.preventDefault();
    Api.signup({
      emp_id: this.state.empid,
      username: this.state.username,
      password: this.state.password,
      type: 'FACULTY',
      f_name: this.state.fname,
      m_name: this.state.mname,
      l_name: this.state.lname,
      department: this.state.dept,
      college: this.state.college,
      emp_type: this.state.emptype,
      is_full_time: this.state.fulltime,
      email: this.state.email
    }).then(result => {
      this.props.history.push('../');
    });
  }

  render() {
    return (
      <div classname="App-header">
        <div class="ui blue inverted menu">
          <a class="item">
            <h1 class="ui white inverted header">
              <Image src={require('./sample-logo-2.jpg')} />
              STAFS
            </h1>
          </a>
        </div>
        <Container style={{ marginTop: '3%' }}>
          <div>
            <div class="ui attached message">
              <div class="content">
                <div class="header">Welcome to our site!</div>
                <p>Fill out the form below to sign-up for a new account</p>
              </div>
            </div>
            <form class="ui form attached fluid segment">
              <div class="equal width fields">
                <div class="field">
                  <label>First Name</label>
                  <div class="ui fluid input">
                    <input
                      type="text"
                      placeholder="First Name"
                      onChange={this.handleChangeFname}
                    />
                  </div>
                </div>
                <div class="field">
                  <label>Middle Name</label>
                  <div class="ui fluid input">
                    <input
                      type="text"
                      placeholder="Middle Name"
                      onChange={this.handleChangeMname}
                    />
                  </div>
                </div>
                <div class="field">
                  <label>Last Name</label>
                  <div class="ui fluid input">
                    <input
                      type="text"
                      placeholder="Last Name"
                      onChange={this.handleChangeLname}
                    />
                  </div>
                </div>
              </div>

              <div class="equal width fields">
                <div class="field">
                  <label>Employee Id</label>
                  <div class="ui input">
                    <input
                      type="text"
                      placeholder="Employee Id"
                      onChange={this.handleChangeEmpid}
                    />
                  </div>
                </div>

                <div class="field">
                  <a class="ui small header"> Employee Type</a>
                  <div class="equal width fields">
                  <GenericDropdown
                    labelProper = "Type"
                    value = {this.state.emptype}
                    handler = {this.handleChangeEmptype}
                    options = {optionsMain}/>

                  <GenericDropdown
                    labelProper = "Number"
                    value = {this.state.emptype}
                    handler = {this.handleChangeEmptype}
                    options = {optionsMain2}/>
                    </div>
                </div>

                <div class="div1">
                  <div class="ui form">
                    <div class="grouped fields">
                      <div class="field">
                        <label>Full Time Employee?</label>
                      </div>
                      <div class="inline fields">
                        <div class="field">
                          <div class="ui radio checkbox">
                            <input
                              type="radio"
                              name="fulltime"
                              value={1}
                              onClick={this.handleChangeFulltime}
                            />
                            <label>Yes</label>
                          </div>
                          <div class="ui radio checkbox">
                            <input
                              type="radio"
                              name="fulltime"
                              value={0}
                              onClick={this.handleChangeFulltime}
                            />
                            <label>No</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="equal width fields">
                <div class="field">
                  <label>College</label>
                  <div class="ui input">
                    <input
                      type="text"
                      placeholder="College"
                      onChange={this.handleChangeCollege}
                    />
                  </div>
                </div>
                <div class="field">
                  <label>Department</label>
                  <div class="ui input">
                    <input
                      type="text"
                      placeholder="Department"
                      onChange={this.handleChangeDept}
                    />
                  </div>
                </div>
              </div>
              <div class="field">
                <label>Email Address</label>
                <div class="ui input">
                  <input
                    type="text"
                    placeholder="Email Address"
                    onChange={this.handleChangeEmail}
                  />
                </div>
              </div>
              <div class="field">
                <label>Username</label>
                <div class="ui input">
                  <input
                    type="text"
                    placeholder="Username"
                    onChange={this.handleChangeUsername}
                  />
                </div>
              </div>
              <div class="field">
                <label>Password</label>
                <div class="ui input">
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={this.handleChangePassword}
                  />
                </div>
              </div>
              <div class="field">
                <label>Repeat Password</label>
                <div class="ui input">
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={this.handleChangePassword}
                  />
                </div>
              </div>
              <button
                class="ui blue button"
                role="button"
                onClick={this.startSignup}>
                Create an Account
              </button>
            </form>
            <div class="ui warning bottom attached message">
              <i aria-hidden="true" class="help icon" />Already have an account?{' '}
              <a href="/">Click here to Login</a> instead.
            </div>
          </div>
          <Divider hidden="true" />
          <Divider hidden="true" />
        </Container>
      </div>
    );
  }
}
export default Signup;
