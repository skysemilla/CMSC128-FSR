import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';
import SendToAdmin from './../SendtoAdmin';
import TermYearModal from './TermYearModal';

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

    this.state = {
      data: ''
    };

    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    Api.getSession().then(result => {
      if (result.data.data !== null) {
        this.setState({ data: result.data.data });
      }
    });
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.history.push('./profile/edit');
  }

  render() {
    if(this.state.data===''){
      return(
        <div></div>
      );
    }else{
    return (
      <div classname="App-header">
        <TermYearModal {...this.props} is_new={this.state.data.is_new}/>
        <NavBar {...this.props} Label="profile" subLabel="" />
        <div
          class="ui piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 class="ui blue header">
              <button
                class="ui blue right floated button"
                onClick={this.handleEdit}>
                Edit Profile
              </button>
              PROFILE
            </h2>
          </div>
          <div class="ui large list">
            <div>
              <div class="item">
                <div class="content">
                  <b>
                    <i class="user circle icon" />Full Name:{' '}
                  </b>
                  {this.state.data.f_name} {this.state.data.m_name}{' '}
                  {this.state.data.l_name}
                </div>
              </div>
              <div class="item">
                <div class="content">
                  <b>
                    <i class="id card outline icon" />Employee ID:{' '}
                  </b>
                  {this.state.data.emp_id}
                </div>
              </div>
              <div class="item">
                <div class="content">
                  <b>
                    <i class="building icon" />Department and College:{' '}
                  </b>
                  {this.state.data.department}, {this.state.data.college}
                </div>
              </div>
              <div class="item">
                <div class="content">
                  <b>
                    <i class="male icon" />Full-time Employee?{' '}
                  </b>
                  {this.state.data.fulltime}
                </div>
              </div>
              <div class="item">
                <div class="content">
                  <b>
                    <i class="users icon" />Employee Type:{' '}
                  </b>
                  {this.state.data.emp_type}
                </div>
              </div>
              <div class="item">
                <div class="content">
                  <b>
                    <i class="mail outline icon" />Email Address:{' '}
                  </b>
                  {this.state.data.email}
                </div>
              </div>
            </div>
          </div>
          <Divider hidden="true" />
          <Divider hidden="true" />
          <div>
            <h2 class="ui blue header">FSRs</h2>
            <table class="ui blue table">
              <thead>
                <tr>
                  <th>School Year</th>
                  <th>Semester</th>
                  <th>View/Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2017-2018</td>
                  <td>2nd</td>
                  <td>
                    <SendToAdmin {...this.props} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );}
  }
}
//=========================
ReactDOM.render(<Profile />, document.getElementById('root'));
