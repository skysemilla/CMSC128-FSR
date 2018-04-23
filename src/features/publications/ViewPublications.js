import React, { Component } from 'react'
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import ViewPublicationsRow from './PublicationsViewRow';
import NavBar from './../ui/NavBar';

export default class ViewPublications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      hasData: false
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.startAdd = this.startAdd.bind(this);
  }

  componentDidMount = () => {
    Api.getSession().then(res => {
      if (res.data.data !== null) {
        Api.viewPublications({ empid: res.data.data.emp_id }).then(result => {
          if (result.data.data !== null) {
            this.setState({ data: result.data.data[0] });
            this.state.data.map(item => {
              Api.getCoworkers({
                id: item.publication_id
              }).then(result => {
                item.Coworkers = result.data.data;
                this.setState({ hasData: true });
              });
            });
          }
        });
      }
    });
  };

  handleLogout() {
    Api.logout();
    this.props.history.push('../..');
  }

  startAdd() {
    this.props.history.push('./add');
  }

  render() {
    return (
      <div className="App-header">
        <div>
          <NavBar {...this.props} Label="FSR" subLabel="publications" />
        </div>
        <div className="bodyDiv">
          <div
            className="ui compact piled very padded text left aligned container segment mainDiv"
            color="teal">
            <div>
              <h2 className="ui blue header">PUBLICATIONS</h2>
            </div>
            <Divider hidden="true" />
            <div>
              <style>
                {' '}
                {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`}{' '}
              </style>
              <div className="scrollTable">
              <table className="ui celled table">
                <thead>
                  <tr>
                    <th className="center aligned">Title</th>
                    <th className="center aligned">Type</th>
                    <th className="center aligned">Role</th>
                    <th className="center aligned">Co-workers</th>
                    <th className="center aligned">Funding Agency</th>
                    <th className="center aligned">Start Date</th>
                    <th className="center aligned">End Date</th>
                    <th className="center aligned">Approved Credit Units</th>
                    <th className="center aligned">Edit/Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map(item => {
                    Api.getCoworkers({
                      id: item.publication_id
                    })
                      .then(result => {
                        item.Coworkers = result.data.data;
                      })
                      .catch(err => alert('Error loading coworkers!!'));
                    return (
                      <ViewPublicationsRow
                        {...this.props}
                        id={item.publication_id}
                        completeTitle={item.title}
                        researchSubtype={item.category}
                        Role={item.role}
                        key={item.id}
                        Coworkers={item.Coworkers}
                        Funding={item.funding}
                        StartDate={item.start_date}
                        EndDate={item.end_date}
                        ApprovedCreditUnits={item.credit_units}
                        editURL="../publications/edit"
                        label="Publication"
                        subLabel="publication"
                      />
                    );
                  })}
                </tbody>
              </table>
              </div>
              <button
                className="ui right floated blue button"
                onClick={this.startAdd}>
                Add Publication
              </button>
            </div>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}

