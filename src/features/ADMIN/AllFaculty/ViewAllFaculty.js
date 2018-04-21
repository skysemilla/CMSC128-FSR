import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../../api';
import NavBar from './../ui/NavBarAdmin';
import ViewFacultyRow from './../ui/FacultyViewRow';

const nameRegex = /^[A-Za-z0-9\-']+$/;
const empIdRegex = /^[0-9]{9}$/;

export default class ViewApprovedFSR extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      search: ''
    };

    this.searchFaculty = this.searchFaculty.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    Api.ViewAllFaculty().then(result => {
      if (result.data.data !== null) {
        this.setState({ data: result.data.data[0] });
      }
    });
  }

  searchFaculty(e) {
    e.preventDefault();
    if (!this.state.search) {
      Api.ViewAllFaculty().then(result => {
        this.setState({ data: result.data.data[0] });
      });
    } else if (this.state.search.match(empIdRegex)) {
      console.log('USES ID');
      Api.SearchFacultyById({ empid: this.state.search }).then(result => {
        this.setState({ data: [result.data.data[0]] });
      });
    } else if (this.state.search.match(nameRegex)) {
      console.log('USES NAME');
      Api.SearchFacultyByName({ name: this.state.search }).then(result => {
        this.setState({ data: [result.data.data[0]] });
      });
    } else {
      this.setState({ data: [] });
    }
    //this.forceUpdate();
  }

  handleSearch(e) {
    this.setState({ search: e.target.value });
  }

  render() {
    return (
      <div classNameName="App-header">
        <div>
          <NavBar {...this.props} Label="faculty" />
        </div>
        <Divider hidden="true" />
        <Divider hidden="true" />
        <Divider hidden="true" />
        <div classNameName="bodydiv">
          <div
            className="ui compact piled very padded container segment"
            color="teal">
            <div className="ui two column grid">
              <h1 className="ui blue header">VIEW ALL FACULTY</h1>
              <div className="ui right floated search">
                <form onSubmit={this.searchFaculty}>
                  <div className="ui icon input">
                    <input
                      className="prompt"
                      type="text"
                      placeholder="Search by Name or ID..."
                      onChange={this.handleSearch}
                    />
                    <i className="search icon" />
                  </div>
                </form>
                <div className="results" />
              </div>
            </div>
            <Divider hidden="true" />

            <style>
              {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`}{' '}
            </style>
            <div classNameName="scrollTable">
              <table className="ui celled table">
                <thead>
                  <tr>
                    <th className="center aligned"> Employee ID </th>
                    <th className="center aligned"> Full Name </th>
                    <th className="center aligned"> College </th>
                    <th className="center aligned"> Department </th>
                    <th className="center aligned"> Disable </th>
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
                        disabled={item.is_active}
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
