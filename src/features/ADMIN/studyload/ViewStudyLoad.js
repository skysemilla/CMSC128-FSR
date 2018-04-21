import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import ViewStudyLoadRow from './ViewStudyLoadRow'
import NavBar from './../ui/NavBarAdmin'

//Dummy data
const dummySample = {degree : 'MSCS', uni : 'UPLB', studyleave : 'No',
                      fellowship : 'Yes', courseno:  '3', ccred : '201', day : 'TTh', time : '3', school : ' ', slcred : ' 3'};

const dummySample2 = {degree : 'MSCS', uni : 'UPD', studyleave : 'Yes',
                      fellowship : 'No', courseno:  '3', ccred : '049', day : '3', time : 'MWF', school : ' ', slcred : ' 5'};

const dummySample3 = {degree : 'MSCS', uni : 'UPLB', studyleave : 'Yes',
                      fellowship : 'Yes', courseno:  '3', ccred : '352', day : '3', time : 'TTh', school : ' ', slcred : ' 3'};

export default class ViewStudyLoad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [dummySample,dummySample2,dummySample3]  //dummmy data
    };

    this.startAdd = this.startAdd.bind(this);
  }

  startAdd(e) {
    e.preventDefault();
    this.props.history.push('../studyload/add');
  }

  render() {

    return (
      <div classNameName="App-header">
        <div>
        <NavBar {...this.props} Label="edit" subLabel="studyload"/>
        </div>
        <div classNameName="bodydiv">
        <div className = "ui compact piled very padded text left aligned container segment" color = "teal">
          <div>
            <h1 className = "ui blue header">
              STUDY LOAD
            </h1>
          </div>
          <Divider hidden="true" />

          <style> {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`} </style>
          <table className = "ui celled table">
            <thead>
              <tr>
                <th className = "center aligned"> Degree enrolled in </th>
                <th className = "center aligned"> University enrolled in </th>
                <th className = "center aligned"> On Full-Study Leave w/ pay? </th>
                <th className = "center aligned"> Recepient of Faculty Fellowship </th>
                <th className = "center aligned"> Course Number </th>
                <th className = "center aligned"> Course Credit </th>
                <th className = "center aligned"> Days </th>
                <th className = "center aligned"> Time </th>
                <th className = "center aligned"> School </th>
                <th className = "center aligned"> Study load credits </th>
                <th className = "center aligned"> Edit/Delete </th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((item) =>{
                return(
                    <ViewStudyLoadRow {...this.props}
                      degree = {item.degree}
                      uni = {item.uni}
                      studyleave = {item.studyleave}
                      fellowship = {item.fellowship}
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
          <button className="ui blue right floated button" onClick={this.startAdd}>Add Study Load</button>
          <Divider hidden="true" />
        </div>
        </div>
      </div>
    );
  }
}