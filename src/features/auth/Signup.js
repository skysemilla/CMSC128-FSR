import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import GenericDropdown from './../GenericDropdown';
import DeptDropdown from './DeptDropdown';
import { Container, Image, Divider } from 'semantic-ui-react';
import * as Api from '../../api';

// form validation
const error = {
  color: 'red'
};

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

const nameRegex = /^[A-Za-z\-'\s]+$/;
const alphanumRegex = /^[A-Za-z0-9]+$/;
const passRegex = /^[A-Za-z0-9\-_.]+$/;
const empIdRegex = /^[0-9]{9}$/;
const emailRegex = /^[^;"']+@up.edu.ph$/;

var formError = {
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
      fulltime: null,
      errorExist: false
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
    this.setState({ ...this.state, errorExist: false });
    Api.checkValid({
      empid: this.state.empid,
      username: this.state.username,
      email: this.state.email
    }).then(res => {
      if (res.data.data === null) {
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
          emp_type_no: this.state.emptypeno,
          is_full_time: this.state.fulltime,
          email: this.state.email
        }).then(result => {
          Api.login({
            username: this.state.username,
            password: this.state.password
          }).then(result => {
            this.props.history.push('/profile');
          });
        });
      } else {
        this.setState({ ...this.state, errorExist: true });
        this.forceUpdate();
      }
    });
  }

  checkSignup(e) {
    e.preventDefault();
    // check emp id
    if (!this.state.empid) formError.bool.empId = false;
    else if (!this.state.empid.match(empIdRegex)) formError.bool.empId = false;
    else formError.bool.empId = true;

    // check username
    if (!this.state.username) formError.bool.user = false;
    else if (!this.state.username.match(alphanumRegex))
      formError.bool.user = false;
    else formError.bool.user = true;

    // check pass
    if (!this.state.password) formError.bool.pass = false;
    else if (this.state.password.length < 6) formError.bool.pass = false;
    else if (this.state.password.length > 16) formError.bool.pass = false;
    else if (this.state.password !== this.state.repPassword)
      formError.bool.pass = false;
    else if (!this.state.password.match(passRegex)) formError.bool.pass = false;
    else formError.bool.pass = true;

    // check repeat pass
    if (!this.state.repPassword) formError.bool.repPass = false;
    else if (this.state.repPassword.length < 6) formError.bool.repPass = false;
    else if (this.state.repPassword.length > 16) formError.bool.repPass = false;
    else if (this.state.repPassword !== this.state.password)
      formError.bool.repPass = false;
    else if (!this.state.repPassword.match(passRegex))
      formError.bool.repPass = false;
    else formError.bool.repPass = true;

    // check fname
    if (!this.state.fname) formError.bool.fname = false;
    else if (!this.state.fname.match(nameRegex)) formError.bool.fname = false;
    else formError.bool.fname = true;

    // check mname
    if (!this.state.mname) formError.bool.mname = false;
    else if (!this.state.mname.match(nameRegex)) formError.bool.mname = false;
    else formError.bool.mname = true;

    // check lname
    if (!this.state.lname) formError.bool.lname = false;
    else if (!this.state.lname.match(nameRegex)) formError.bool.lname = false;
    else formError.bool.lname = true;

    // check emptype
    if (!this.state.emptype || !this.state.emptypeno)
      formError.bool.empType = false;
    else formError.bool.empType = true;

    // check email
    if (!this.state.email) formError.bool.email = false;
    else if (!this.state.email.match(emailRegex)) formError.bool.email = false;
    else formError.bool.email = true;

    // check is full time
    if (!this.state.fulltime) formError.bool.fullTime = false;
    else formError.bool.fullTime = true;

    // check college
    if (!this.state.college) formError.bool.col = false;
    else formError.bool.col = true;

    // check department
    if (!this.state.dept) formError.bool.dept = false;
    else formError.bool.dept = true;

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
      <div className="App-header">
        <div className="ui blue inverted menu">
          <a className="item">
            <h1 className="ui white inverted header">
              <Image src={require('./sample-logo-2.jpg')} />
              STAFS
            </h1>
          </a>
        </div>
        <Container style={{ marginTop: '3%' }}>
          <div>
            <div className="ui attached message">
              <div className="content">
                <div className="header">Welcome to our site!</div>
                <p>Fill out the form below to sign-up for a new account</p>
              </div>
            </div>
            <form className="ui form attached fluid segment">
              <div className="equal width fields">
                <div className="field">
                  <label>
                    <span>First Name</span>
                    {!this.state.fname ? (
                      <div className="ui left pointing red basic label">
                        {errorTexts[0]}
                      </div>
                    ) : !this.state.fname.match(nameRegex) ? (
                      <div className="ui left pointing red basic label">
                        {errorTexts[7]}
                      </div>
                    ) : (
                      <div className="ui left pointing green basic label">
                        {'is valid!'}
                      </div>
                    )}
                  </label>
                  <div className="ui fluid input">
                    <input
                      type="text"
                      placeholder="First Name"
                      onChange={this.handleChangeFname}
                    />
                  </div>
                </div>
                <div className="field">
                  <label>
                    <span>Middle Name</span>
                    {!this.state.mname ? (
                      <div className="ui left pointing red basic label">
                        {errorTexts[0]}
                      </div>
                    ) : !this.state.mname.match(nameRegex) ? (
                      <div className="ui left pointing red basic label">
                        {errorTexts[7]}
                      </div>
                    ) : (
                      <div className="ui left pointing green basic label">
                        {'is valid!'}
                      </div>
                    )}
                  </label>
                  <div className="ui fluid input">
                    <input
                      type="text"
                      placeholder="Middle Name"
                      onChange={this.handleChangeMname}
                    />
                  </div>
                </div>
                <div className="field">
                  <label>
                    <span>Last Name</span>
                    {!this.state.lname ? (
                      <div className="ui left pointing red basic label">
                        {errorTexts[0]}
                      </div>
                    ) : !this.state.lname.match(nameRegex) ? (
                      <div className="ui left pointing red basic label">
                        {errorTexts[7]}
                      </div>
                    ) : (
                      <div className="ui left pointing green basic label">
                        {'is valid!'}
                      </div>
                    )}
                  </label>
                  <div className="ui fluid input">
                    <input
                      type="text"
                      placeholder="Last Name"
                      onChange={this.handleChangeLname}
                    />
                  </div>
                </div>
              </div>

              <div className="equal width fields">
                <div className="field">
                  <label>
                    <span>Employee Id</span>
                    {!this.state.empid ? (
                      <div className="ui left pointing red basic label">
                        {errorTexts[0]}
                      </div>
                    ) : !this.state.empid.match(empIdRegex) ? (
                      <div className="ui left pointing red basic label">
                        {errorTexts[4]}
                      </div>
                    ) : (
                      <div className="ui left pointing green basic label">
                        {'is valid!'}
                      </div>
                    )}
                  </label>
                  <div className="ui input">
                    <input
                      type="text"
                      placeholder="Employee Id"
                      onChange={this.handleChangeEmpid}
                    />
                  </div>
                </div>
                <div className="field">
                  <label>
                    <span>Employee Type</span>
                    {!this.state.emptype || !this.state.emptypeno ? (
                      <div className="ui left pointing red basic label">
                        {errorTexts[0]}
                      </div>
                    ) : (
                      <div className="ui left pointing green basic label">
                        {'is valid!'}
                      </div>
                    )}
                  </label>
                  <div className="equal width fields">
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

                <div className="div1">
                  <div className="ui form">
                    <div className="grouped fields">
                      <div className="field">
                        <label>
                          <span>Full Time Employee?</span>
                          {!this.state.fulltime ? (
                            <div className="ui left pointing red basic label">
                              {errorTexts[0]}
                            </div>
                          ) : (
                            <div className="ui left pointing green basic label">
                              {'is valid!'}
                            </div>
                          )}
                        </label>
                      </div>
                      <div className="inline fields">
                        <div className="field">
                          <div className="ui radio checkbox">
                            <input
                              type="radio"
                              name="fulltime"
                              value={0}
                              onClick={this.handleChangeFulltime}
                            />
                            <label>Yes</label>
                          </div>
                          <div className="ui radio checkbox">
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

              <div className="equal width fields">
                <div className="field">
                  <label>
                    <span>College</span>
                    {!this.state.college ? (
                      <div className="ui left pointing red basic label">
                        {errorTexts[0]}
                      </div>
                    ) : (
                      <div className="ui left pointing green basic label">
                        {'is valid!'}
                      </div>
                    )}
                  </label>
                  <GenericDropdown
                    labelProper="Select College"
                    value={this.state.college}
                    handler={this.handleChangeCollege}
                    options={optionsMain3}
                  />
                </div>
                <div className="field">
                  <label>
                    <span>Department</span>
                    {!this.state.dept ? (
                      <div className="ui left pointing red basic label">
                        {errorTexts[0]}
                      </div>
                    ) : (
                      <div className="ui left pointing green basic label">
                        {'is valid!'}
                      </div>
                    )}
                  </label>
                  <DeptDropdown
                    value={this.state.dept}
                    handler={this.handleChangeDept}
                    options={optionsMain3}
                    college={this.state.college}
                  />
                </div>
              </div>
              <div className="field">
                <label>
                  <span>Email Address</span>
                  {!this.state.email ? (
                    <div className="ui left pointing red basic label">
                      {errorTexts[0]}
                    </div>
                  ) : !this.state.email.match(emailRegex) ? (
                    <div className="ui left pointing red basic label">
                      {errorTexts[7]}
                    </div>
                  ) : (
                    <div className="ui left pointing green basic label">
                      {'is valid!'}
                    </div>
                  )}
                </label>
                <div className="ui input">
                  <input
                    type="text"
                    placeholder="Email Address"
                    onChange={this.handleChangeEmail}
                  />
                </div>
              </div>
              <div className="field">
                <label>
                  <span>Username</span>
                  {!this.state.username ? (
                    <div className="ui left pointing red basic label">
                      {errorTexts[0]}
                    </div>
                  ) : !this.state.username.match(alphanumRegex) ? (
                    <div className="ui left pointing red basic label">
                      {errorTexts[7]}
                    </div>
                  ) : (
                    <div className="ui left pointing green basic label">
                      {'is valid!'}
                    </div>
                  )}
                </label>
                <div className="ui input">
                  <input
                    type="text"
                    placeholder="Username"
                    onChange={this.handleChangeUsername}
                  />
                </div>
              </div>
              <div className="field">
                <label>
                  <span>Password</span>
                  {!this.state.password ? (
                    <div className="ui left pointing red basic label">
                      {errorTexts[0]}
                    </div>
                  ) : this.state.password.length < 6 ? (
                    <div className="ui left pointing red basic label">
                      {errorTexts[2]}
                    </div>
                  ) : this.state.password.length > 16 ? (
                    <div className="ui left pointing red basic label">
                      {errorTexts[3]}
                    </div>
                  ) : this.state.password !== this.state.repPassword ? (
                    <div className="ui left pointing red basic label">
                      {errorTexts[5]}
                    </div>
                  ) : !this.state.password.match(passRegex) ? (
                    <div className="ui left pointing red basic label">
                      {errorTexts[7]}
                    </div>
                  ) : (
                    <div className="ui left pointing green basic label">
                      {'is valid!'}
                    </div>
                  )}
                </label>
                <div className="ui input">
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={this.handleChangePassword}
                  />
                </div>
              </div>
              <div className="field">
                <label>
                  <span>Repeat Password</span>
                  {!this.state.repPassword ? (
                    <div className="ui left pointing red basic label">
                      {errorTexts[0]}
                    </div>
                  ) : this.state.repPassword < 6 ? (
                    <div className="ui left pointing red basic label">
                      {errorTexts[2]}
                    </div>
                  ) : this.state.repPassword > 16 ? (
                    <div className="ui left pointing red basic label">
                      {errorTexts[3]}
                    </div>
                  ) : this.state.repPassword !== this.state.password ? (
                    <div className="ui left pointing red basic label">
                      {errorTexts[5]}
                    </div>
                  ) : !this.state.repPassword.match(passRegex) ? (
                    <div className="ui left pointing red basic label">
                      {errorTexts[7]}
                    </div>
                  ) : (
                    <div className="ui left pointing green basic label">
                      {'is valid!'}
                    </div>
                  )}
                </label>
                <div className="ui input">
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={this.handleChangeRepeatPassword}
                  />
                </div>
              </div>
              <button
                className="ui blue button"
                onClick={this.checkSignup}>
                Create an Account
              </button>
              {this.state.errorExist ? (
                <div className="ui left pointing red basic label">
                  {'User already exists'}
                </div>
              ) : (
                <div />
              )}
            </form>
            <div className="ui warning bottom attached message">
              <i aria-hidden="true" className="help icon" />Already have an
              account? <a href="/">Click here to Login</a> instead.
            </div>
          </div>
          <Divider hidden="true" />
          <Divider hidden="true" />
        </Container>
      </div>
    );
  }
}
