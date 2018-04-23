import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../../api';
import NavBar from './../ui/NavBarAdmin';
import GenerateFSR from './../../GenerateFSR'
import SendtoAdmin from './../../SendtoAdmin'

export default class EditConsultationHours extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: '',
      time: '',
      place: '',
    };

    this.handleChangeDays = this.handleChangeDays.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleChangePlace = this.handleChangePlace.bind(this);
  }

  handleChangeDays(e) {
    this.setState({ subj: e.target.value });
  }

  handleChangeTime(e) {
    this.setState({ seccode: e.target.value });
  }

  handleChangePlace(e) {
    this.setState({ room: e.target.value });
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
    //   time: this.state.time,
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

  render() {
    return (
      <div classNameName="App-header">
        <div>
        <NavBar {...this.props} Label="edit" subLabel="consultation"/>
        </div>
        <div classNameName="bodydiv">
        <div
          className="ui piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 className="ui blue header">
              Edit Consultation Hours
              <GenerateFSR/>
              <SendtoAdmin/>
            </h2>
          </div>
          <Divider hidden="true" />
          <Divider hidden="true" />
          <Divider hidden="true" />
          <p>
            <a className="ui small header"> Subject </a>
            <div className="ui input mini focus">
              <input
                type="text"
                style={{ width: '540px' }}
                value={this.state.Days}
                onChange={this.handleChangeDays}
              />
            </div>
          </p>
          <p>
            <a className="ui small header"> Section Code </a>
            <div className="ui input mini focus">
              <input
                type="text"
                style={{ width: '497px' }}
                value={this.state.time}
                onChange={this.handleChangeTime}
              />
            </div>
          </p>
          <p>
            <a className="ui small header">Room </a>
            <div className="ui input mini focus">
              <input
                type="text"
                style={{ width: '552px' }}
                value={this.state.place}
                onChange={this.handleChangePlace}
              />
            </div>
          </p>
          <div className="ui center aligned container">
            <button
              className="ui center aligned blue button"
              onClick={this.startEdit}>
              Save changes
            </button>
          </div>
        </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}