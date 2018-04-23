import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';
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
    empTypeNo: false,
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
          this.setState({
            ...this.state,
            fname: result.data.data.f_name,
            mname: result.data.data.m_name,
            lname: result.data.data.l_name,
            empid: result.data.data.emp_id,
            college: result.data.data.college,
            dept: result.data.data.department,
            emptype: result.data.data.emp_type,
            emptypeno: result.data.data.emp_type_no,
            email: result.data.data.email,
            username: result.data.data.username,
            isfulltime: result.data.data.is_studying
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

  checkEdit(e) {
    e.preventDefault();
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
    else if (this.state.password !== this.state.password2)
      formError.bool.pass = false;
    else if (!this.state.password.match(passRegex)) formError.bool.pass = false;
    else formError.bool.pass = true;

    // check repeat pass
    if (!this.state.password2) formError.bool.repPass = false;
    else if (this.state.password2.length < 6) formError.bool.repPass = false;
    else if (this.state.password2.length > 16) formError.bool.repPass = false;
    else if (this.state.password2 !== this.state.password)
      formError.bool.repPass = false;
    else if (!this.state.password2.match(passRegex))
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
    if (!this.state.emptype) formError.bool.empType = false;
    else formError.bool.empType = true;

    // check emptypno
    if (!this.state.emptypeno) formError.bool.empTypeNo = false;
    else formError.bool.empTypeNo = true;

    // check email
    if (!this.state.email) formError.bool.email = false;
    else if (!this.state.email.match(emailRegex)) formError.bool.email = false;
    else formError.bool.email = true;

    // check is full time
    if (!this.state.isfulltime) formError.bool.fullTime = false;
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
      formError.bool.empType &&
      formError.bool.empTypeNo
    ) {
      this.startEdit(e);
    } else this.forceUpdate();
  }

  startEdit(e) {
    console.log(this.state.isfulltime);
    Api.editProfile({
      empid: this.state.empid,
      username: this.state.username,
      password: this.state.password,
      fname: this.state.fname,
      mname: this.state.mname,
      lname: this.state.lname,
      dept: this.state.dept,
      college: this.state.college,
      emptype: this.state.emptype,
      emptypeno: this.state.emptypeno,
      email: this.state.email,
      is_full_time: this.state.isfulltime
    }).then(result => {
      this.props.history.push('/profile');
    });
  }

  render() {
    return (
      <div className="App-header">
        <div>
          <NavBar {...this.props} Label="profile" subLabel="" />
        </div>
        <div className="bodyNav">
          <div
            className="ui piled very padded text left aligned container segment"
            color="teal">
            <div>
              <h2 className="ui blue header">EDIT PROFILE</h2>
            </div>
            <Divider hidden="true" />
            <form onSubmit={this.checkEdit}>
              <p>
                <a className="ui small header">
                  First name
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
                </a>
                <div className="ui input fluid mini focus">
                  <input
                    type="text"
                    value={this.state.fname}
                    onChange={this.handleChangeFname}
                  />
                </div>
              </p>
              <p>
                <a className="ui small header">
                  Middle name
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
                </a>
                <div className="ui input fluid mini focus">
                  <input
                    type="text"
                    value={this.state.mname}
                    onChange={this.handleChangeMname}
                  />
                </div>
              </p>
              <p>
                <a className="ui small header">
                  Last name
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
                </a>
                <div className="ui input fluid mini focus">
                  <input
                    type="text"
                    value={this.state.lname}
                    onChange={this.handleChangeLname}
                  />
                </div>
              </p>
              <p>
                <a className="ui small header">
                  Employee ID
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
                </a>
                <div className="ui input fluid mini focus">
                  <input
                    type="number"
                    min="000000001"
                    value={this.state.empid}
                    onChange={this.handleChangeEmpid}
                  />
                </div>
              </p>
              <p>
                <div>
                  <div className="flex-container dropDown">
                    <label>
                      <span>
                        <b>College</b>
                        {!this.state.college ? (
                          <div className="ui left pointing red basic label">
                            {errorTexts[0]}
                          </div>
                        ) : (
                          <div className="ui left pointing green basic label">
                            {'is valid!'}
                          </div>
                        )}
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
                      <b>Department</b>
                      {!this.state.dept ? (
                        <div className="ui left pointing red basic label">
                          {errorTexts[0]}
                        </div>
                      ) : (
                        <div className="ui left pointing green basic label">
                          {'is valid!'}
                        </div>
                      )}
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
              <label>
                <h3>Employee</h3>
                <Divider />
              </label>
              <p>
                <div className="flex-container dropDown">
                  <label>
                    <b>Type</b>
                    {!this.state.emptype ? (
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
                    labelProper="Select Type"
                    value={this.state.emptype}
                    handler={this.handleChangeEmptype}
                    options={optionsMain}
                  />
                </div>
                <div className="flex-container dropDown">
                  <label>
                    <b>Number</b>
                    {!this.state.emptypeno ? (
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
                    labelProper="Select Number"
                    value={this.state.emptypeno}
                    handler={this.handleChangeEmptypeNo}
                    options={optionsMain2}
                  />
                </div>
                <div className="ui form flex-container">
                  <div className="grouped fields">
                    <div className="field">
                      <label>
                        <b>Full Time?</b>
                        {!this.state.isfulltime ? (
                          <div className="ui left pointing red basic label">
                            {'X'}
                          </div>
                        ) : (
                          <div className="ui left pointing green basic label">
                            {'/'}
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
                      </div>
                      <div className="field">
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
              </p>
              <Divider hidden="true" />
              <Divider hidden="true" />
              <Divider hidden="true" />
              <Divider hidden="true" />
              <Divider hidden="true" />
              <Divider hidden="true" />
              <p>
                <a className="ui small header">
                  Email Address
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
                </a>
                <div className="ui input fluid mini focus">
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={this.handleChangeEmail}
                  />
                </div>
              </p>
              <p>
                <a className="ui small header">
                  Username
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
                </a>
                <div className="ui input fluid mini focus">
                  <input
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChangeUsername}
                  />
                </div>
              </p>

              <p>
                <a className="ui small header">
                  New Password
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
                  ) : this.state.password !== this.state.password2 ? (
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
                </a>
                <div className="ui input fluid mini focus">
                  <input type="password" onChange={this.handleChangePassword} />
                </div>
              </p>
              <p>
                <a className="ui small header">
                  Repeat Password
                  {!this.state.password2 ? (
                    <div className="ui left pointing red basic label">
                      {errorTexts[0]}
                    </div>
                  ) : this.state.password2 < 6 ? (
                    <div className="ui left pointing red basic label">
                      {errorTexts[2]}
                    </div>
                  ) : this.state.password2 > 16 ? (
                    <div className="ui left pointing red basic label">
                      {errorTexts[3]}
                    </div>
                  ) : this.state.password2 !== this.state.password ? (
                    <div className="ui left pointing red basic label">
                      {errorTexts[5]}
                    </div>
                  ) : !this.state.password2.match(passRegex) ? (
                    <div className="ui left pointing red basic label">
                      {errorTexts[7]}
                    </div>
                  ) : (
                    <div className="ui left pointing green basic label">
                      {'is valid!'}
                    </div>
                  )}
                </a>
                <div className="ui input fluid mini focus">
                  <input
                    type="password"
                    onChange={this.handleChangePassword2}
                  />
                </div>
              </p>
              <div className="ui center aligned container">
                <button
                  type="submit"
                  className="ui center aligned blue button"
                  onClick={this.checkEdit}>
                  Edit Profile
                </button>
              </div>
            </form>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
