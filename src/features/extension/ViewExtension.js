import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import ViewExtensionRow from './ExtensionViewRow';
import GenerateFSR from './../GenerateFSR';
import SendtoAdmin from './../SendtoAdmin';
import NavBar from './../ui/NavBar';
import DeleteModal from '../GenericDelete';

//Dummy data
const dummySample = {
  type: 'SampleType',
  title: 'SampleTitle',
  noOfHours: '10',
  noOfParticipants: '24',
  startDate: '01/01/17',
  endDate: '01/01/18',
  role: 'SampleRole',
  fundingAgency: 'ABC Agency',
  approvedCreditUnits: '3'
};

export default class ViewExtension extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [dummySample] //dummmy data
    };
    this.startAdd = this.startAdd.bind(this);
  }

  startAdd(e) {
    e.preventDefault();
    this.props.history.push('../extension/add');
  }

componentDidMount = () => {
    Api.getSession().then(res => {
      if (res.data.data !== null) {
        console.log(res.data.data.emp_id);
        Api.viewExtension({ id: res.data.data.emp_id }).then(result => {
          console.log(result.data.data);
          if (result.data.data !== null) {
            this.setState({ data: result.data.data });
            // console.log(result.data.data);
          }
        });
      }
    });
  };

  render() {
    return (
      <div className="App-header">
        <div>
          <NavBar {...this.props} Label="FSR" subLabel="extension" />
        </div>

        <div className="bodyDiv">
          <div
            class="ui compact piled very padded text left aligned container segment"
            color="teal">
            <div>
              <h1 class="ui blue header">EXTENSION</h1>
            </div>
            <Divider hidden="true" />

            <style>
              {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`}{' '}
            </style>
            <table class="ui celled table">
              <thead>
                <tr>
                  <th class="center aligned">Type</th>
                  <th class="center aligned">Title</th>
                  <th class="center aligned">No. of Hours </th>
                  <th class="center aligned">No. of Participants</th>
                  <th class="center aligned">Start Date</th>
                  <th class="center aligned">End Date</th>
                  <th class="center aligned">Role</th>
                  <th class="center aligned">Funding Agency</th>
                  <th class="center aligned">Approved Course Credits </th>
                  <th class="center aligned"> Edit/Delete </th>
                </tr> 
              </thead>
              <tbody>
                {this.state.data.map(item => {
                  return (
                    <ViewExtensionRow
                      {...this.props}
                      id={item.extension_id}
                      type={item.extension_type}
                      title={item.extension_name}
                      noOfHours={item.no_of_hours}
                      noOfParticipants={item.no_of_participants}
                      startDate={item.start_time}
                      endDate={item.end_time}
                      role={item.extension_role}
                      fundingAgency={item.funding_agency}
                      approvedCreditUnits={item.credit_unit}
                      editURL="../extension/edit"
                      label="Extension and Community Services"
                      subLabel="extension"
                    />
                  );
                })}
              </tbody>
            </table>
            <button
              class="ui blue right floated button"
              onClick={this.startAdd}>
              Add Extension
            </button>
            <Divider hidden="true" />
          </div>
        </div>
      </div>
    );
  }
}
