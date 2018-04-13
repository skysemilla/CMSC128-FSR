import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../../api';
import NavBar from './../ui/NavBarAdmin';
import GenerateFSR from './../../GenerateFSR'
import SendtoAdmin from './../../SendtoAdmin'

export default class EditStudyLoad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      degree : 'MSCS', 
      uni : 'UPLB', 
      studyleave : 'No',
      fellowship : 'Yes', 
      courseno:  '3',
      ccred : '201', 
      day : 'TTh', 
      time : '3', 
      school : ' ', 
      slcred : ' 3'
    };

    this.handleChangeDegree = this.handleChangeDegree.bind(this);
    this.handleChangeUni = this.handleChangeUni.bind(this);
    this.handleChangeStudyLeave = this.handleChangeStudyLeave.bind(this);
    this.handleChangeFellowship = this.handleChangeFellowship.bind(this);
    this.handleChangeCourseno = this.handleChangeCourseno.bind(this);
    this.handleChangeCcred = this.handleChangeCcred.bind(this);
    this.handleChangeDay = this.handleChangeDay.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleChangeSchool = this.handleChangeSchool.bind(this);
    this.handleChangeSlcred = this.handleChangeSlcred.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.startEdit = this.startEdit.bind(this);
  }

  handleChangeDegree(e) {
    this.setState({ degree: e.target.value });
  }

  handleChangeUni(e) {
    this.setState({ uni: e.target.value });
  }

  handleChangeStudyLeave(e) {
    this.setState({ studyleave: e.target.value });
  }

  handleChangeFellowship(e) {
    this.setState({ fellowship: e.target.value });
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

  handleLogout(e) {
    e.preventDefault();
    Api.logout();
    this.props.history.push('../..');
  }

  startEdit(e) {
    //   e.preventDefault();
    //   Api.addstudyload({
    // degree: this.state.degree,
    // uni: this.state.uni,
    // studyleave: this.state.studyleave,
    // fellowship: this.state.fellowship,
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
        <div>
        <NavBar {...this.props} Label="edit" subLabel="studyload"/>
        </div>
        <div className="bodydiv">
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
            <a class="ui small header">Degree Enrolled In </a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                value={this.state.degree}
                placeholder={this.state.degree}
                onChange={this.handleChangeDegree}
              />
            </div>
          </p>
          <p>
            <a class="ui small header"> University Enrolled In </a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                value={this.state.uni}
                placeholder={this.state.uni}
                onChange={this.handleChangeUni}
              />
            </div>
          </p>
          <p>
            <div class="ui form" onChange={this.handleChangeStudyLeave}>
              <div class="inline fields">
                <label>On Full Study Leave w/ Pay?</label>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input type="radio" name="studyleave" />
                    <label>Yes</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input type="radio" name="studyleave" />
                    <label>No</label>
                  </div>
                </div>
              </div>
            </div>
          </p>
          <p>
            <div class="ui form" onChange={this.handleChangeFellowship}>
              <div class="inline fields">
                <label>Recepient of Faculty Fellowship?</label>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input type="radio" name="fellowship" />
                    <label>Yes</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input type="radio" name="fellowship" />
                    <label>No</label>
                  </div>
                </div>
              </div>
            </div>
          </p>
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
            <button
              class="ui center aligned blue button"
              onClick={this.startEdit}>
              Save changes
            </button>
          </div>
        </div>
        <Divider hidden="true" />
        </div>
      </div>
    );
  }
}