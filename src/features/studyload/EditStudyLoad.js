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
      ccred : '', 
      day : '', 
      time : '', 
      school : '', 
      slcred : '',
      attachmentLink : ''
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

  uploadAttachment(e){
    //this.setState({ attachmentLink: ???});
  }

  componentDidMount(){
    if(typeof this.props.history!=='undefined'){
      console.log(this.props.history.location.state.id);
    }
  }

  handleLogout(e) {
    e.preventDefault();
    Api.logout();
    this.props.history.push('../..');
  }

  startEdit(e) {
    //   e.preventDefault();
    //   Api.addstudyload({
    // courseno: this.state.courseno,
    // ccred: this.state.ccred,
    // day: this.state.day,
    // time: this.state.time,
    // school: this.state.school,
    // slcred: this.state.slcred
    //   })
    //     .then(result => {
    //       this.props.history.push('./studyload/view');  //change to profile later!!
    //       alert('Study load successfully added!');
    //     })
    //     .catch(e => alert('Error adding new Study Load!'));
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
                value={this.state.ccred}
                placeholder={this.state.ccred}
                onChange={this.handleChangeCcred}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Days </a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                value={this.state.day}
                placeholder={this.state.day}
                onChange={this.handleChangeDay}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Time </a>
            <div class="ui input fluid mini focus">
              <input
                type="time"
                value={this.state.time}
                placeholder={this.state.time}
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
