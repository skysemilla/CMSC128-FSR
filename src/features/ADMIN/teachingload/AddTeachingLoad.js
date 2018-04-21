import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../../api';
import NavBar from './../ui/NavBarAdmin';

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

  startAdd() {
    this.props.history.push('../teachingload/add');
  }

  render() {
    return (
      <div classNameName="App-header">
        <div>
        <NavBar {...this.props} Label="FSR" subLabel="teachingload"/>
        </div>
        <div classNameName="bodydiv">
        <div
          className="ui piled very padded text left aligned container segment mainDiv"
          color="teal">
          <div>
            <h2 className="ui blue header">
              ADD TEACHING LOAD
            </h2>
          </div>
          <Divider hidden="true" />
          <p>
            <a className="ui small header"> Subject</a>
            <div className="ui input fluid mini focus">
              <input
                type="text"
                onChange={this.handleChangeSubj}
              />
            </div>
          </p>
          <p>
            <a className="ui small header"> Section Code </a>
            <div className="ui input fluid mini focus">
              <input
                type="text"
                onChange={this.handleChangeSeccode}
              />
            </div>
          </p>
          <p>
            <a className="ui small header">Room </a>
            <div className="ui input fluid mini focus">
              <input
                type="text"
                onChange={this.handleChangeRoom}
              />
            </div>
          </p>
          <p>
            <a className="ui small header">Days </a>
            <div className="ui input fluid mini focus">
              <input
                type="text"
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
                onChange={this.handleChangeHours}
              />
            </div>
          </p>
          <p>
            <a className="ui small header">No. of Students </a>
            <div className="ui input fluid mini focus">
              <input
                type="number"
                onChange={this.handleChangeStudnum}
              />
            </div>
          </p>
          <p>
            <a className="ui small header">Course Credit w/o Multiplier </a>
            <div className="ui input fluid mini focus">
              <input
                type="number"
                onChange={this.handleChangeCreditwo}
              />
            </div>
          </p>
          <p>
            <a className="ui small header">Student Credit Units </a>
            <div className="ui input fluid mini focus">
              <input
                type="number"
                onChange={this.handleChangeStudcred}
              />
            </div>
          </p>
          <p>
            <a className="ui small header">Teaching Load Credits w/ Multiplier </a>
            <div className="ui input fluid mini focus">
              <input
                type="number"
                onChange={this.handleChangeCreditwith}
              />
            </div>
          </p>
          <div className="ui center aligned container">
            <button
              className="ui center aligned blue button"
              onClick={this.startAdd}>
              Add Teaching Load
            </button>
          </div>
        </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}