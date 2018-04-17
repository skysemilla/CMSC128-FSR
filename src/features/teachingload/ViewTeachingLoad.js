import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import ViewTeachingLoadRow from './TeachingLoadViewRow';
import DeleteModal from '../GenericDelete';
import GenerateFSR from './../GenerateFSR';
import SendtoAdmin from './../SendtoAdmin';
import NavBar from './../ui/NavBar';

//Dummy data
const dummySample = {
  seccode: 'CMSC 128',
  room: 'CAS B04',
  days: 'T-Th',
  starttime: '4pm',
  endtime: '7pm',
  hours: '3',
  studnum: '49',
  creditwo: '3',
  studcred: '3',
  creditw: ' 3'
};

const dummySample2 = {
  seccode: 'CMSC 127',
  room: 'CAS B04',
  days: 'T-Th',
  starttime: '4pm',
  endtime: '7pm',
  hours: '3',
  studnum: '49',
  creditwo: '3',
  studcred: '3',
  creditw: ' 3'
};

const dummySample3 = {
  seccode: 'CMSC 129',
  room: 'CAS B04',
  days: 'T-Th',
  starttime: '4pm',
  endtime: '7pm',
  hours: '3',
  studnum: '49',
  creditwo: '3',
  studcred: '3',
  creditw: ' 3'
};

export default class ViewTeachingLoad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [] //dummmy data
    };

    this.startAdd = this.startAdd.bind(this);
  }
  componentDidMount() {
    Api.viewTeachLoad().then(response => {
      if (response.data.data[0] !== undefined) {
        this.setState({ data: response.data.data });
      }
      console.log(response.data.data);
    });
  }

  startAdd(e) {
    e.preventDefault();
    this.props.history.push('../teachingload/add', {
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
            subLabel="teachingload"
          />
        </div>
        <div className="bodyDiv">
          <div
            class="ui compact piled very padded text left aligned container segment mainDiv"
            color="teal">
            <div>
              <h1 class="ui blue header">TEACHING LOAD</h1>
            </div>
            <Divider hidden="true" />
            <style>
              {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`}{' '}
            </style>
            <div>
              <table class="ui celled table">
                <thead>
                  <tr>
                    <th class="center aligned"> Subject Code </th>
                    <th class="center aligned"> Section Code </th>
                    <th class="center aligned"> Room </th>
                    {/* <th class="center aligned"> Days </th> */}
                    <th class="center aligned"> Start Time </th>
                    <th class="center aligned"> End Time </th>
                    {/*  <th class="center aligned"> Hours Per Week </th> */}
                    <th class="center aligned"> No. Of Students </th>
                    {/*  <th class="center aligned"> Course Credit </th> */}
                    {/*  <th class="center aligned"> Student Credit Units </th> */}
                    {/* <th class="center aligned"> 
                  {' '}
                  Teaching load credits with Multiplier{' '}
                </th>*/}
                    <th class="center aligned"> Edit/Delete </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map(item => {
                    return (
                      <ViewTeachingLoadRow
                        {...this.props}
                        id={item.teachingload_id}
                        subj={item.subject_code}
                        seccode={item.section_code}
                        room={item.room}
                        days={item.days}
                        starttime={item.start_time}
                        endtime={item.end_time}
                        hours={item.hours}
                        studnum={item.no_of_students}
                        creditwo={item.creditwo}
                        studcred={item.studcred}
                        creditw={item.creditw}
                        editURL="../teachingload/edit"
                        deleteURL="../teachingload/view"
                        label="Teaching Load"
                        subLabel="teaching load"
                      />
                    );
                  })}
                </tbody>
              </table>
              <button
                class="ui blue right floated button"
                onClick={this.startAdd}>
                Add Teaching Load
              </button>
              <Divider hidden="true" />
            </div>
            <Divider hidden="true" />
          </div>
        </div>
      </div>
    );
  }
}
