import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import ViewExtensionRow from './ExtensionViewRow';
import GenerateFSR from './../GenerateFSR'
import SendtoAdmin from './../SendtoAdmin'
import NavBar from './../ui/NavBar'

//Dummy data
const dummySample={
      type: 'SampleType',
      title: 'SampleTitle',
      noOfHours: '10',
      noOfParticipants: '24',
      duration: '01/01/17 - 01/01/18',
      role: 'SampleRole',
      fundingAgency: 'ABC Agency',
      approvedCreditUnits: '3'
};

export default class ViewExtension extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // data : []
      data: [dummySample] //dummmy data
    };
    this.startAdd = this.startAdd.bind(this);
  }

  startAdd(e) {
    e.preventDefault();
    this.props.history.push('../extension/add');
  }

  // componentDidMount(){
  //   e.preventDefault();
  //   Api.viewextension({
  //   })
  //     .then(result => {
  //       this.setState({ data: result});
  //     })
  //     .catch(e => alert('Error loading Extension!!'));
  // }

  render() {
    return (
      <div className="App-header">
        <NavBar {...this.props} Label="FSR" subLabel="extension"/>

        <div class="ui compact piled very padded text left aligned container segment" color="teal">
          <div>
            <h1 class="ui blue header">
              EXTENSION
            </h1>
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
                <th class="center aligned">Duration</th>
                <th class="center aligned">Role</th>
                <th class="center aligned">Funding Agency</th>
                <th class="center aligned">Approved Course Credits </th>
                <th class="center aligned"> Edit/Delete </th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(item => {
                return (
                  <ViewExtensionRow {...this.props}
                  type={item.type}
                  title={item.title}
                  noOfHours={item.noOfHours}
                  noOfParticipants={item.noOfParticipants}
                  duration={item.duration}
                  role={item.role}
                  fundingAgency={item.fundingAgency}
                  approvedCreditUnits={item.approvedCreditUnits}
                    editURL = "../extension/edit"
                    label = "Extension and Community Services"
                    subLabel = "extension"
                  />
                );
              })}
            </tbody>
          </table>
          <button class="ui blue right floated button" onClick={this.startAdd}>Add Extension</button>
          <Divider hidden="true" />
        </div>
      </div>
    );
  }
}
//=========================
ReactDOM.render(<ViewExtension />, document.getElementById('root'));
