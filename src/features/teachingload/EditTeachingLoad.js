import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';

const errorTexts = [
  <span style={{color: 'red'}}> {'  This field is required'}</span>,
  <span style={{color: 'red'}}> {'  must be valid'}</span>
]

var formError = {
  text: {
    studnum: ''
  },
  bool: {
    studnum: false
  }
};

export default class EditTeachingLoad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // emp_id: '',
      subj: 'CMSC 128',
      seccode: 'CMSC 128',
      // room: 'CAS B04',
      // days: 'T-Th',
      // starttime: '4pm',
      // endtime: '7pm',
      // hours: '3',
      studnum: '',
      data: [],
      sectionArray: []
      // creditwo: '3',
      // studcred: '3',
      // creditw: '3'
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
    this.handleLogout = this.handleLogout.bind(this);
    this.startEdit = this.startEdit.bind(this);
    this.checkInput = this.checkInput.bind(this);
  }

  componentDidMount(){
    Api.viewAllSubjects().then(response => {
      if (response.data.data[0] !== undefined) {
        this.setState({ data: response.data.data });
        console.log(response.data.data);
      }
    });

    // Api.viewByTeachloadId(this.props.id)
    //   .then(response => {
    //     this.setState(
    //       { subj: response.subj },
    //       { seccode: response.seccode },
    //       { studnum: response.studnum }
    //     );
    //   })
    //   // .catch(e => alert(e));
    //   .then(console.log(this.state));
  }

  handleChangeSubj(e) {
    this.setState({ subj: e.target.value });
  }

  handleChangeSeccode(e) {
    this.setState({ seccode: e.target.value });
  }

  // handleChangeRoom(e) {
  //   this.setState({ room: e.target.value });
  // }

  // handleChangeDays(e) {
  //   this.setState({ days: e.target.value });
  // }

  // handleChangeStartTime(e) {
  //   this.setState({ starttime: e.target.value });
  // }

  // handleChangeEndTime(e) {
  //   this.setState({ endtime: e.target.value });
  // }

  // handleChangeHours(e) {
  //   this.setState({ hours: e.target.value });
  // }

  handleChangeStudnum(e) {
    this.setState({ studnum: e.target.value });
  }

  // handleChangeCreditwo(e) {
  //   this.setState({ creditwo: e.target.value });
  // }

  // handleChangeStudcred(e) {
  //   this.setState({ studcred: e.target.value });
  // }

  // handleChangeCreditwith(e) {
  //   this.setState({ creditw: e.target.value });
  // }

  handleLogout(e) {
    e.preventDefault();
    Api.logout();
    this.props.history.push('../..');
  }

  startEdit(e) {
    e.preventDefault();
    Api.editTeachLoad({
 //     emp_id: 11, //Temporary emp_id value
      subject_code: this.state.subj,
      section_code: this.state.seccode,
      // room: this.state.room,
      // days: this.state.days,
      // start_time: this.state.starttime,
      // end_time: this.state.endtime,
      // hours: this.state.hours,
      no_of_students: this.state.studnum,
      //creditw: this.state.creditw,
      teachingload_id: this.props.history.location.state.id
    })
      .then(result => {
        this.props.history.push('./view'); //change to profile later!!
        alert('Teachingload successfully edited!');
      })
      // .catch(e => alert(e));
      .catch(e => alert('Error editing Teaching Load!'));
  }

  checkInput(e) {
    e.preventDefault();
    if(!this.state.studnum){
      formError.text.studnum = errorTexts[0];
      formError.bool.studnum = false;
    } else if(this.state.studnum <= 0 || this.state.studnum >= 200) {
      formError.text.studnum = errorTexts[1];
      formError.bool.studnum = false;
    } else{
      formError.text.studnum = '';
      formError.bool.studnum = true;
    }

    if(formError.bool.studnum){
      this.startEdit(e);
    } else this.forceUpdate();
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
        if(suppDup2.includes(suppDup[count]) != true){
          suppDup2.push(suppDup[count]);
        }
      }
    }

    {
      for(var count = 0; count < suppDup2.length; count++){
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

    return (
      <div className="App-header">
        <NavBar {...this.props}  Label="FSR" subLabel="teachingload"/>
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
            <a className="ui small header"> Subject
             <style> {` select {margin: 1vh 1vw 1vh 1vh; font-size: 14px;}`} </style>
              <select 
                class = "dropdown"
                value = {this.state.subj} 
                onChange = {this.handleChangeSubj}>

              <option value = {this.state.subj} selected> {this.state.subj} </option>
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

              <option value = {this.state.seccode} selected> {this.state.seccode} </option>
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
            <a className="ui small header">No. of Students {formError.text.studnum}</a>
            <div className="ui input fluid mini focus">
              <input
                type="number"
                placeholder={this.state.studnum}
                onChange={this.handleChangeStudnum}
              />
            </div>
          </p>
          <div className="ui center aligned container">
            <button
              className="ui center aligned blue button"
              onClick={this.checkInput}>
              Edit Teaching Load
            </button>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
