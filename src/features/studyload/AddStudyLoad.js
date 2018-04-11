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
      day: '',
      time: '',
      school: '',
      slcred: '',
      attachmentLink: ''
    };

    this.handleChangeCourseno = this.handleChangeCourseno.bind(this);
    this.handleChangeCcred = this.handleChangeCcred.bind(this);
    this.handleChangeDay = this.handleChangeDay.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleChangeSchool = this.handleChangeSchool.bind(this);
    this.handleChangeSlcred = this.handleChangeSlcred.bind(this);
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
    this.setState({ day: e.target.value });
  }

  handleChangeTime(e) {
    this.setState({ time: e.target.value });
  }

  handleChangeSchool(e) {
    this.setState({ school: e.target.value });
  }

  handleChangeSlcred(e) {
    this.setState({ slcred: e.target.value });
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
      credits: this.state.slcred,
      courseno: this.state.courseno,
      no_of_days: this.state.day,
      start_time: this.state.time,
      school: this.state.school
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
              <a class="ui small header">Days </a>
              <div class="ui input fluid mini focus">
                <input type="text" onChange={this.handleChangeDay} />
              </div>
            </p>
            <p>
              <a class="ui small header">Time </a>
              <div class="ui input fluid mini focus">
                <input type="time" onChange={this.handleChangeTime} />
              </div>
            </p>
            <p>
              <a class="ui small header">School </a>
              <div class="ui input fluid mini focus">
                <input type="text" onChange={this.handleChangeSchool} />
              </div>
            </p>
            <p>
              <a class="ui small header">Study Load Credits </a>
              <div class="ui input fluid mini focus">
                <input type="number" onChange={this.handleChangeSlcred} />
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
