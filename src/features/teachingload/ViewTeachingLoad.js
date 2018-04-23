import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import ViewTeachingLoadRow from './TeachingLoadViewRow';
import NavBar from './../ui/NavBar';

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
            className="ui compact piled very padded text left aligned container segment mainDiv"
            color="teal">
            <div>
              <h1 className="ui blue header">TEACHING LOAD</h1>
            </div>
            <style>
              {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`}{' '}
            </style>
            <div>
              <div className="scrollTable">
              <table className="ui celled table">
                <thead>
                  <tr>
                    <th className="center aligned"> Subject Code </th>
                    <th className="center aligned"> Section Code </th>
                    <th className="center aligned"> Room </th>
                    <th className="center aligned"> Days </th>
                    <th className="center aligned"> Start Time </th>
                    <th className="center aligned"> End Time </th>
                    {/*  <th className="center aligned"> Hours Per Week </th> */}
                    <th className="center aligned"> No. Of Students </th>
                    {/*  <th className="center aligned"> Course Credit </th> */}
                    {/*  <th className="center aligned"> Student Credit Units </th> */}
                    {/* <th className="center aligned"> 
                  {' '}
                  Teaching load credits with Multiplier{' '}
                </th>*/}
                    <th className="center aligned"> Edit/Delete </th>
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
                        days={item.day}
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
              </div>
              <button
                className="ui blue right floated button"
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
