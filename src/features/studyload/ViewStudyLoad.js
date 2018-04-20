import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import ViewStudyLoadRow from './ViewStudyLoadRow';
import DeleteModal from '../GenericDelete';
import GenerateFSR from './../GenerateFSR';
import SendtoAdmin from './../SendtoAdmin';
import NavBar from './../ui/NavBar';

//Dummy data
const dummySample = {
  study_id: 1,
  courseno: '3',
  ccred: '201',
  day: 'TTh',
  time: '3',
  school: 'UPD',
  slcred: ' 3'
};

const dummySample2 = {
  study_id: 2,
  courseno: '3',
  ccred: '049',
  day: '3',
  time: 'MWF',
  school: 'UPM',
  slcred: ' 5'
};

const dummySample3 = {
  study_id: 3,
  courseno: '3',
  ccred: '352',
  day: '3',
  time: 'TTh',
  school: 'UPD',
  slcred: ' 3'
};

export default class ViewStudyLoad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      degree: 'NaN',
      uni: 'NaN',
      studyleave: 'No',
      fellowship: 'No',
      data: [] //dummmy data
    };

    this.startAdd = this.startAdd.bind(this);
    this.startEdit = this.startEdit.bind(this);
  }

  startAdd(e) {
    e.preventDefault();
    this.props.history.push('../studyload/add');
  }

  startEdit(e) {
    e.preventDefault();
    this.props.history.push('../studyload/editInfo');
  }
  componentDidMount() {
    Api.viewStudyLoad().then(response => {
      if (response.data.data[0] !== undefined) {
        this.setState({ data: response.data.data });
      }
      console.log(response.data.data);
    });
    Api.viewStudyCredentials().then(response => {
      if (response.data.data !== undefined) {
        this.setState({
          degree: response.data.data.degree,
          uni: response.data.data.university
        });
      }
      if (response.data.data.full_studyleave === 1) {
        this.setState({ studyleave: 'Yes' });
      }
      if (response.data.data.faculty_fellowship === 1) {
        this.setState({ fellowship: 'Yes' });
      }
      console.log(response.data.data);
    });
  }
  render() {
    return (
      <div className="App-header">
        <div>
          <NavBar {...this.props} Label="FSR" subLabel="studyload" />
        </div>
        <div className="bodyDiv">
          <div
            class="ui compact piled very padded text left aligned container segment"
            color="teal">
            <div>
              <h1 class="ui blue header">STUDY LOAD</h1>
            </div>

            <div class="ui list">
              <div class="item">
                <b>
                  <i class="right triangle icon" />Degree Enrolled In:{' '}
                </b>
                {this.state.degree}
              </div>
              <div class="item">
                <b>
                  <i class="right triangle icon" />University Enrolled In:{' '}
                </b>
                {this.state.uni}
              </div>
              <div class="item">
                <b>
                  <i class="right triangle icon" />On Full Study Leave with Pay?{' '}
                </b>
                {this.state.studyleave}
              </div>
              <div class="item">
                <b>
                  <i class="right triangle icon" />Recepient of Faculty
                  Fellowship?{' '}
                </b>
                {this.state.fellowship}
              </div>
              <button
                class="ui blue right floated button"
                onClick={this.startEdit}>
                Edit
              </button>
            </div>
            <Divider hidden="true" />
            <Divider hidden="true" />
            <Divider hidden="true" />
            <Divider hidden="true" />
            <style>
              {' '}
              {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`}{' '}
            </style>
            <table class="ui celled table">
              <thead>
                <tr>
                  <th class="center aligned"> Course Number </th>
                  <th class="center aligned"> Course Credit </th>
                  <th class="center aligned"> Day1 </th>
                  <th class="center aligned"> Day2 </th>
                  <th class="center aligned"> Start Time </th>
                  <th class="center aligned"> End Time </th>
                  <th class="center aligned"> School </th>
                  <th class="center aligned"> Attachments </th>
                  <th class="center aligned"> Edit/Delete </th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map(item => {
                  return (
                    <ViewStudyLoadRow
                      {...this.props}
                      id={item.studyload_id}
                      courseno={item.course_no}
                      ccred={item.credits}
                      day1={item.day1}
                      day2={item.day2}
                      time1={item.start_time}
                      time2={item.end_time}
                      school={item.school}
                      editURL="../studyload/edit"
                      label="Study Load"
                      subLabel="Study load"
                      deleteURL="../studyload/view"
                    />
                  );
                })}
              </tbody>
            </table>
            <button
              class="ui blue right floated button"
              onClick={this.startAdd}>
              Add Study Load
            </button>
            <Divider hidden="true" />
          </div>
        </div>
      </div>
    );
  }
}
