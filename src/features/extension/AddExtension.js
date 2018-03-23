import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider, Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import GenericDropdown from './../GenericDropdown'
import NavBar from './../ui/NavBar'
import GenerateFSR from './../GenerateFSR'
import SendtoAdmin from './../SendtoAdmin'

const optionsMain = [ {id : 0, text : 'Trainings'},
                      {id : 1, text : 'Information Dissemination'},
                      {id : 2, text : 'Workshops'},
                      {id : 3, text : 'Symposium'},
                      {id : 4, text : 'Others'}]


export default class AddExtension extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: '',
      title: '',
      noOfHours: '',
      noOfParticipants: '',
      startDate: '',
      endDate: '',
      role: '',
      approvedCreditUnits: '',
      totalExtandCommUnits: ''
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
    // Api.addteachingload({
    //   subj: this.state.subj,
    //   seccode: this.state.seccode,
    //   room: this.state.room,
    //   days: this.state.days,
    //   time: this.state.time,
    //   hours: this.state.hours,
    //   studnum: this.state.studnum,
    //   creditwo: this.state.creditwo,
    //   studcred: this.state.studcred,
    //   creditw: this.state.creditw
    // })
    //   .then(result => {
    //     this.props.history.push('./publications/view');  //change to profile later!!
    //     alert('Publication successfully added!');
    //   })
    //   .catch(e => alert('Error adding new Publication!'));
  }

  render() {

    return (
      <div className="App-header">
        <NavBar {...this.props}/>
        <div
          class="ui piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 class="ui blue header">
              <GenerateFSR/>
              <SendtoAdmin/>
            </h2>
          </div>
          <Divider hidden="true" />
          <div>
            <GenericDropdown
              labelHeader = "Extension Type"
              labelProper = "Choose Extension Type"
              value = {this.state.type}
              handler = {this.handleChangeType}
              options = {optionsMain}/>
          </div>
          <p>
            <a class="ui small header"> Title </a>
            <div class="ui input mini focus">
              <input
                type="text"
                style={{ width: '432px' }}
                onChange={this.handleChangeTitle}
              />
            </div>
          </p>
          <p>
            <a class="ui small header"> No. of Hours </a>
            <div class="ui input mini focus">
              <input
                disabled
                type="text"
                style={{ width: '432px' }}
                onChange={this.handleChangeNoOfHours}
              />
            </div>
          </p>
          <p>
            <a class="ui small header"> No. of Participants </a>
              <div class="ui input mini focus">
                <input
                  type="text"
                  style={{ width: '432px' }}
                  onChange={this.handleChangeNoOfParticipants}
                />
            </div>
          </p>
          <p>
            <a class="ui small header"> Start Date </a>
            <div class="ui input mini focus">
              <input
                type="text"
                style={{ width: '432px' }}
                onChange={this.handleChangeStartDate}
              />
            </div>
          </p>
          <p>
            <a class="ui small header"> End Date </a>
            <div class="ui input mini focus">
              <input
                type="text"
                style={{ width: '432px' }}
                onChange={this.handleChangeEndDate}
              />
            </div>
          </p>
          <p>
            <a class="ui small header"> Role </a>
            <div class="ui input mini focus">
              <input
                type="text"
                style={{ width: '432px' }}
                onChange={this.handleChangeRole}
              />
            </div>
          </p>
          <p>
            <a class="ui small header"> Approved Credit Units </a>
            <div class="ui input mini focus">
              <input
                type="text"
                style={{ width: '432px' }}
                onChange={this.handleChangeApprovedCreditUnits}
              />
            </div>
          </p>
          <p>
            <a class="ui small header"> Total Extension and Community Units </a>
            <div class="ui input mini focus">
              <input
                type="text"
                style={{ width: '432px' }}
                onChange={this.handleChangeTotalExtandCommUnits}
              />
            </div>
          </p>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}

ReactDOM.render(<AddExtension />, document.getElementById('root'));
