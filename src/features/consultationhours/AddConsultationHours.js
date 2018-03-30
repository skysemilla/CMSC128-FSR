import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar'
import GenerateFSR from './../GenerateFSR'
import SendtoAdmin from './../SendtoAdmin'
import {Divider,Checkbox} from 'semantic-ui-react'

export default class AddConsultationHours extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days : [],
      time : '',
      place : ''
    };

    this.handleChangeDays = this.handleChangeDays.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleChangePlace = this.handleChangePlace.bind(this);

    this.startAdd = this.startAdd.bind(this);
  }

  handleChangeDays(e){
  	if(this.state.days.includes(e.target.value)){
  		for(var index = 0; index < this.state.days.length; index++){
  			if(this.state.days[index] === e.target.value) 
  				this.state.days.splice(index,1);
  		}
  		this.setState({days : this.state.days});
  		console.log("Deleted " + e.target.value);
  	}
  	else{
  		var newArray = this.state.days;
  		newArray.push(e.target.value);
  		this.setState({days : newArray});
  		console.log("Added " + e.target.value);
  	}
  	console.log(this.state.days);
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
        <NavBar {...this.props}/>
        <div
          class="ui piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 class="ui blue header">
              ADD CONSULTATION HOURS
            </h2>
          </div>
          <Divider hidden="true" />
          <div>
          <div>
            <a class = "ui small header"> Days  </a>
			<p>
				<div class = "ui checkbox">
				<input
					type = "checkbox"
					value = "MON"
					onClick = {this.handleChangeDays.bind(this.state.days)} />
				<label> Monday </label>			
				</div>
				<br/>

				<div class = "ui checkbox">
				<input 
					type = "checkbox"
					value = "TUE"
					onClick = {this.handleChangeDays.bind(this.state.days)} />
				<label> Tuesday </label>				
				</div>
				<br/>

				<div class = "ui checkbox">
				<input 
					type = "checkbox"
					value = "WED"
					onClick = {this.handleChangeDays.bind(this.state.days)} />
				<label> Wednesday </label>				
				</div>	

				<br/>
				<div class = "ui checkbox">
				<input 
					type = "checkbox"
					value = "THU"
					onClick = {this.handleChangeDays.bind(this.state.days)} />
				<label> Thursday </label>				
				</div>	

				<br/>
				<div class = "ui checkbox">
				<input 
					type = "checkbox"
					value = "FRI"
					onClick = {this.handleChangeDays.bind(this.state.days)} />
				<label> Friday </label>				
				</div>
			</p>
          </div>

          <p>
          	<a class = "ui small header"> Time </a>
          	<div class="ui input fluid mini focus">
              <input
                type="time"
                onChange={this.handleChangePlace}
              />
            </div>
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
          </div>
          <div class="ui center aligned container">
            <button
              class="ui blue button"
              onClick={this.startAdd}>
              Add Consultation Hours
            </button>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}

//=========================
ReactDOM.render(<AddConsultationHours />, document.getElementById('root'));
