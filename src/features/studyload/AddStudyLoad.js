import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';
import GenerateFSR from './../GenerateFSR';
import SendtoAdmin from './../SendtoAdmin';

export default class AddStudyLoad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courseno: '',
      ccred: '',
      day1: '',
      day2: '',
      time1: '',
      time2: '',
      school: '',
      attachmentLink: ''
    };

    this.handleChangeCourseno = this.handleChangeCourseno.bind(this);
    this.handleChangeCcred = this.handleChangeCcred.bind(this);
    this.handleChangeDay = this.handleChangeDay.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleChangeDay2 = this.handleChangeDay2.bind(this);
    this.handleChangeTime2 = this.handleChangeTime2.bind(this);
    this.handleChangeSchool = this.handleChangeSchool.bind(this);
    this.uploadAttachment = this.uploadAttachment.bind(this);

    this.startAdd = this.startAdd.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleChangeCourseno(e) {
    this.setState({ courseno: e.target.value });
  }

  handleChangeCcred(e) {
    this.setState({ ccred: e.target.value });
  }

  handleChangeDay(e) {
    this.setState({ day1: e.target.value });
  }

  handleChangeTime(e) {
    this.setState({ time1: e.target.value });
  }
  handleChangeDay2(e) {
    this.setState({ day2: e.target.value });
  }

  handleChangeTime2(e) {
    this.setState({ time2: e.target.value });
  }
  handleChangeSchool(e) {
    this.setState({ school: e.target.value });
  }


  uploadAttachment(e) {
    //this.setState({ attachmentLink: ???});
  }

  handleLogout(e) {
    e.preventDefault();
    Api.logout();
    this.props.history.push('../..');
  }

  startAdd(e) {
    e.preventDefault();
    Api.addStudyLoad({
      credits: this.state.ccred,
      courseno: this.state.courseno,
      start_time: this.state.time1,
      end_time: this.state.time2,
      school: this.state.school,
      day1: this.state.day1,
      day2:this.state.day2
    })
      .then(result => {
        this.props.history.push('./view'); //change to profile later!!
        alert('Studylooad successfully added!');
      })
      .catch(e => alert('Error adding new Study Load!'));
  }

  render() {
    return (
      <div className="App-header">
        <div>
          <NavBar {...this.props} Label="FSR" subLabel="studyload" />
        </div>
        <div className="bodyDiv">
          <div
            class="ui piled very padded text left aligned container segment"
            color="teal">
            <div>
              <h2 class="ui blue header">ADD STUDY LOAD</h2>
            </div>
            <Divider hidden="true" />
            <p>
              <a class="ui small header">Course Number </a>
              <div class="ui input fluid mini focus">
                <input type="text" onChange={this.handleChangeCourseno} />
              </div>
            </p>
            <p>
              <a class="ui small header">Course Credit </a>
              <div class="ui input fluid mini focus">
                <input type="number" onChange={this.handleChangeCcred} />
              </div>
            </p>
            <p>
              <a class="ui small header">Day 1</a>
              <div class="ui input fluid mini focus">
                <input type="text" onChange={this.handleChangeDay} />
              </div>
            </p>
            <p>
              <a class="ui small header">Day 2</a>
              <div class="ui input fluid mini focus">
                <input type="text" onChange={this.handleChangeDay2} />
              </div>
            </p>
            <p>
              <a class="ui small header">Start time </a>
              <div class="ui input fluid mini focus">
                <input type="time" onChange={this.handleChangeTime} />
              </div>
            </p>
            <p>
              <a class="ui small header">End Time </a>
              <div class="ui input fluid mini focus">
                <input type="time" onChange={this.handleChangeTime2} />
              </div>
            </p>

            <p>
              <a class="ui small header">School </a>
              <div class="ui input fluid mini focus">
                <input type="text" onChange={this.handleChangeSchool} />
              </div>
            </p>
            <div class="ui center aligned container">
              <button class="ui blue button" onClick={this.uploadAttachment}>
                Upload Attachments
              </button>
              <button
                class="ui center aligned blue button"
                onClick={this.startAdd}>
                Add Study Load
              </button>
            </div>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
