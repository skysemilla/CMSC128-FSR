import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import ViewSubjectsRow from './SubjectsViewRow';
import GenerateFSR from './../GenerateFSR';
import SendtoAdmin from './../SendtoAdmin';
import NavBar from './../ui/NavBar';

const dummySample = {
  subjid: '1',
  subjcode: 'CMSC 128',
  seccode: 'A',
  type: 'Lecture',
  gradcourse: 'No',
  units: '3',
  room: 'ICSMH',
  starttime: '7:00AM',
  endtime: '8:00AM'
};

export default class ViewSubjects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [dummySample] //dummmy data
    };

    this.startAdd = this.startAdd.bind(this);
  }
  componentDidMount() {
    // Api.viewSubjects().then(response => {
    //   if (response.data.data[0] !== undefined) {
    //     this.setState({ data: response.data.data });
    //   }
    //   console.log(response.data.data);
    // });
  }

  startAdd(e) {
    e.preventDefault();
    this.props.history.push('../subjects/add', {
      emp_id: this.state.emp_id
    });
  }

  render() {
    return (
      <div className="App-header">
        <div>
          <NavBar
            {...this.props}
            emp_id={this.state.emp_id}
            Label="FSR"
            subLabel="subjects"
          />
        </div>
        <div className="bodyDiv">
          <div
            class="ui compact piled very padded text left aligned container segment mainDiv"
            color="teal">
            <div>
              <h1 class="ui blue header">SUBJECTS</h1>
            </div>
            <Divider hidden="true" />

            <style>
              {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`}{' '}
            </style>
            <table class="ui celled table">
              <thead>
                <tr>
                  <th class="center aligned"> Subject ID </th>
                  <th class="center aligned"> Subjcect Code </th>
                  <th class="center aligned"> Section Code </th>
                  <th class="center aligned"> Type </th>
                  <th class="center aligned"> Graduate Course? </th>
                  <th class="center aligned"> Units </th>
                  <th class="center aligned"> Room </th>
                  <th class="center aligned"> Start Time </th>
                  <th class="center aligned"> End Time </th>
                  <th class="center aligned"> Edit/Delete </th>
                </tr>
              </thead>

              <tbody>
                {this.state.data.map(item => {
                  return (
                    <ViewSubjectsRow
                      {...this.props}
                      id={this.state.emp_id}
                      subjid={item.subjid}
                      subjcode={item.subjcode}
                      seccode={item.seccode}
                      type={item.type}
                      gradcourse={item.gradcourse}
                      units={item.units}
                      room={item.room}
                      starttime={item.starttime}
                      endtime={item.endtime}
                      editURL="../subjects/edit"
                      label="Subject"
                      subLabel="subject"
                    />
                  );
                })}
              </tbody>

            </table>
            <button
              class="ui blue right floated button"
              onClick={this.startAdd}>
              Add Subject
            </button>
            <Divider hidden="true" />
          </div>
        </div>
      </div>
    );
  }
}
