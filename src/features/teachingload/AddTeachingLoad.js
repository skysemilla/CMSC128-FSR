import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';

export default class AddTeachingLoad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // emp_id: '',
      subj: '',
      seccode: '',
      // room: '',
      // days: '',
      // starttime: '',
      // endtime: '',
      // hours: '',
      studnum: '',
      data: [],
      sectionArray: []
      // creditwo: '',
      // studcred: '',
      // creditw: ''
    };

    this.handleChangeSubj = this.handleChangeSubj.bind(this);
    this.handleChangeSeccode = this.handleChangeSeccode.bind(this);
    // this.handleChangeRoom = this.handleChangeRoom.bind(this);
    // this.handleChangeDays = this.handleChangeDays.bind(this);
    // this.handleChangeStartTime = this.handleChangeStartTime.bind(this);
    // this.handleChangeEndTime = this.handleChangeEndTime.bind(this);
    // this.handleChangeHours = this.handleChangeHours.bind(this);
    this.handleChangeStudnum = this.handleChangeStudnum.bind(this);
    // this.handleChangeCreditwo = this.handleChangeCreditwo.bind(this);
    // this.handleChangeStudcred = this.handleChangeStudcred.bind(this);
    // this.handleChangeCreditwith = this.handleChangeCreditwith.bind(this);
    this.startAdd = this.startAdd.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount(){
    Api.viewAllSubjects().then(response => {
      if (response.data.data[0] !== undefined) {
        this.setState({ data: response.data.data });
        console.log(response.data.data);
      }
    });
  }

  handleChangeSubj(e) {
    this.setState({ subj: e.target.value });
  }

  handleChangeSeccode(e) {
    this.setState({ seccode: e.target.value });
  }

  handleChangeStudnum(e) {
    this.setState({ studnum: e.target.value });
  }

  handleLogout(e) {
    e.preventDefault();
    Api.logout();
    this.props.history.push('../..');
  }

  startAdd(e) {
    e.preventDefault();
    Api.addTeachLoad({
      subject_code: this.state.subj,
      section_code: this.state.seccode,
      no_of_students: this.state.studnum
    })
      .then(result =>{
        this.props.history.push('./view'); //change to profile later!!
        alert('Teachingload successfully added!');
      })
      // .catch(e => alert(e));
      .catch(e => alert('Error adding new Teaching Load!'));
  }

  render() {
    var optionsArray = [];
    var secArray = [];
    var suppDup = [];
    var suppDup2 = [];

    {
      this.state.data.map(item=>{
        suppDup.push(item.subject_code);
      });
    }

    {
      for(var count = 0; count < suppDup.length; count++){
        if(suppDup2.includes(suppDup[count]) !== true){
          suppDup2.push(suppDup[count]);
        }
      }
    }

    {
      for(count = 0; count < suppDup2.length; count++){
        var values = {subject : suppDup2[count], section : []}
        optionsArray.push(values);
      }
    }

    {
      this.state.data.map(item=>{
      
        optionsArray.map(data=>{
          if(data.subject === item.subject_code){
            data.section.push(item.section_code);
          }
        });
      });
    }

    {
      optionsArray.map(data=>{
        console.log(data.section);
      })
    }

    return (
      <div className="App-header">
      <div>
        <NavBar {...this.props} Label="FSR" subLabel="teachingload"/>
        </div>
        <div className="bodyDiv">
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
            <a className="ui small header"> Subject
               <style> {` select {margin: 1vh 1vw 1vh 1vh; font-size: 14px;}`} </style>
              <select 
                class = "dropdown"
                value = {this.state.subj} 
                onChange = {this.handleChangeSubj}>

              <option value = "" disabled selected hidden> Choose Subject </option>
              {
                optionsArray.map(
                  (item)=>{
                    return(
                      <option value = {item.subject}>
                      {item.subject}
                      </option>
                    )
                  }
                )}
              </select>
            </a>
          </p>
          <p>
            {
              optionsArray.map(
                (item)=>{
                  if(this.state.subj === item.subject){
                    secArray = item.section;
                }
              }
            )}
            <a className="ui small header"> Section
              <select 
                class = "dropdown"
                value = {this.state.seccode} 
                onChange = {this.handleChangeSeccode}>

              <option value = "" disabled selected hidden> Choose Section </option>
              {
              secArray.map(
                (item)=>{
                  return(
                    <option value = {item}>
                      {item}
                    </option>
                  )
                }
              )}
              </select>
            </a>
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