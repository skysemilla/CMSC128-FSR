import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';
import { Divider } from 'semantic-ui-react';

const timeIndex = 8;

const optionsTimeFrom = [
  { value: 0, text: '8:00 A.M' },
  { value: 1, text: '9:00 A.M' },
  { value: 2, text: '10:00 A.M' },
  { value: 3, text: '11:00 A.M' },
  { value: 4, text: '12:00 NN' },
  { value: 5, text: '1:00 P.M' },
  { value: 6, text: '2:00 P.M' },
  { value: 7, text: '3:00 P.M' },
  { value: 8, text: '4:00 P.M' }
];

export default class EditConsultationHours extends Component {
  constructor(props) {
    super(props);

    this.state = {
      consultation_start_time: '',
      consultation_end_time: '',
      consultation_place: '',
      day: '',
      emp_id: '',
      consultation_id: ''
    };

    this.handleChangePlace = this.handleChangePlace.bind(this);
    this.handleChangeConsultation_start_time = this.handleChangeConsultation_start_time.bind(this);
    this.handleChangeConsultation_end_time = this.handleChangeConsultation_end_time.bind(this);
    this.handleChangeConsultation_place = this.handleChangeConsultation_place.bind(this);
    this.handleChangeDay = this.handleChangeDay.bind(this);
    this.startAdd = this.startAdd.bind(this);
  }

  componentDidMount() {
    Api.getSession().then(result => {
      if (result.data.data !== null) {
        this.setState({ emp_id: result.data.data.emp_id });
        if (typeof this.props.history !== 'undefined') {
          Api.viewConsultation({
            id : result.data.data.emp_id
          })
            .then(result => {
              console.log(result);
              this.setState({
                emp_id : result.data.data[0].emp_id,
                prev_consultation_start_time: result.data.data[0].consultation_start_time,
                prev_consultation_end_time: result.data.data[0].consultation_end_time,
                prev_day: result.data.data[0].prev_day,
                consultation_id: result.data.data[0].consultation_id
              });

            /*  console.log(result.data.data.emp_id );
              if(result.data.data.emp_id == "000000003")
              {
                console.log("hi" );
              }
            */
            })
        }
      }
    });
  }

  handleChangeConsultation_end_time(e) {
    this.setState({ consultation_end_time: e.target.value });
  }

  handleChangeConsultation_place(e) {
    this.setState({ consultation_place: e.target.value });
  }

  handleChangeDay(e) {
    this.setState({ day: e.target.value });
  }

  handleChangeConsultation_start_time(e) {
    this.setState({ consultation_start_time: e.target.value });

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

  startAdd(e) {
    e.preventDefault();
    Api.editConsultation({
      consultation_start_time: "10:00:00",
      consultation_end_time: "11:00:00",
      consultation_place: this.state.consultation_place,
      day: "Tuesday",
      emp_id: this.state.emp_id, 
      consultation_id: this.state.consultation_id,
    })
      .then(result => {
        this.props.history.push('./publications/view'); //change to profile later!!
        alert('Consultation successfully added!');
      })
      .catch(e => alert('Error adding new Consultation!'));
  }

  render() {
    return (
      <div className="App-header">
        <NavBar {...this.props} />
        <div
          className="ui piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 className="ui blue header">EDIT CONSULTATION HOURS</h2>
          </div>
          <Divider hidden="true" />
          <div>
            <div>
              <a className="ui small header"> Days </a>
              <p>
                <div className="ui checkbox">
                  <input
                    type="checkbox"
                    value="MON"
                    onClick={this.handleChangeDay}
                  />
                  <label> Monday </label>
                </div>
                <br />

                <div className="ui checkbox">
                  <input
                    type="checkbox"
                    value="TUE"
                    onClick={this.handleChangeDay}
                  />
                  <label> Tuesday </label>
                </div>
                <br />

                <div className="ui checkbox">
                  <input
                    type="checkbox"
                    value="WED"
                    onClick={this.handleChangeDay}
                  />
                  <label> Wednesday </label>
                </div>

                <br />
                <div className="ui checkbox">
                  <input
                    type="checkbox"
                    value="THU"
                    onClick={this.handleChangeDay}
                  />
                  <label> Thursday </label>
                </div>

                <br />
                <div className="ui checkbox">
                  <input
                    type="checkbox"
                    value="FRI"
                    onClick={this.handleChangeDay}
                  />
                  <label> Friday </label>
                </div>
              </p>
            </div>

            <p>
              <a className="ui small header"> Time </a>
              <div className="ui input fluid mini focus">
                <input type="time" />
              </div>
            </p>

            <p>
              <a className="ui small header"> Place </a>
              <div className="ui input fluid mini focus">
                <input type="text" onChange={this.handleChangePlace} />
              </div>
            </p>
            <Divider hidden="true" />
          </div>
          <div className="ui center aligned container">
            <button className="ui blue button" onClick={this.startAdd}>
              Edit Consultation Hours
            </button>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
