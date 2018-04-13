import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider, Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../../api';
import NavBar from './../ui/NavBarAdmin'
import GenerateFSR from './../../GenerateFSR'
import SendtoAdmin from './../../SendtoAdmin'

import GenericDropdown from './../../GenericDropdown'

const options = [{id : 0, text : 'Monday'},
                 {id : 1, text : 'Tuesday'},
                 {id : 2, text : 'Wednesday'},
                 {id : 3, text : 'Thursday'},
                 {id : 4, text : 'Friday'}]

export default class AddConsultationHours extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days : '',
      time : '',
      place : ''
    };

    this.handleChangeDays = this.handleChangeDays.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleChangePlace = this.handleChangePlace.bind(this);

    this.startAdd = this.startAdd.bind(this);
  }

  handleChangeDays(e){
    this.setState({days : e.target.value});
  }

  handleChangeTime(e){
    this.setState({time : e.target.value});
  }

  handleChangePlace(e){
    this.setState({place : e.target.value});
  }

  startAdd(e) {
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
    //     this.props.history.push('./publications/view');  //change to profile later!!
    //     alert('Publication successfully added!');
    //   })
    //   .catch(e => alert('Error adding new Publication!'));
  }

  render() {

    return (
      <div className="App-header">
        <div>
        <NavBar {...this.props} Label="edit" subLabel="consultation"/>
        </div>
        <div className="bodydiv">
        <div
          class="ui piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 class="ui blue header">
              Consultation Hours
              <GenerateFSR/>
              <SendtoAdmin/>
            </h2>
          </div>
          <Divider hidden="true" />
          <div>
            <GenericDropdown
              labelHeader = "Days"
              labelProper = "Choose Days"
              value = {this.state.days}
              handler = {this.handleChangeDays}
              options = {options}
              />
          </div>
          <div class="ui center aligned container">
            <button
              class="ui blue button"
              onClick={this.startAdd}>
              Add Publication
            </button>
          </div>
        </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}