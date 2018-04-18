import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import DeleteModal from '../GenericDelete';
import GenerateFSR from './../GenerateFSR';
import SendtoAdmin from './../SendtoAdmin';
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
            class="ui compact piled very padded text left aligned container segment mainDiv"
            color="teal">
            <div>
              <h2 class="ui blue header">PUBLICATIONS</h2>
            </div>
            <Divider hidden="true" />
            <div>
              <style>
                {' '}
                {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`}{' '}
              </style>
              <table class="ui celled table">
                <thead>
                  <tr>
                    <th class="center aligned">Title</th>
                    <th class="center aligned">Type</th>
                    <th class="center aligned">Role</th>
                    <th class="center aligned">Co-workers</th>
                    <th class="center aligned">Funding</th>
                    <th class="center aligned">Start Date</th>
                    <th class="center aligned">End Date</th>
                    <th class="center aligned">Approved Credit Units</th>
                    <th class="center aligned">Edit/Delete</th>
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
              <button
                class="ui right floated blue button"
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

