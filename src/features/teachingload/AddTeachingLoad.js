import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';
import GenerateFSR from './../GenerateFSR'
import SendtoAdmin from './../SendtoAdmin'

export default class AddTeachingLoad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subj: '',
      seccode: '',
      room: '',
      days: '',
      starttime: '',
      endtime: '',
      hours: '',
      studnum: '',
      creditwo: '',
      studcred: '',
      creditw: ''
    };

    this.handleChangeSubj = this.handleChangeSubj.bind(this);
    this.handleChangeSeccode = this.handleChangeSeccode.bind(this);
    this.handleChangeRoom = this.handleChangeRoom.bind(this);
    this.handleChangeDays = this.handleChangeDays.bind(this);
    this.handleChangeStartTime = this.handleChangeStartTime.bind(this);
    this.handleChangeEndTime = this.handleChangeEndTime.bind(this);
    this.handleChangeHours = this.handleChangeHours.bind(this);
    this.handleChangeStudnum = this.handleChangeStudnum.bind(this);
    this.handleChangeCreditwo = this.handleChangeCreditwo.bind(this);
    this.handleChangeStudcred = this.handleChangeStudcred.bind(this);
    this.handleChangeCreditwith = this.handleChangeCreditwith.bind(this);
    this.startAdd = this.startAdd.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleChangeSubj(e) {
    this.setState({ subj: e.target.value });
  }

  handleChangeSeccode(e) {
    this.setState({ seccode: e.target.value });
  }

  handleChangeRoom(e) {
    this.setState({ room: e.target.value });
  }

  handleChangeDays(e) {
    this.setState({ days: e.target.value });
  }

  handleChangeStartTime(e) {
    this.setState({ starttime: e.target.value });
  }

  handleChangeEndTime(e) {
    this.setState({ endtime: e.target.value });
  }

  handleChangeHours(e) {
    this.setState({ hours: e.target.value });
  }

  handleChangeStudnum(e) {
    this.setState({ studnum: e.target.value });
  }

  handleChangeCreditwo(e) {
    this.setState({ creditwo: e.target.value });
  }

  handleChangeStudcred(e) {
    this.setState({ studcred: e.target.value });
  }

  handleChangeCreditwith(e) {
    this.setState({ creditw: e.target.value });
  }

  handleLogout(e) {
    e.preventDefault();
    Api.logout();
    this.props.history.push('../..');
  }

  startAdd(e) {
    e.preventDefault();
    Api.addTeachLoad({
      emp_id: 11, //Temporary emp_id value
      subject_code: this.state.subj,
      section_code: this.state.seccode,
      room: this.state.room,
      days: this.state.days,
      start_time: this.state.starttime,
      end_time: this.state.endtime,
      hours: this.state.hours,
      no_of_students: this.state.studnum,
      creditw: this.state.creditw
    })
      .then(result =>{
        this.props.history.push('./teachingload/view'); //change to profile later!!
        alert('Teachingload successfully added!');
      })
      // .catch(e => alert(e));
      .catch(e => alert('Error adding new Teaching Load!'));
  }

  render() {
    return (
      <div className="App-header">
        <NavBar {...this.props} Label="FSR" subLabel="teachingload"/>
        <div
          class="ui piled very padded text left aligned container segment mainDiv"
          color="teal">
          <div>
            <h2 class="ui blue header">
              ADD TEACHING LOAD
            </h2>
          </div>
          <Divider hidden="true" />
          <p>
            <a class="ui small header"> Subject</a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                onChange={this.handleChangeSubj}
              />
            </div>
          </p>
          <p>
            <a class="ui small header"> Section Code </a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                onChange={this.handleChangeSeccode}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Room </a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                onChange={this.handleChangeRoom}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Days </a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                onChange={this.handleChangeDays}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Start Time </a>
            <div class="ui input fluid mini focus">
              <input
                type="time"
                onChange={this.handleChangeStartTime}
              />
            </div>
            <a class="ui small header">End Time </a>
            <div class="ui input fluid mini focus">
              <input
                type="time"
                onChange={this.handleChangeEndTime}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Hours per Week </a>
            <div class="ui input fluid mini focus">
              <input
                type="number"
                onChange={this.handleChangeHours}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">No. of Students </a>
            <div class="ui input fluid mini focus">
              <input
                type="number"
                onChange={this.handleChangeStudnum}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Course Credit w/o Multiplier </a>
            <div class="ui input fluid mini focus">
              <input
                type="number"
                onChange={this.handleChangeCreditwo}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Student Credit Units </a>
            <div class="ui input fluid mini focus">
              <input
                type="number"
                onChange={this.handleChangeStudcred}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Teaching Load Credits w/ Multiplier </a>
            <div class="ui input fluid mini focus">
              <input
                type="number"
                onChange={this.handleChangeCreditwith}
              />
            </div>
          </p>
          <div class="ui center aligned container">
            <button
              class="ui center aligned blue button"
              onClick={this.startAdd}>
              Add Teaching Load
            </button>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
//=========================
ReactDOM.render(<AddTeachingLoad />, document.getElementById('root'));
