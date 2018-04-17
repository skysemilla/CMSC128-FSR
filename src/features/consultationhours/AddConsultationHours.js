import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';
import GenerateFSR from './../GenerateFSR';
import SendtoAdmin from './../SendtoAdmin';
import { Divider, Checkbox } from 'semantic-ui-react';
import GenericDropdown from './../GenericDropdown';
import ConsultationHourSubTypeDropdown from './ConsultationHourSubTypeDropdown';

const timeIndex = 8;
const optionsDays = [
  { text: 'Monday' },
  { text: 'Tuesday' },
  { text: 'Wednesday' },
  { text: 'Thursday' },
  { text: 'Friday' }
];

const optionsTimeFrom = [
  { value: 0, text: '08:00:00' },
  { value: 1, text: '09:00:00' },
  { value: 2, text: '10:00:00' },
  { value: 3, text: '11:00:00' },
  { value: 4, text: '12:00:00' },
  { value: 5, text: '13:00:00' },
  { value: 6, text: '14:00:00' },
  { value: 7, text: '15:00:00' },
  { value: 8, text: '16:00:00' }
];

const optionsTimeTo = [
  { value: 0, text: '09:00:00' },
  { value: 1, text: '10:00:00' },
  { value: 2, text: '11:00:00' },
  { value: 3, text: '12:00:00' },
  { value: 4, text: '13:00:00' },
  { value: 5, text: '14:00:00' },
  { value: 6, text: '15:00:00' },
  { value: 7, text: '16:00:00' },
  { value: 8, text: '17:00:00' }
];

export default class AddConsultationHours extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: '',
      timeFrom: '',
      timeFromValue: '',
      timeTo: '',
      place: '',
      attachmentLink: ''
    };

    this.handleChangeDays = this.handleChangeDays.bind(this);
    this.handleChangeTimeFrom = this.handleChangeTimeFrom.bind(this);
    this.handleChangeTimeTo = this.handleChangeTimeTo.bind(this);
    this.handleChangePlace = this.handleChangePlace.bind(this);
    this.uploadAttachment = this.uploadAttachment.bind(this);

    this.startAdd = this.startAdd.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleChangeDays(e) {
    this.setState({ days: e.target.value });
  }

  handleChangeTimeTo(e) {
    this.setState({ timeTo: e.target.value });
  }

  handleChangeTimeFrom(e) {
    this.setState({ timeFrom: e.target.value });

    var index;
    for (index = 0; index < timeIndex; index++) {
      if (optionsTimeFrom[index].text === e.target.value) {
        this.setState({ timeFromValue: optionsTimeFrom[index].value });
      }
    }
  }

  handleChangePlace(e) {
    this.setState({ place: e.target.value });
  }

  handleLogout(e){
    e.preventDefault();
    Api.logout();
    this.props.history.push('../..');
  }

  uploadAttachment(e) {
    //this.setState({ attachmentLink: ???});
  }

  startAdd(e) {
    e.preventDefault();
    Api.addConsultation({
      consultation_start_time: this.state.timeFrom,
      consultation_end_time: this.state.timeTo,
      consultation_place: this.state.place,
      day: this.state.days
    })
      .then(result =>{
        this.props.history.push('./view'); //change to profile later!!
        alert('Consultation Hours successfully added!');
      })
      .catch(e => alert('Error adding new consultation hour!'));
  }

  render() {

    return (
      <div className="App-header">
        <div>
          <NavBar {...this.props} />
        </div>
        <div className="bodyDiv">
          <div
            class="ui piled very padded text left aligned container segment"
            color="teal">
            <div>
              <h2 class="ui blue header">ADD CONSULTATION HOURS</h2>
            </div>

            <Divider hidden="true" />

            <p>
              <GenericDropdown
                labelHeader="Day"
                labelProper="Choose Day of Consultation"
                value={this.state.days}
                handler={this.handleChangeDays}
                options={optionsDays}
              />
            </p>

            <p>
              <GenericDropdown
                labelHeader="Time From"
                labelProper="Choose Start Time of Consultation"
                value={this.state.timeFrom}
                handler={this.handleChangeTimeFrom}
                options={optionsTimeFrom}
              />
            </p>

            <p>
              <ConsultationHourSubTypeDropdown
                value={this.state.timeTo}
                handler={this.handleChangeTimeTo}
                options={optionsTimeTo}
                timeFromValue={this.state.timeFromValue}
              />
            </p>

            <p>
              <a class="ui small header"> Place </a>
              <div class="ui input fluid mini focus">
                <input type="text" onChange={this.handleChangePlace} />
              </div>
            </p>
            <Divider hidden="true" />
            <div class="ui center aligned container">
              <button class="ui blue button" onClick={this.uploadAttachment}>
                Upload Attachments
              </button>
              <button class="ui blue button" onClick={this.startAdd}>
                Add Consultation Hours
              </button>
            </div>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
