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
      this.props.history.push('./');
    });
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
          <p>
            <a class="ui small header">First name</a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                value={this.state.fname}
                onChange={this.handleChangeFname}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Middle name</a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                value={this.state.mname}
                onChange={this.handleChangeMname}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Last name</a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                value={this.state.lname}
                onChange={this.handleChangeLname}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Employee ID</a>
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
                    <b>College</b>
                  </span>
                </label>
                <GenericDropdown
                  labelProper="Select College"
                  value={this.state.college}
                  handler={this.handleChangeCollege}
                  options={optionsMain3}
                />
              </div>

              <DeptDropdown
                value={this.state.dept}
                handler={this.handleChangeDept}
                options={optionsMain3}
                college={this.state.college}
              />

              <div class="ui form flex-container">
                <div class="grouped fields">
                  <div class="field">
                    <label>
                      <span>Full Time Employee?</span>
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
            </div>
          </p>
          <Divider hidden="true" />
          <Divider hidden="true" />
          <p>
            <div class="flex-container dropDown">
              <label>
                <span>
                  <b>Employee Type</b>
                </span>
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
                <span>
                  <b>Number</b>
                </span>
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
                value={this.state.email}
                onChange={this.handleChangeEmail}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Username</a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleChangeUsername}
              />
            </div>
          </p>

          <p>
            <a class="ui small header">New Password</a>
            <div class="ui input fluid mini focus">
              <input type="password" onChange={this.handleChangePassword} />
            </div>
          </p>
          <p>
            <a class="ui small header">Repeat Password</a>
            <div class="ui input fluid mini focus">
              <input type="password" onChange={this.handleChangePassword2} />
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
