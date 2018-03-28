import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider, Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import GenericDropdown from './../GenericDropdown'
import NavBar from './../ui/NavBar'
import GenerateFSR from './../GenerateFSR'
import SendtoAdmin from './../SendtoAdmin'

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

const optionsMain = [ {id : 0, text : 'Trainings'},
                      {id : 1, text : 'Information Dissemination'},
                      {id : 2, text : 'Workshops'},
                      {id : 3, text : 'Symposium'},
                      {id : 4, text : 'Others'}]


export default class EditExtension extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: dummySample.type,
      title: dummySample.title,
      noOfHours: dummySample.noOfHours,
      noOfParticipants: dummySample.noOfParticipants,
      startDate: dummySample.startDate,
      endDate: dummySample.endDate,
      role: dummySample.role,
      approvedCreditUnits: dummySample.approvedCreditUnits,
      totalExtandCommUnits: dummySample.totalExtandCommUnits
    };

    this.handleChangeType = this.handleChangeType.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeNoOfHours = this.handleChangeNoOfHours.bind(this);
    this.handleChangeNoOfParticipants = this.handleChangeNoOfParticipants.bind(this);
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
    this.handleChangeRole = this.handleChangeRole.bind(this);
    this.handleChangeApprovedCreditUnits = this.handleChangeApprovedCreditUnits.bind(this);
    this.handleChangeTotalExtandCommUnits = this.handleChangeTotalExtandCommUnits.bind(this);

    this.startAdd = this.startAdd.bind(this);
  }

  handleChangeType(e) {
    this.setState({ type: e.target.value });
    console.log(e.target.value);
  }

  handleChangeTitle(e) {
    this.setState({ title: e.target.value });
  }

  handleChangeNoOfHours(e) {
    this.setState({ noOfHours: e.target.value });
  }

  handleChangeNoOfParticipants(e) {
    this.setState({ noOfParticipants: e.target.value });
  }

  handleChangeStartDate(e) {
    this.setState({ startDate: e.target.value });
  }

  handleChangeEndDate(e) {
    this.setState({ endDate: e.target.value });
  }

  handleChangeRole(e) {
    this.setState({ role: e.target.value });
  }

  handleChangeApprovedCreditUnits(e) {
    this.setState({ approvedCreditUnits: e.target.value });
  }

  handleChangeTotalExtandCommUnits(e) {
    this.setState({ totalExtandCommUnits: e.target.value });
  }

  startAdd(e) {
    // e.preventDefault();
    // Api.editextension({
    //   type: this.state.type,
    //   title: this.state.title,
    //   noOfHours: this.state.noOfHours,
    //   noOfParticipants: this.state.noOfParticipants,
    //   startDate: this.state.startDate,
    //   endDate: this.state.endDate,
    //   role: this.state.role,
    //   approvedCreditUnits: this.state.approvedCreditUnits,
    //   totalExtandCommUnits: this.state.totalExtandCommUnits
    // })
    //   .then(result => {
    //     this.props.history.push('./extension/view');
    //     alert('Extension successfully edited!');
    //   })
    //   .catch(e => alert('Error editing new Extension!'));
  }

  render() {

    return (
      <div className="App-header">
        <NavBar {...this.props} Label="FSR" subLabel="extension"/>
        <div
          class="ui piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 class="ui blue header">
              EDIT EXTENSION
            </h2>
          </div>
          <Divider hidden="true" />
          <p>
          <div>
            <GenericDropdown
              labelHeader = "Extension Type "
              labelProper = "Choose Extension Type"
              value = {this.state.type}
              handler = {this.handleChangeType}
              options = {optionsMain}/>
          </div>
          </p>
          <p>
            <a class="ui small header"> Title </a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                onChange={this.handleChangeTitle}
                placeholder={this.state.title}
              />
            </div>
          </p>
          <p>
            <a class="ui small header"> No. of Hours </a>
            <div class="ui input fluid mini focus">
              <input
                disabled
                type="number"
                onChange={this.handleChangeNoOfHours}
                placeholder={this.state.noOfHours}
              />
            </div>
          </p>
          <p>
            <a class="ui small header"> No. of Participants </a>
              <div class="ui input fluid mini focus">
                <input
                  type="number"
                  onChange={this.handleChangeNoOfParticipants}
                  placeholder={this.state.noOfParticipants}
                />
            </div>
          </p>
          <p>
            <a class="ui small header"> Start Date </a>
            <div class="ui input fluid mini focus">
              <input
                type="date"
                onChange={this.handleChangeStartDate}
                placeholder={this.state.startDate}
              />
            </div>
          </p>
          <p>
            <a class="ui small header"> End Date </a>
            <div class="ui input fluid mini focus">
              <input
                type="date"
                onChange={this.handleChangeEndDate}
                placeholder={this.state.endDate}
              />
            </div>
          </p>
          <p>
            <a class="ui small header"> Role </a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                onChange={this.handleChangeRole}
                placeholder={this.state.role}
              />
            </div>
          </p>
          <p>
            <a class="ui small header"> Approved Credit Units </a>
            <div class="ui input fluid mini focus">
              <input
                type="number"
                onChange={this.handleChangeApprovedCreditUnits}
                placeholder={this.state.approvedCreditUnits}
              />
            </div>
          </p>
          <p>
            <a class="ui small header"> Total Extension and Community Units </a>
            <div class="ui input fluid mini focus">
              <input
                type="number"
                onChange={this.handleChangeTotalExtandCommUnits}
                placeholder={this.state.totalExtandCommUnits}
              />
            </div>
          </p>
          <div class="ui center aligned container">
          <button
              class="ui center aligned blue button"
              onClick={this.startAdd}>
              Add Extension
            </button>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}

ReactDOM.render(<EditExtension />, document.getElementById('root'));
