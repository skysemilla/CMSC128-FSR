import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../../api';
import NavBar from './../ui/NavBarAdmin';
import ViewFacultyRow from './../ui/FacultyViewRow';

const dummy1 = {
    emp_id: '1',
    f_name: 'A',
    m_name: 'B',
    l_name: 'C',
    college: 'D',
    department: 'E',
    disabled: 'YES'
};

const dummy2 = {
    emp_id: '1',
    f_name: 'A',
    m_name: 'B',
    l_name: 'C',
    college: 'D',
    department: 'E',
    disabled: 'NO'
};

const dummy3 = {
    emp_id: '1',
    f_name: 'A',
    m_name: 'B',
    l_name: 'C',
    college: 'D',
    department: 'E',
    disabled: 'YES'
};

const dummy4 = {
    emp_id: '1',
    f_name: 'A',
    m_name: 'B',
    l_name: 'C',
    college: 'D',
    department: 'E',
    disabled: 'NO'
};

const dummy5 = {
    emp_id: '1',
    f_name: 'A',
    m_name: 'B',
    l_name: 'C',
    college: 'D',
    department: 'E',
    disabled: 'YES'
};

const dummy6 = {
    emp_id: '1',
    f_name: 'A',
    m_name: 'B',
    l_name: 'C',
    college: 'D',
    department: 'E',
    disabled: 'NO'
};

const dummy7 = {
    emp_id: '1',
    f_name: 'A',
    m_name: 'B',
    l_name: 'C',
    college: 'D',
    department: 'E',
    disabled: 'YES'
};

const dummy8 = {
    emp_id: '1',
    f_name: 'A',
    m_name: 'B',
    l_name: 'C',
    college: 'D',
    department: 'E',
    disabled: 'NO'
};

const dummy9 = {
    emp_id: '1',
    f_name: 'A',
    m_name: 'B',
    l_name: 'C',
    college: 'D',
    department: 'E',
    disabled: 'YES'
};

const dummy10 = {
    emp_id: '1',
    f_name: 'A',
    m_name: 'B',
    l_name: 'C',
    college: 'D',
    department: 'E',
    disabled: 'NO'
};

export default class ViewApprovedFSR extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [dummy1, dummy2, dummy3, dummy4, dummy5, dummy6, dummy7, dummy8, dummy9, dummy10]
    };
  }

  componentDidMount() {
    // Api.ViewAllFaculty().then(result => {
    //   console.log(result.data.data);
    //   this.setState({ data: result.data.data[0] });
    // });
  }

  render() {
    return (
      <div className="App-header">
        <div>
        <NavBar {...this.props} Label="faculty" />
        </div>
        <Divider hidden='true'/>
        <Divider hidden='true'/>
        <Divider hidden='true'/>
        <div className="bodydiv">
        <div
          class="ui compact piled very padded container segment"
          color="teal">
          <div class="ui two column grid">
            <h1 class="ui blue header">VIEW ALL FACULTY</h1>
            <div class="ui right floated search">
              <div class="ui icon input">
                <input
                  class="prompt"
                  type="text"
                  placeholder="Search Name or EmpID..."
                />
                <i class="search icon" />
              </div>
              <div class="results" />
            </div>
          </div>
          <Divider hidden="true" />

          <style>
            {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`}{' '}
          </style>
          <div className="scrollTable">
          <table class="ui celled table">
            <thead>
              <tr>
                <th class="center aligned"> Employee ID </th>
                <th class="center aligned"> Full Name </th>
                <th class="center aligned"> College </th>
                <th class="center aligned"> Department </th>
                <th class="center aligned"> Disable </th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(item => {
                return (
                  <ViewFacultyRow
                    {...this.props}
                    id={item.emp_id}
                    fname={item.f_name}
                    mname={item.m_name}
                    lname={item.l_name}
                    college={item.college}
                    dept={item.department}
                    disabled={item.disabled}
                    editURL="../admin/editFSR"
                  />
                );
              })}
            </tbody>
          </table>
          </div>
          <Divider hidden="true" />
          </div>
        </div>
      </div>
    );
  }
}
//=========================
ReactDOM.render(<ViewApprovedFSR />, document.getElementById('root'));
