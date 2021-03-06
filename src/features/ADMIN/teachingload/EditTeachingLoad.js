import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../../api';
import NavBar from './../ui/NavBarAdmin';

export default class EditTeachingLoad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subj: 'CMSC 128',
      seccode: 'CMSC 128',
      room: 'CAS B04',
      days: 'T-Th',
      starttime: '4pm',
      endtime: '7pm',
      hours: '3',
      studnum: '49',
      creditwo: '3',
      studcred: '3',
      creditw: '3'
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
    this.handleLogout = this.handleLogout.bind(this);
    this.startEdit = this.startEdit.bind(this);
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

  startEdit(e) {
    // e.preventDefault();
    // Api.addteachingload({
    //   subj: this.state.subj,
    //   seccode: this.state.seccode,
    //   room: this.state.room,
    //   days: this.state.days,
    //   starttime: this.state.starttime,
    //   endtime: this.state.endtime,
    //   hours: this.state.hours,
    //   studnum: this.state.studnum,
    //   creditwo: this.state.creditwo,
    //   studcred: this.state.studcred,
    //   creditw: this.state.creditw
    // })
    //   .then(result => {
    //     this.props.history.push('./teachingload/view');  //change to profile later!!
    //     alert('Teaching load successfully added!');
    //   })
    //   .catch(e => alert('Error adding new Teaching Load!'));
  }

  startAdd() {
    this.props.history.push('../teachingload/edit');
  }

  render() {
    return (
      <div className="App-header">
        <div>
        <NavBar {...this.props}  Label="FSR" subLabel="teachingload"/>
        </div>
        <div>
        <div
          className="ui piled very padded text left aligned container segment mainDiv"
          color="teal">
          <div>
            <h2 className="ui blue header">
              EDIT TEACHING LOAD
            </h2>
          </div>
          <Divider hidden="true" />
          <p>
            <a className="ui small header"> Subject</a>
            <div className="ui input fluid mini focus">
              <input
                type="text"
                placeholder={this.state.subj}
                onChange={this.handleChangeSubj}
              />
            </div>
          </p>
          <p>
            <a className="ui small header"> Section Code </a>
            <div className="ui input fluid mini focus">
              <input
                type="text"
                placeholder={this.state.seccode}
                onChange={this.handleChangeSeccode}
              />
            </div>
          </p>
          <p>
            <a className="ui small header">Room </a>
            <div className="ui input fluid mini focus">
              <input
                type="text"
                placeholder={this.state.room}
                onChange={this.handleChangeRoom}
              />
            </div>
          </p>
          <p>
            <a className="ui small header">Days </a>
            <div className="ui input fluid mini focus">
              <input
                type="text"
                placeholder={this.state.days}
                onChange={this.handleChangeDays}
              />
            </div>
          </p>
          <p>
            <a className="ui small header">Start Time </a>
            <div className="ui input fluid mini focus">
              <input
                type="time"
                onChange={this.handleChangeStartTime}
              />
            </div>
            <a className="ui small header">End Time </a>
            <div className="ui input fluid mini focus">
              <input
                type="time"
                onChange={this.handleChangeEndTime}
              />
            </div>
          </p>
          <p>
            <a className="ui small header">Hours per Week </a>
            <div className="ui input fluid mini focus">
              <input
                type="number"
                placeholder={this.state.hours}
                onChange={this.handleChangeHours}
              />
            </div>
          </p>
          <p>
            <a className="ui small header">No. of Students </a>
            <div className="ui input fluid mini focus">
              <input
                type="number"
                placeholder={this.state.studnum}
                onChange={this.handleChangeStudnum}
              />
            </div>
          </p>
          <p>
            <a className="ui small header">Course Credit w/o Multiplier </a>
            <div className="ui input fluid mini focus">
              <input
                type="number"
                placeholder={this.state.creditwo}
                onChange={this.handleChangeCreditwo}
              />
            </div>
          </p>
          <p>
            <a className="ui small header">Student Credit Units </a>
            <div className="ui input fluid mini focus">
              <input
                type="number"
                placeholder={this.state.studcred}
                onChange={this.handleChangeStudcred}
              />
            </div>
          </p>
          <p>
            <a className="ui small header">Teaching Load Credits w/ Multiplier </a>
            <div className="ui input fluid mini focus">
              <input
                type="number"
                placeholder={this.state.creditw}
                onChange={this.handleChangeCreditwith}
              />
            </div>
          </p>
          <div className="ui center aligned container">
            <button
              className="ui center aligned blue button"
              onClick={this.startEdit}>
              Edit Teaching Load
            </button>
          </div>
        </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}