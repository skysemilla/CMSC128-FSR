import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar'
import GenerateFSR from './../GenerateFSR'
import SendtoAdmin from './../SendtoAdmin'
import {Divider,Checkbox} from 'semantic-ui-react'
import GenericDropdown from './../GenericDropdown'
import ConsultationHourSubTypeDropdown from './ConsultationHourSubTypeDropdown'

const timeIndex = 8;
const optionsDays = [{text: 'Monday'},{text: 'Tuesday'},{text: 'Wednesday'},{text: 'Thursday'},{text: 'Friday'}]

const optionsTimeFrom = [{value : 0,text : '8:00 A.M'},{value : 1,text : '9:00 A.M'},{value : 2,text : '10:00 A.M'},
                          {value : 3,text : '11:00 A.M'},{value : 4,text : '12:00 NN'},{value : 5,text : '1:00 P.M'},
                          {value : 6,text : '2:00 P.M'},{value : 7,text : '3:00 P.M'},{value : 8,text : '4:00 P.M'}]

const optionsTimeTo = [{value : 0,text : '9:00 A.M'},{value : 1,text : '10:00 A.M'},{value : 2,text : '11:00 A.M'},
                       {value : 3,text : '12:00 NN'},{value : 4,text : '1:00 P.M'},{value : 5,text : '2:00 P.M'},
                       {value : 6,text : '3:00 P.M'},{value : 7,text : '4:00 P.M'},{value : 8,text : '5:00 P.M'}]

export default class EditConsultationHours extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days : '',
      timeFrom : '',
      timeFromValue : '',
      timeTo : '',
      place : '',
      attachmentLink : ''
    };

    this.handleChangeDays = this.handleChangeDays.bind(this);
    this.handleChangeTimeFrom = this.handleChangeTimeFrom.bind(this);
    this.handleChangeTimeTo = this.handleChangeTimeTo.bind(this);
    this.handleChangePlace = this.handleChangePlace.bind(this);
    this.uploadAttachment = this.uploadAttachment.bind(this);

    this.startAdd = this.startAdd.bind(this);
  }

  handleChangeDays(e){
    this.setState({days : e.target.value});
  }

  handleChangeTimeTo(e){
    this.setState({timeTo : e.target.value});
  }

  handleChangeTimeFrom(e){
    this.setState({timeFrom : e.target.value});

    var index;
    for(index = 0; index < timeIndex; index++){
      if(optionsTimeFrom[index].text === e.target.value){
        this.setState({timeFromValue : optionsTimeFrom[index].value});
      }
    }
  }

  handleChangePlace(e){
    this.setState({place : e.target.value});
  }

  uploadAttachment(e){
    //this.setState({ attachmentLink: ???});
  }

  componentDidMount(){
    if(typeof this.props.history!=='undefined'){
      console.log(this.props.history.location.state.id);
    }
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
        <NavBar {...this.props}/>
        <div
          class="ui piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 class="ui blue header">
              EDIT CONSULTATION HOURS
            </h2>
          </div>

          <Divider hidden="true" />

          <p>
               <GenericDropdown
                labelHeader = "Day"
                labelProper = "Choose Day of Consultation"
                value = {this.state.days}
                handler = {this.handleChangeDays}
                options = {optionsDays}/>
          </p>

          <p>
            <GenericDropdown
              labelHeader = "Time From"
              labelProper = "Choose Start Time of Consultation"
              value = {this.state.timeFrom}
              handler = {this.handleChangeTimeFrom}
              options = {optionsTimeFrom}/>
          </p>

          <p>
              <ConsultationHourSubTypeDropdown
                value = {this.state.timeTo}
                handler = {this.handleChangeTimeTo}
                options = {optionsTimeTo}
                timeFromValue = {this.state.timeFromValue}/>
          </p>

          <p>
            <a class = "ui small header"> Place </a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                onChange={this.handleChangePlace}
              />
            </div>
          </p>
          <Divider hidden="true" />
          <div class="ui center aligned container">
            <button class="ui blue button" onClick = {this.uploadAttachment}>Upload Attachments</button>
            <button
              class="ui blue button"
              onClick={this.startAdd}>
              Save Changes
            </button>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}