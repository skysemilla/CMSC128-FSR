import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../../api';
import NavBar from './../ui/NavBarAdmin';
import ViewFSRRow from './../ui/FSRViewRow';

const nameRegex = /^[A-Za-z0-9\-'\s]+$/;
const empIdRegex = /^[0-9]{9}$/;

export default class ViewPendingFSR extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      search: ''
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.searchPendingFSR = this.searchPendingFSR.bind(this);
  }

  componentDidMount() {
    Api.ViewPendingFSR().then(result => {
      if (result.data.data !== null) {
        this.setState({ data: result.data.data });
      }
    });
  }

  searchPendingFSR(e) {
    e.preventDefault();
    if (!this.state.search) {
      Api.ViewPendingFSR().then(result => {
        if (result.data.data !== null) {
          this.setState({ data: result.data.data });
        }
      });
    } else if (this.state.search.match(empIdRegex)) {
      console.log(this.state.search);
      Api.ViewPendingFSRByID({ empid: this.state.search }).then(result => {
        if (result.data.data === null) {
          alert('Search matches no result');
        } else {
          this.setState({ data: result.data.data });
        }
      });
    } else if (this.state.search.match(nameRegex)) {
      Api.ViewPendingFSRByName({ name: this.state.search }).then(result => {
        if (result.data.data === null) {
          alert('Search matches no result');
        } else {
          this.setState({ data: result.data.data });
        }
      });
    } else {
      this.setState({ data: [] });
    }
    //this.forceUpdate();
  }

  handleSearch(e) {
    this.setState({ search: e.target.value });
    console.log(this.state.search);
  }

  render() {
    return (
      <div className="App-header">
        <div>
          <NavBar {...this.props} Label="pending" />
        </div>
        <Divider hidden="true" />
        <Divider hidden="true" />
        <Divider hidden="true" />
        <div>
          <div
            className="ui compact piled very padded container segment"
            color="teal">
            <div className="ui two column grid">
              <h1 className="ui blue header">VIEW PENDING FSR</h1>
              <div className="ui right floated search">
                <form onSubmit={this.searchPendingFSR}>
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
            <div className="scrollTable">
              <table className="ui celled table">
                <thead>
                  <tr>
                    <th className="center aligned"> Employee ID </th>
                    <th className="center aligned"> Full Name </th>
                    <th className="center aligned"> College </th>
                    <th className="center aligned"> Department </th>
                    <th className="center aligned"> Semester </th>
                    <th className="center aligned"> Year </th>
                    <th className="center aligned"> FSR </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map(item => {
                    return (
                      <ViewFSRRow
                        {...this.props}
                        id={item.emp_id}
                        fname={item.f_name}
                        mname={item.m_name}
                        lname={item.l_name}
                        college={item.college}
                        dept={item.department}
                        semester={item.semester}
                        year={item.year}
                        editURL="/admin/editFSR"
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
