import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import ViewExtensionRow from './ExtensionViewRow';
import NavBar from './../ui/NavBarAdmin'

//Dummy data
const dummySample={
      type: 'SampleType',
      title: 'SampleTitle',
      noOfHours: '10',
      noOfParticipants: '24',
      startDate: '03/24/18',
      endDate: '03/25/18',
      role: 'SampleRole',
      approvedCreditUnits: '3',
      totalExtandCommUnits: '3'
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
      <div classNameName="App-header">
        <div>
        <NavBar {...this.props} Label="edit" subLabel="extension"/>
        </div>
        <div classNameName="bodydiv">
        <div className="ui compact piled very padded text left aligned container segment" color="teal">
          <div>
            <h1 className="ui blue header">
              EXTENSION
            </h1>
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
                <th className="center aligned">Approved Course Credits </th>
                <th className="center aligned">Total Extension and Community Credits</th>
                <th className="center aligned"> Edit/Delete </th>
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
                  startDate={item.startDate}
                  endDate={item.endDate}
                  role={item.role}
                  approvedCreditUnits={item.approvedCreditUnits}
                  totalExtandCommUnits={item.totalExtandCommUnits}
                    editURL = "../extension/edit"
                    label = "Extension and Community Services"
                    subLabel = "extension"
                  />
                );
              })}
            </tbody>
          </table>
          <button className="ui blue right floated button" onClick={this.startAdd}>Add Extension</button>
          <Divider hidden="true" />
          </div>
        </div>
      </div>
    );
  }
}