import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';
import GenerateFSR from './../GenerateFSR'
import SendtoAdmin from './../SendtoAdmin'

export default class EditStudyLoad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courseno:  '',
      credits: 0,
      start_time: '',
      school:'',
      no_of_days: 0
    };

    this.handleChangeCourseno = this.handleChangeCourseno.bind(this);
    this.handleChangeCcred = this.handleChangeCcred.bind(this);
    this.handleChangeDay = this.handleChangeDay.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleChangeSchool = this.handleChangeSchool.bind(this);
    this.handleChangeSlcred = this.handleChangeSlcred.bind(this);
    this.uploadAttachment = this.uploadAttachment.bind(this);

    this.handleLogout = this.handleLogout.bind(this);
    this.startEdit = this.startEdit.bind(this);
  }

  handleChangeCourseno(e) {
    this.setState({ courseno: e.target.value });
  }

  handleChangeCcred(e) {
    this.setState({ credits: e.target.value });
  }

  handleChangeDay(e) {
    this.setState({ no_of_days: e.target.value });
  }

  handleChangeTime(e) {
    this.setState({ start_time: e.target.value });
  }

  handleChangeSchool(e) {
    this.setState({ school: e.target.value });
  }

  handleChangeSlcred(e) {
    this.setState({ slcred: e.target.value });
  }

  uploadAttachment(e){
    //this.setState({ attachmentLink: ???});
  }

  componentDidMount(){
    if(typeof this.props.history!=='undefined'){
      console.log(this.props.history.location.state.id);
    }
    Api.viewByStudyloadId(this.state.id).then(
      (response)=>{
        this.setState(
          {courseno:response.course_no},
          {credits:response.credits},
          {start_time:response.start_time},
          {school:response.school},
          {no_of_days:response.no_of_days});
      }
    ).then(
      console.log(this.state)
    )
  }

  handleLogout(e) {
    e.preventDefault();
    Api.logout();
    this.props.history.push('../..');
  }

  startEdit(e) {
    console.log(this.props.location.state)
      e.preventDefault();
      Api.editStudyLoad({
        studyload_id: this.props.history.location.state.id,
        courseno:  this.state.courseno,
        credits: this.state.credits,
        start_time: this.state.start_time,
        school: this.state.school,
        no_of_days: this.state.no_of_days
        })
        .then(result => {
          this.props.history.push('./view');  //change to profile later!!
          alert('Study load successfully edited!');
        })
        .catch(e => alert('Error editting new Study Load!'));
  }

  render() {
    return (
      <div className="App-header">
        <NavBar {...this.props} Label="FSR" subLabel="studyload"/>
        <div
          class="ui piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 class="ui blue header">
              EDIT STUDY LOAD
            </h2>
          </div>
          <Divider hidden="true" />
          <p>
            <a class="ui small header">Course Number </a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                value={this.state.courseno}
                placeholder={this.state.courseno}
                onChange={this.handleChangeCourseno}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Course Credit </a>
            <div class="ui input fluid mini focus">
              <input
                type="number"
                value={this.state.credits}
                placeholder={this.state.credits}
                onChange={this.handleChangeCcred}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Days </a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                value={this.state.no_of_days}
                placeholder={this.state.no_of_days}
                onChange={this.handleChangeDay}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Time </a>
            <div class="ui input fluid mini focus">
              <input
                type="time"
                value={this.state.start_time}
                placeholder={this.state.start_time}
                onChange={this.handleChangeTime}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">School </a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                value={this.state.school}
                placeholder={this.state.school}
                onChange={this.handleChangeSchool}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Study Load Credits </a>
            <div class="ui input fluid mini focus">
              <input
                type="number"
                value={this.state.slcred}
                placeholder={this.state.slcred}
                onChange={this.handleChangeSlcred}
              />
            </div>
          </p>
          <div class="ui center aligned container">
            <button class="ui blue button" onClick = {this.uploadAttachment}>Upload Attachments</button>
            <button
              class="ui center aligned blue button"
              onClick={this.startEdit}>
              Save changes
            </button>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
