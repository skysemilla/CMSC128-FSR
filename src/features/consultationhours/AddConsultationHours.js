import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';
import { Divider } from 'semantic-ui-react';
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
  { value: 0, text: '8:00:00' },
  { value: 1, text: '9:00:00' },
  { value: 2, text: '10:00:00' },
  { value: 3, text: '11:00:00' },
  { value: 4, text: '12:00:00' },
  { value: 5, text: '1:00:00' },
  { value: 6, text: '2:00:00' },
  { value: 7, text: '3:00:00' },
  { value: 8, text: '4:00:00' }
];

const optionsTimeTo = [
  { value: 0, text: '9:00:00' },
  { value: 1, text: '10:00:00' },
  { value: 2, text: '11:00:00' },
  { value: 3, text: '12:00:00' },
  { value: 4, text: '1:00:00' },
  { value: 5, text: '2:00:00' },
  { value: 6, text: '3:00:00' },
  { value: 7, text: '4:00:00' },
  { value: 8, text: '5:00:00' }
];

export default class AddConsultationHours extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day: '',
      consultation_start_time: '',
      consultation_end_time: '',
      consultation_place: '',
      emp_id: ''
    };

    this.handleChangeTimeFrom = this.handleChangeTimeFrom.bind(this);
    this.handleChangeTimeTo = this.handleChangeTimeTo.bind(this);
    this.handleChangePlace = this.handleChangePlace.bind(this);
    this.handleChangeDay = this.handleChangeDay.bind(this);
    this.startAdd = this.startAdd.bind(this);
  }

  componentDidMount() {
    Api.getSession().then(result => {
      console.log(result.data.data.emp_id);
      console.log('hi bitches');
      this.setState({ emp_id: result.data.data.emp_id });
      console.log(result.data.data.emp_id);
    });
  }

  handleChangeDay(e) {
    this.setState({ day: e.target.value });
  }

  handleChangeTimeTo(e) {
    this.setState({ consultation_end_time: e.target.value });
  }

  handleChangeTimeFrom(e) {
    this.setState({ consultation_start_time: e.target.value });

    var index;
    for (index = 0; index < timeIndex; index++) {
      if (optionsTimeFrom[index].text === e.target.value) {
        this.setState({ timeFromValue: optionsTimeFrom[index].value });
      }
    }
  }

  handleChangePlace(e) {
    this.setState({ consultation_place: e.target.value });
  }

  startAdd(e) {
    e.preventDefault();
    console.log(this.state);
    Api.addConsultation({
      consultation_start_time: this.state.consultation_start_time,
      consultation_end_time: this.state.consultation_end_time,
      consultation_place: this.state.consultation_place,
      day: this.state.day,
      emp_id: this.state.emp_id
    })

      .then(result => {
        this.props.history.push('./view');
      })
      .catch(e => alert('Error adding new Consultation!'));
  }

  render() {
    return (
      <div classNameName="App-header">
        <NavBar {...this.props} />
        <div
          className="ui piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 className="ui blue header">ADD CONSULTATION HOURS</h2>
          </div>

          <Divider hidden="true" />

          <p>
            <GenericDropdown
              labelHeader="Day"
              labelProper="Choose Day of Consultation"
              value={this.state.day}
              handler={this.handleChangeDay}
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
            <a className="ui small header"> Place </a>
            <div className="ui input fluid mini focus">
              <input type="text" onChange={this.handleChangePlace} />
            </div>
          </p>
          <Divider hidden="true" />
          <div className="ui center aligned container">
            <button className="ui blue button">Upload Attachments</button>
            <button className="ui blue button" onClick={this.startAdd}>
              Add Consultation Hours
            </button>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
