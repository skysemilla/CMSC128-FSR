import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import ViewStudyLoadRow from './ViewStudyLoadRow'
import DeleteModal from '../GenericDelete';
import GenerateFSR from './../GenerateFSR'
import SendtoAdmin from './../SendtoAdmin'
import NavBar from './../ui/NavBar'

//Dummy data
const dummySample = {courseno:  '3', ccred : '201', day : 'TTh', time : '3', school : 'UPD', slcred : ' 3'};

const dummySample2 = {courseno:  '3', ccred : '049', day : '3', time : 'MWF', school : 'UPM', slcred : ' 5'};

const dummySample3 = {courseno:  '3', ccred : '352', day : '3', time : 'TTh', school : 'UPD', slcred : ' 3'};

export default class ViewStudyLoad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      degree: 'MSCS',
      uni: 'UPLB',
      studyleave: 'Yes',
      fellowship: 'No',
      data : [dummySample,dummySample2,dummySample3]  //dummmy data
    };

    this.startAdd = this.startAdd.bind(this);
    this.startEdit = this.startEdit.bind(this);
  }

  startAdd(e) {
    e.preventDefault();
    this.props.history.push('../studyload/add');
  }

  startEdit(e){
    e.preventDefault();
    this.props.history.push('../studyload/editInfo');
  }

  render() {

    return (
      <div className="App-header">
        <NavBar {...this.props} Label="FSR" subLabel="studyload"/>

        <div class = "ui compact piled very padded text left aligned container segment" color = "teal">
          <div>
            <h1 class = "ui blue header">
              STUDY LOAD
            </h1>
          </div>

          <div class="ui list">
              <div class="item">
                   <b><i class="right triangle icon"></i>Degree Enrolled In: </b>
                    {this.state.degree}
              </div>
              <div class="item">
                   <b><i class="right triangle icon"></i>University Enrolled In: </b>
                    {this.state.uni}
              </div>
              <div class="item">
                   <b><i class="right triangle icon"></i>On Full Study Leave with Pay? </b>
                    {this.state.studyleave}
              </div>
              <div class="item">
                   <b><i class="right triangle icon"></i>Recepient of Faculty Fellowship? </b>
                    {this.state.fellowship}
              </div>
              <button class="ui blue right floated button" onClick={this.startEdit}>Edit</button>
          </div>
          <Divider hidden="true" />
          <Divider hidden="true" />
          <Divider hidden="true" />
          <Divider hidden="true" />
          <style> {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`} </style>
          <table class = "ui celled table">
            <thead>
              <tr>
                <th class = "center aligned"> Course Number </th>
                <th class = "center aligned"> Course Credit </th>
                <th class = "center aligned"> Days </th>
                <th class = "center aligned"> Time </th>
                <th class = "center aligned"> School </th>
                <th class = "center aligned"> Study load credits </th>
                <th class = "center aligned"> Edit/Delete </th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((item) =>{
                return(
                    <ViewStudyLoadRow {...this.props}
                      courseno = {item.courseno}
                      ccred = {item.ccred}
                      day = {item.day}
                      time = {item.time}
                      school = {item.school}
                      slcred = {item.slcred}
                      editURL = "../studyload/edit"
                      label = "Study Load"
                      subLabel = "Study load"/>
                  )
                })
              }
            </tbody>
          </table>
          <button class="ui blue right floated button" onClick={this.startAdd}>Add Study Load</button>
          <Divider hidden="true" />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<ViewStudyLoad />, document.getElementById('root'));
