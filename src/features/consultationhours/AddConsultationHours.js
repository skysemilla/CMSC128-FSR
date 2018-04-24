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

const placeRegex = /^[A-Za-z0-9][A-Za-z0-9.-\s]+$/;

export default class AddConsultationHours extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day: '',
      consultation_start_time: '',
      consultation_end_time: '',
      consultation_place: '',
      emp_id: '',
      validPlace: false
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
    if (e.target.value === '' || !e.target.value.match(placeRegex)) {
      this.setState({ validPlace: false });
    } else this.setState({ validPlace: true });
  }

  startAdd(e) {
    e.preventDefault();
    console.log(this.state);
    if (
      this.state.day !== '' &&
      this.state.consultation_start_time !== '' &&
      this.state.consultation_end_time !== '' &&
      this.state.validPlace === true
    ) {
      Api.addConsultation({
        consultation_start_time: this.state.consultation_start_time,
        consultation_end_time: this.state.consultation_end_time,
        consultation_place: this.state.consultation_place,
        day: this.state.day,
        emp_id: this.state.emp_id
      })

        .then(result => {
          this.props.history.push('./view');
          alert('Successfully added Consultation Hours');
        })
        .catch(e => alert('Error adding new Consultation!'));
    } else alert('Invalid Input');
  }

  render() {
    return (
      <div className="App-header">
        <NavBar {...this.props} />
        <div
          className="ui piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 className="ui blue header">ADD CONSULTATION HOURS</h2>
          </div>

          <Divider hidden="true" />
          <div className="field">
            <label>
              <h3>
                {' '}
                Day
                {this.state.day === '' ? (
                  <div className="ui left pointing red basic label">
                    Required
                  </div>
                ) : (
                  <div className="ui left pointing green basic label">
                    is valid!
                  </div>
                )}
              </h3>
            </label>
            <GenericDropdown
              labelProper="Choose Day of Consultation"
              value={this.state.day}
              handler={this.handleChangeDay}
              options={optionsDays}
            />
          </div>

          <div className="field">
            <label>
              <h3>
                {' '}
                Time From
                {this.state.consultation_start_time === '' ? (
                  <div className="ui left pointing red basic label">
                    Required
                  </div>
                ) : (
                  <div className="ui left pointing green basic label">
                    is valid!
                  </div>
                )}
                <GenericDropdown
                  labelProper="Choose Start Time of Consultation"
                  value={this.state.consultation_start_time}
                  handler={this.handleChangeTimeFrom}
                  options={optionsTimeFrom}
                />
              </h3>
            </label>
          </div>

          <div className="field">
            <label>
              <h3>
                {' '}
                Time To
                {this.state.consultation_end_time === '' ? (
                  <div className="ui left pointing red basic label">
                    Required
                  </div>
                ) : (
                  <div className="ui left pointing green basic label">
                    is valid!
                  </div>
                )}
                <ConsultationHourSubTypeDropdown
                  value={this.state.consultation_end_time}
                  handler={this.handleChangeTimeTo}
                  options={optionsTimeTo}
                  timeFromValue={this.state.timeFromValue}
                />
              </h3>
            </label>
          </div>

          <div className="field">
            <label>
              <h3>
                {' '}
                Place
                {this.state.consultation_place === '' ? (
                  <div className="ui left pointing red basic label">
                    Required
                  </div>
                ) : (
                  [
                    this.state.consultation_place.match(placeRegex) ? (
                      <div className="ui left pointing green basic label">
                        is valid!
                      </div>
                    ) : (
                      <div className="ui left pointing red basic label">
                        Invalid Input!
                      </div>
                    )
                  ]
                )}
              </h3>
            </label>
            <div className="ui input fluid mini">
              <input type="text" onChange={this.handleChangePlace} />
            </div>
          </div>

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
