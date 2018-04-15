import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import ViewConsultationHoursRow from './ViewConsultationHoursRow';
import DeleteModal from '../GenericDelete';
import GenerateFSR from './../GenerateFSR';
import SendtoAdmin from './../SendtoAdmin';
import NavBar from './../ui/NavBar';

//Dummy data
const dummySample = {
  consultation_id: 1,
  days: ['MON', 'TUE', 'WED'],
  time: '2 P.M - 4 P.M',
  place: 'ICSMH'
};
const dummySample2 = {
  consultation_id: 2,
  days: ['FRI', 'THU'],
  time: '2 P.M - 4 P.M',
  place: 'ICSLH2'
};
const dummySample3 = {
  consultation_id: 3,
  days: ['MON'],
  time: '2 P.M - 4 P.M',
  place: 'ICSLH3'
};

export default class ViewConsultationHours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [dummySample, dummySample2, dummySample3] //dummmy data
    };

    this.startAdd = this.startAdd.bind(this);
  }

  startAdd(e) {
    e.preventDefault();
    this.props.history.push('../consultationhours/add');
  }

  render() {
    return (
      <div className="App-header">
        <div>
          <NavBar {...this.props} Label="FSR" subLabel="consultation" />
        </div>
        <div className="bodyDiv">
          <div
            class="ui compact piled very padded text left aligned container segment"
            color="teal">
            <div>
              <h1 class="ui blue header">CONSULTATION HOURS</h1>
            </div>
            <Divider hidden="true" />

            <style>
              {' '}
              {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`}{' '}
            </style>
            <table class="ui celled table">
              <thead>
                <tr>
                  <th class="center aligned"> Days </th>
                  <th class="center aligned"> Time </th>
                  <th class="center aligned"> Place </th>
                  <th class="center aligned"> Attachments </th>
                  <th class="center aligned"> Edit/Delete </th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map(item => {
                  return (
                    <ViewConsultationHoursRow
                      {...this.props}
                      id={item.consultation_id}
                      days={item.days}
                      time={item.time}
                      place={item.place}
                      editURL="../consultationhours/edit"
                      label="Consultation Hours"
                      subLabel="Consultation Hours"
                    />
                  );
                })}
              </tbody>
            </table>
            <button
              class="ui blue right floated button"
              onClick={this.startAdd}>
              Add Consultation Hours
            </button>
            <Divider hidden="true" />
          </div>
        </div>
      </div>
    );
  }
}
