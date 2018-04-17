import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';
import GenerateFSR from './../GenerateFSR';
import SendtoAdmin from './../SendtoAdmin';
import GenericDropdown from './../GenericDropdown';
import DeptDropdown from './DeptDropdown';

// form validation
const error = {
  color: 'red'
};

const errorTexts = [
  <span style={error}> {' is required'}</span>, //0
  <span style={error}> {' number is required'}</span>, //1
  <span style={error}> {' >= 6 characters'}</span>, //2
  <span style={error}> {' <= 16 characters'}</span>, //3
  <span style={error}> {' = 9 digits'}</span>, //4
  <span style={error}> {' must match'}</span>, //5
  <span style={error}> {' must be alphanumeric'}</span>, //6
  <span style={error}> {' must be valid'}</span>, //7
  <span style={error}> {' *'}</span> //8
];

const nameRegex = /[A-Za-z0-9\-']+/;
const alphanumRegex = /[A-Za-z0-9]+/;
const empIdRegex = /[0-9]{9}/;
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

export default class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: '',
      mname: '',
      lname: '',
      empid: '',
      college: '',
      dept: '',
      emptype: '',
      emptypeno: '',
      email: '',
      username: '',
      password: '',
      password2: '',
      isfulltime: ''
    };

    this.handleChangeFname = this.handleChangeFname.bind(this);
    this.handleChangeMname = this.handleChangeMname.bind(this);
    this.handleChangeLname = this.handleChangeLname.bind(this);
    this.handleChangeEmpid = this.handleChangeEmpid.bind(this);
    this.handleChangeCollege = this.handleChangeCollege.bind(this);
    this.handleChangeDept = this.handleChangeDept.bind(this);
    this.handleChangeEmptype = this.handleChangeEmptype.bind(this);
    this.handleChangeEmptypeNo = this.handleChangeEmptypeNo.bind(this);
    this.handleChangeFulltime = this.handleChangeFulltime.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangePassword2 = this.handleChangePassword2.bind(this);
    this.startEdit = this.startEdit.bind(this);
    this.checkEdit = this.checkEdit.bind(this);
  }

  componentDidMount() {
    Api.getSession().then(res => {
      if (res.data.data !== null) {
        Api.getEmployeeData({ empid: res.data.data.emp_id }).then(result => {
          if (result.data.data.is_studying === 0) var is_fulltime = 1;
          else var is_fulltime = 0;

          // emp_type
          var employee_type = '';
          var i;
          for (i = 0; i < result.data.data.emp_type.split('').length - 1; i++) {
            if (result.data.data.emp_type.split(' ')[i] !== undefined) {
              employee_type += result.data.data.emp_type.split(' ')[i] + ' ';
            }
          }

          this.setState({
            fname: result.data.data.f_name,
            mname: result.data.data.m_name,
            lname: result.data.data.l_name,
            empid: result.data.data.emp_id,
            college: result.data.data.college,
            dept: result.data.data.department,
            emptype: employee_type,
            emptypeno: parseInt(
              result.data.data.emp_type.split(' ')[
                result.data.data.emp_type.split(' ').length - 1
              ]
            ),
            email: result.data.data.email,
            username: result.data.data.username,
            isfulltime: is_fulltime
          });
        });
      }
    });
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

  handleChangeFulltime(e) {
    this.setState({ isfulltime: e.target.value });
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleChangeUsername(e) {
    this.setState({ username: e.target.value });
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleChangePassword2(e) {
    this.setState({ password2: e.target.value });
  }

  startEdit(e) {
    e.preventDefault();
    Api.editProfile({
      empid: this.state.empid,
      username: this.state.username,
      password: this.state.password,
      fname: this.state.fname,
      mname: this.state.mname,
      lname: this.state.lname,
      dept: this.state.dept,
      college: this.state.college,
      emptype: this.state.emptype + ' ' + this.state.emptypeno,
      email: this.state.email,
      is_full_time: this.state.isfulltime
    }).then(result => {
      this.props.history.push('/profile');
    });
  }

  checkEdit(e) {
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
    } else if (this.state.password !== this.state.password2) {
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
    if (!this.state.password2) {
      formError.text.repPass = errorTexts[0];
      formError.bool.repPass = false;
    } else if (this.state.password2.length < 6) {
      formError.text.repPass = errorTexts[2];
      formError.bool.repPass = false;
    } else if (this.state.password2.length > 16) {
      formError.text.repPass = errorTexts[3];
      formError.bool.repPass = false;
    } else if (this.state.password2 !== this.state.password) {
      formError.text.repPass = errorTexts[5];
      formError.bool.repPass = false;
    } else if (!this.state.password2.match(alphanumRegex)) {
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
    if (!this.state.isfulltime) {
      formError.text.fullTime = errorTexts[8];
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
      this.startEdit(e);
    } else this.forceUpdate();
  }

  render() {
    return (
      <div className="App-header">
        <NavBar {...this.props} Label="profile" subLabel="" />
        <div
          class="ui piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 class="ui blue header">EDIT PROFILE</h2>
          </div>
          <Divider hidden="true" />
          <form onSubmit={this.checkEdit}>
            <p>
              <a class="ui small header">First name{formError.text.fname}</a>
              <div class="ui input fluid mini focus">
                <input
                  type="text"
                  value={this.state.fname}
                  onChange={this.handleChangeFname}
                />
              </div>
            </p>
            <p>
              <a class="ui small header">Middle name{formError.text.mname}</a>
              <div class="ui input fluid mini focus">
                <input
                  type="text"
                  value={this.state.mname}
                  onChange={this.handleChangeMname}
                />
              </div>
            </p>
            <p>
              <a class="ui small header">Last name{formError.text.lname}</a>
              <div class="ui input fluid mini focus">
                <input
                  type="text"
                  value={this.state.lname}
                  onChange={this.handleChangeLname}
                />
              </div>
            </p>
            <p>
              <a class="ui small header">Employee ID{formError.text.empId}</a>
              <div class="ui input fluid mini focus">
                <input
                  type="number"
                  value={this.state.empid}
                  onChange={this.handleChangeEmpid}
                />
              </div>
            </p>
            <p>
              <div>
                <div class="flex-container dropDown">
                  <label>
                    <span>
                      <b>College{formError.text.col}</b>
                    </span>
                  </label>
                  <GenericDropdown
                    labelProper="Select College"
                    value={this.state.college}
                    handler={this.handleChangeCollege}
                    options={optionsMain3}
                  />
                </div>
                <label>
                  <span>
                    <b>Department{formError.text.dept}</b>
                  </span>
                </label>
                <DeptDropdown
                  value={this.state.dept}
                  handler={this.handleChangeDept}
                  options={optionsMain3}
                  college={this.state.college}
                />
              </div>
            </p>
            <p>
              <div class="flex-container dropDown">
                <label>
                  <span>
                    <b>Employee Type{formError.text.empType}</b>
                  </span>
                </label>
                <GenericDropdown
                  labelProper="Select Type"
                  value={this.state.emptype}
                  handler={this.handleChangeEmptype}
                  options={optionsMain}
                />
              </div>
              <div class="flex-container dropDown">
                <label>
                  <span>
                    <b>Number{formError.text.empType}</b>
                  </span>
                </label>
                <GenericDropdown
                  labelProper="Select Number"
                  value={this.state.emptypeno}
                  handler={this.handleChangeEmptypeNo}
                  options={optionsMain2}
                />
              </div>

              <div class="ui form flex-container">
                <div class="grouped fields">
                  <div class="field">
                    <label>
                      <span>Full Time Employee?{formError.text.fullTime}</span>
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
                    </div>
                    <div class="field">
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
            </p>
            <Divider hidden="true" />
            <Divider hidden="true" />
            <Divider hidden="true" />
            <Divider hidden="true" />
            <Divider hidden="true" />
            <Divider hidden="true" />
            <p>
              <a class="ui small header">Email Address{formError.text.email}</a>
              <div class="ui input fluid mini focus">
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.handleChangeEmail}
                />
              </div>
            </p>
            <p>
              <a class="ui small header">Username{formError.text.user}</a>
              <div class="ui input fluid mini focus">
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.handleChangeUsername}
                />
              </div>
            </p>

            <p>
              <a class="ui small header">New Password{formError.text.pass}</a>
              <div class="ui input fluid mini focus">
                <input type="password" onChange={this.handleChangePassword} />
              </div>
            </p>
            <p>
              <a class="ui small header">
                Repeat Password{formError.text.repPass}
              </a>
              <div class="ui input fluid mini focus">
                <input type="password" onChange={this.handleChangePassword2} />
              </div>
            </p>
            <div class="ui center aligned container">
              <button
                type="submit"
                class="ui center aligned blue button"
                onClick={this.checkEdit}>
                Edit Profile
              </button>
            </div>
          </form>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
