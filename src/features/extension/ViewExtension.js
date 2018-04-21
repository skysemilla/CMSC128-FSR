import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import ViewExtensionRow from './ExtensionViewRow';
import NavBar from './../ui/NavBar';

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
      <div classNameName="App-header">
        <div>
          <NavBar {...this.props} Label="FSR" subLabel="extension" />
        </div>

        <div classNameName="bodyDiv">
          <div
            className="ui compact piled very padded text left aligned container segment"
            color="teal">
            <div>
              <h1 className="ui blue header">EXTENSION</h1>
            </div>
            <Divider hidden="true" />

            <style>
              {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`}{' '}
            </style>
            <table className="ui celled table">
              <thead>
                <tr>
                  <th className="center aligned">Type</th>
                  <th className="center aligned">Title</th>
                  <th className="center aligned">No. of Hours </th>
                  <th className="center aligned">No. of Participants</th>
                  <th className="center aligned">Start Date</th>
                  <th className="center aligned">End Date</th>
                  <th className="center aligned">Role</th>
                  <th className="center aligned">Funding Agency</th>
                  <th className="center aligned">Approved Course Credits </th>
                  <th className="center aligned"> Edit/Delete </th>
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
              className="ui blue right floated button"
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
