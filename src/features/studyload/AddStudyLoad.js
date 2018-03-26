import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';
import GenerateFSR from './../GenerateFSR'
import SendtoAdmin from './../SendtoAdmin'

export default class AddStudyLoad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      degree: '',
      uni: '',
      studyleave: '',
      fellowship: '',
      courseno: '',
      ccred: '',
      day: '',
      time: '',
      school: '',
      slcred: ''
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
    this.startAdd = this.startAdd.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
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

  startAdd(e) {
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
        <NavBar {...this.props}/>
        <div
          class="ui piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 class="ui blue header">
            ADD STUDY LOAD
            </h2>
          </div>
          <Divider hidden="true" />
          <p>
            <a class="ui small header">Degree Enrolled In </a>
            <div class="ui input mini focus">
              <input
                type="text"
                style={{ width: '455px' }}
                onChange={this.handleChangeDegree}
              />
            </div>
          </p>
          <p>
            <a class="ui small header"> University Enrolled In </a>
            <div class="ui input mini focus">
              <input
                type="text"
                style={{ width: '432px' }}
                onChange={this.handleChangeUni}
              />
            </div>
          </p>
          <p>
            <div class="ui form">
              <div class="inline fields">
                <label>On Full Study Leave w/ Pay?</label>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="studyleave"
                      value="YES"
                      onClick={this.handleChangeStudyLeave}
                    />
                    <label>Yes</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="studyleave"
                      value="NO"
                      onClick={this.handleChangeStudyLeave}
                    />
                    <label>No</label>
                  </div>
                </div>
              </div>
            </div>
          </p>
          <p>
            <div class="ui form">
              <div class="inline fields">
                <label>Recepient of Faculty Fellowship?</label>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="fellowship"
                      value="YES"
                      onClick={this.handleChangeFellowship}
                    />
                    <label>Yes</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="fellowship"
                      onClick={this.handleChangeFellowship}
                    />
                    <label>No</label>
                  </div>
                </div>
              </div>
            </div>
          </p>
          <p>
            <a class="ui small header">Course Number </a>
            <div class="ui input mini focus">
              <input
                type="text"
                style={{ width: '475px' }}
                onChange={this.handleChangeCourseno}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Course Credit </a>
            <div class="ui input mini focus">
              <input
                type="text"
                style={{ width: '490px' }}
                onChange={this.handleChangeCcred}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Days </a>
            <div class="ui input mini focus">
              <input
                type="text"
                style={{ width: '560px' }}
                onChange={this.handleChangeDay}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Time </a>
            <div class="ui input mini focus">
              <input
                type="text"
                style={{ width: '560px' }}
                onChange={this.handleChangeTime}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">School </a>
            <div class="ui input mini focus">
              <input
                type="text"
                style={{ width: '545px' }}
                onChange={this.handleChangeSchool}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Study Load Credits </a>
            <div class="ui input mini focus">
              <input
                type="text"
                style={{ width: '450px' }}
                onChange={this.handleChangeSlcred}
              />
            </div>
          </p>
          <div class="ui center aligned container">
            <button
              class="ui center aligned blue button"
              onClick={this.startAdd}>
              Add Study Load
            </button>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
//=========================
ReactDOM.render(<AddStudyLoad />, document.getElementById('root'));
