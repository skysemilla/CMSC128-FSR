import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GenericDropdown from './../GenericDropdown';
import DeptDropdown from './DeptDropdown';
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

// form validation
const error = {
  color: 'red'
};

var messageClass = 'ui negative message';

const errorTexts = [
  <span style={error}> {' is required'}</span>, //0
  <span style={error}> {' number is required'}</span>, //1
  <span style={error}> {' >= 6 characters'}</span>, //2
  <span style={error}> {' <= 16 characters'}</span>, //3
  <span style={error}> {' = 10 digits'}</span>, //4
  <span style={error}> {' must match'}</span>, //5
  <span style={error}> {' must be alphanumeric'}</span>, //6
  <span style={error}> {' must be valid'}</span> //7
];

const nameRegex = /[A-Za-z0-9\-']+/;
const alphanumRegex = /[A-Za-z0-9]+/;
const empIdRegex = /[0-9]{10}/;
const emailRegex = /.+\@.+\..+/;

var formError = {
  text: {
    fname: '',
    mname: '',
    lname: '',
    empId: '',
    empType: '',
    fullTime: '',
    col: '',
    dept: '',
    email: '',
    user: '',
    pass: '',
    repPass: ''
  },
  bool: {
    fname: false,
    mname: false,
    lname: false,
    empId: false,
    empType: false,
    fullTime: false,
    col: false,
    dept: false,
    email: false,
    user: false,
    pass: false,
    repPass: false
  }
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
  {
    id: 0,
    text: 'CAFS',
    Subtype: [
      'Department A',
      'Department B',
      'Department C',
      'Department D',
      'Department E'
    ]
  },
  {
    id: 1,
    text: 'CAS',
    Subtype: [
      'Institute of Biological Sciences',
      'Institute of Chemistry',
      'Institute of Computer Science',
      'Institute of Mathematical Sciences and Physics',
      'Institute of Statistics'
    ]
  },
  {
    id: 2,
    text: 'CDC',
    Subtype: [
      'Department F',
      'Department G',
      'Department H',
      'Department I',
      'Department J'
    ]
  },
  {
    id: 3,
    text: 'CEAT',
    Subtype: [
      'Department K',
      'Department L',
      'Department M',
      'Department N',
      'Department O'
    ]
  },
  {
    id: 4,
    text: 'CEM',
    Subtype: [
      'Department P',
      'Department Q',
      'Department R',
      'Department S',
      'Department T'
    ]
  },
  {
    id: 5,
    text: 'CFNR',
    Subtype: [
      'Department U',
      'Department V',
      'Department W',
      'Department X',
      'Department Y'
    ]
  },
  {
    id: 6,
    text: 'CHE',
    Subtype: [
      'Department Z',
      'Department 1',
      'Department 2',
      'Department 3',
      'Department 4'
    ]
  },
  {
    id: 7,
    text: 'CVM',
    Subtype: [
      'Department 5',
      'Department 6',
      'Department 7',
      'Department 8',
      'Department 9'
    ]
  }
];

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      repPassword: '',
      fname: '',
      mname: '',
      lname: '',
      empid: '',
      college: '',
      dept: '',
      emptype: '',
      emptypeno: '',
      email: '',
      fulltime: null
    };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeRepeatPassword = this.handleChangeRepeatPassword.bind(
      this
    );
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
    this.checkSignup = this.checkSignup.bind(this);
    this.startSignup = this.startSignup.bind(this);
  }

  handleChangeUsername(e) {
    this.setState({ username: e.target.value });
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleChangeRepeatPassword(e) {
    this.setState({ repPassword: e.target.value });
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
    console.log(this.state.college);
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

  startSignup() {
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
      emp_type: this.state.emptype + ' ' + this.state.emptypeno,
      is_full_time: this.state.fulltime,
      email: this.state.email
    }).then(result => {
      Api.login({
        username: this.state.username,
        password: this.state.password
      }).then(result => {
        this.props.history.push('../profile');
      });
    });
  }

  checkSignup(e) {
    e.preventDefault();
    // check emp id
    if (!this.state.empid) {
      formError.text.empId = errorTexts[0];
      formError.bool.empId = false;
    } else if (!this.state.empid.match(empIdRegex)) {
      formError.text.empId = errorTexts[4];
      formError.bool.empId = false;
    } else {
      formError.text.empId = '';
      formError.bool.empId = true;
    }

    // check username
    if (!this.state.username) {
      formError.text.user = errorTexts[0];
      formError.bool.user = false;
    } else if (!this.state.username.match(alphanumRegex)) {
      formError.text.user = errorTexts[7];
      formError.bool.user = false;
    } else {
      formError.text.user = '';
      formError.bool.user = true;
    }

    // check pass
    if (!this.state.password) {
      formError.text.pass = errorTexts[0];
      formError.bool.pass = false;
    } else if (this.state.password.length < 6) {
      formError.text.pass = errorTexts[2];
      formError.bool.pass = false;
    } else if (this.state.password.length > 16) {
      formError.text.pass = errorTexts[3];
      formError.bool.pass = false;
    } else if (this.state.password !== this.state.repPassword) {
      formError.text.pass = errorTexts[5];
      formError.bool.pass = false;
    } else if (!this.state.password.match(alphanumRegex)) {
      formError.text.pass = errorTexts[6];
      formError.bool.pass = false;
    } else {
      formError.text.pass = '';
      formError.bool.pass = true;
    }

    // check repeat pass
    if (!this.state.repPassword) {
      formError.text.repPass = errorTexts[0];
      formError.bool.repPass = false;
    } else if (this.state.repPassword.length < 6) {
      formError.text.repPass = errorTexts[2];
      formError.bool.repPass = false;
    } else if (this.state.repPassword.length > 16) {
      formError.text.repPass = errorTexts[3];
      formError.bool.repPass = false;
    } else if (this.state.repPassword !== this.state.password) {
      formError.text.repPass = errorTexts[5];
      formError.bool.repPass = false;
    } else if (!this.state.repPassword.match(alphanumRegex)) {
      formError.text.repPass = errorTexts[6];
      formError.bool.repPass = false;
    } else {
      formError.text.repPass = '';
      formError.bool.repPass = true;
    }

    // check fname
    if (!this.state.fname) {
      formError.text.fname = errorTexts[0];
      formError.bool.fname = false;
    } else if (!this.state.fname.match(nameRegex)) {
      formError.text.fname = errorTexts[6];
      formError.bool.fname = false;
    } else {
      formError.text.fname = '';
      formError.bool.fname = true;
    }

    // check mname
    if (!this.state.mname) {
      formError.text.mname = errorTexts[0];
      formError.bool.mname = false;
    } else if (!this.state.mname.match(nameRegex)) {
      formError.text.mname = errorTexts[6];
      formError.bool.mname = false;
    } else {
      formError.text.mname = '';
      formError.bool.mname = true;
    }

    // check lname
    if (!this.state.lname) {
      formError.text.lname = errorTexts[0];
      formError.bool.lname = false;
    } else if (!this.state.lname.match(nameRegex)) {
      formError.text.lname = errorTexts[6];
      formError.bool.lname = false;
    } else {
      formError.text.lname = '';
      formError.bool.lname = true;
    }

    // check emptype
    if (!this.state.emptype || !this.state.emptypeno) {
      formError.text.empType = errorTexts[0];
      formError.bool.empType = false;
    } else {
      formError.text.empType = '';
      formError.bool.empType = true;
    }

    // check email
    if (!this.state.email) {
      formError.text.email = errorTexts[0];
      formError.bool.email = false;
    } else if (!this.state.email.match(emailRegex)) {
      formError.text.email = errorTexts[7];
      formError.bool.email = false;
    } else {
      formError.text.email = '';
      formError.bool.email = true;
    }

    // check is full time
    if (!this.state.fulltime) {
      formError.text.fullTime = errorTexts[0];
      formError.bool.fullTime = false;
    } else {
      formError.text.fullTime = '';
      formError.bool.fullTime = true;
    }

    // check college
    if (!this.state.college) {
      formError.text.col = errorTexts[0];
      formError.bool.col = false;
    } else {
      formError.text.col = '';
      formError.bool.col = true;
    }

    // check department
    if (!this.state.dept) {
      formError.text.dept = errorTexts[0];
      formError.bool.dept = false;
    } else {
      formError.text.dept = '';
      formError.bool.dept = true;
    }

    if (
      formError.bool.user &&
      formError.bool.pass &&
      formError.bool.repPass &&
      formError.bool.fname &&
      formError.bool.mname &&
      formError.bool.lname &&
      formError.bool.col &&
      formError.bool.dept &&
      formError.bool.email &&
      formError.bool.empId &&
      formError.bool.empType
    ) {
      this.startSignup();
    } else this.forceUpdate();
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
                  <label>
                    <span>First Name{formError.text.fname}</span>
                  </label>
                  <div class="ui fluid input">
                    <input
                      type="text"
                      placeholder="First Name"
                      onChange={this.handleChangeFname}
                    />
                  </div>
                </div>
                <div class="field">
                  <label>
                    <span>Middle Name{formError.text.mname}</span>
                  </label>
                  <div class="ui fluid input">
                    <input
                      type="text"
                      placeholder="Middle Name"
                      onChange={this.handleChangeMname}
                    />
                  </div>
                </div>
                <div class="field">
                  <label>
                    <span>Last Name{formError.text.lname}</span>
                  </label>
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
                  <label>
                    <span>Employee Id{formError.text.empId}</span>
                  </label>
                  <div class="ui input">
                    <input
                      type="text"
                      placeholder="Employee Id"
                      onChange={this.handleChangeEmpid}
                    />
                  </div>
                </div>

                <div class="field">
                  <label>
                    <span>Employee Type{formError.text.empType}</span>
                  </label>
                  <div class="equal width fields">
                    <GenericDropdown
                      labelProper="Type"
                      value={this.state.emptype}
                      handler={this.handleChangeEmptype}
                      options={optionsMain}
                    />
                    <GenericDropdown
                      labelProper="Number"
                      value={this.state.emptypeno}
                      handler={this.handleChangeEmptypeNo}
                      options={optionsMain2}
                    />
                  </div>
                </div>

                <div class="div1">
                  <div class="ui form">
                    <div class="grouped fields">
                      <div class="field">
                        <label>
                          <span>
                            Full Time Employee?{formError.text.fullTime}
                          </span>
                        </label>
                      </div>
                      <div class="inline fields">
                        <div class="field">
                          <div class="ui radio checkbox">
                            <input
                              type="radio"
                              name="fulltime"
                              value={0}
                              onClick={this.handleChangeFulltime}
                            />
                            <label>Yes</label>
                          </div>
                          <div class="ui radio checkbox">
                            <input
                              type="radio"
                              name="fulltime"
                              value={1}
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
                  <label>
                    <span>College{formError.text.col}</span>
                  </label>
                  <GenericDropdown
                    labelProper="Select College"
                    value={this.state.college}
                    handler={this.handleChangeCollege}
                    options={optionsMain3}
                  />
                </div>
                <div class="field">
                  <label>
                    <span>Department{formError.text.dept}</span>
                  </label>
                  <DeptDropdown
                    value={this.state.dept}
                    handler={this.handleChangeDept}
                    options={optionsMain3}
                    college={this.state.college}
                  />
                </div>
              </div>
              <div class="field">
                <label>
                  <span>Email Address{formError.text.email}</span>
                </label>
                <div class="ui input">
                  <input
                    type="text"
                    placeholder="Email Address"
                    onChange={this.handleChangeEmail}
                  />
                </div>
              </div>
              <div class="field">
                <label>
                  <span>Username{formError.text.user}</span>
                </label>
                <div class="ui input">
                  <input
                    type="text"
                    placeholder="Username"
                    onChange={this.handleChangeUsername}
                  />
                </div>
              </div>
              <div class="field">
                <label>
                  <span>Password{formError.text.pass}</span>
                </label>
                <div class="ui input">
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={this.handleChangePassword}
                  />
                </div>
              </div>
              <div class="field">
                <label>
                  <span>Repeat Password{formError.text.repPass}</span>
                </label>
                <div class="ui input">
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={this.handleChangeRepeatPassword}
                  />
                </div>
              </div>
              <button
                class="ui blue button"
                role="button"
                onClick={this.checkSignup}>
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
