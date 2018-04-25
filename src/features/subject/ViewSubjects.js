import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import ViewSubjectsRow from './SubjectsViewRow';
import NavBar from './../ui/NavBar';
import * as Api from '../../api';

export default class ViewSubjects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [] //dummmy data
    };

    this.startAdd = this.startAdd.bind(this);
  }
  componentDidMount() {
    Api.viewAllSubjects().then(response => {
      if (response.data.data[0] !== undefined) {
        this.setState({ data: response.data.data });
      }
      console.log(response.data.data);
    });
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
            className="ui compact piled very padded text left aligned container segment mainDiv"
            color="teal">
            <div>
              <h1 className="ui blue header">SUBJECTS</h1>
            </div>
            <Divider hidden="true" />

            <style>
              {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`}{' '}
            </style>
            <div className="scrollTable">
              <table className="ui celled table">
                <thead>
                  <tr>
                    <th className="center aligned"> Subject Code </th>
                    <th className="center aligned"> Section Code </th>
                    <th className="center aligned"> isLecture </th>
                    <th className="center aligned"> Graduate Course? </th>
                    <th className="center aligned"> Units </th>
                    <th className="center aligned"> Room </th>
                    <th className="center aligned"> Start Time </th>
                    <th className="center aligned"> End Time </th>
                    <th className="center aligned"> Edit/Delete </th>
                  </tr>
                </thead>

                <tbody>
                  {this.state.data.map(item => {
                    var typeView = 'Lecture';
                    var grad = 'Yes';
                    if (item.isLecture === 0) {
                      typeView = 'Lab';
                    }

                    if (item.isGraduate === 0) {
                      grad = 'No';
                    }
                    return (
                      <ViewSubjectsRow
                        {...this.props}
                        id={item.subject_id}
                        subjcode={item.subject_code}
                        seccode={item.section_code}
                        type={typeView}
                        gradcourse={grad}
                        units={item.units}
                        room={item.room}
                        starttime={item.start_time}
                        endtime={item.end_time}
                        editURL="../subjects/edit"
                        deleteURL="../subjects/view"
                        label="Subject"
                        subLabel="subject"
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
            <button
              className="ui blue right floated button"
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
