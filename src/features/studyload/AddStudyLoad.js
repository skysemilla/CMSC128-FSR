import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';

const numRegex = /^[A-Z]{1,}\s[0-9]{1,3}$/;
const schoolRegex = /^[A-Za-z0-9][A-Za-z0-9\.-\s]+$/;

export default class AddStudyLoad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courseno: '',
      ccred: '',
      days: [],
      time1: '',
      time2: '',
      school: '',
      attachmentLink: '',

      validcourseno: false,
      validccred: false,
      validschool: false
    };

    this.handleChangeCourseno = this.handleChangeCourseno.bind(this);
    this.handleChangeCcred = this.handleChangeCcred.bind(this);
    this.handleChangeDays = this.handleChangeDays.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleChangeTime2 = this.handleChangeTime2.bind(this);
    this.handleChangeSchool = this.handleChangeSchool.bind(this);
    this.uploadAttachment = this.uploadAttachment.bind(this);

    this.startAdd = this.startAdd.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleChangeCourseno(e) {
    this.setState({ courseno: e.target.value });
    if(e.target.value === '' || !e.target.value.match(numRegex)){
      this.setState({ validcourseno: false});
    } else this.setState({ validcourseno: true });
  }

  handleChangeCcred(e) {
    this.setState({ ccred: e.target.value });
    if(e.target.value === '' || e.target.value <= 0 || e.target.value >= 11){
      this.setState({ validccred: false});
    } else this.setState({ validccred: true });
  }

  handleChangeTime(e) {
    this.setState({ time1: e.target.value });
  }

  handleChangeTime2(e) {
    this.setState({ time2: e.target.value });
  }
  handleChangeSchool(e) {
    this.setState({ school: e.target.value });
    if(e.target.value === '' || !e.target.value.match(schoolRegex)){
      this.setState({ validschool: false});
    } else this.setState({ validschool: true });
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


  uploadAttachment(e) {
    //this.setState({ attachmentLink: ???});
  }

  handleLogout(e) {
    e.preventDefault();
    Api.logout();
    this.props.history.push('../..');
  }

  startAdd(e) {
    e.preventDefault();
    if(this.state.courseno !== '' &&
       this.state.ccred !== '' &&
       this.state.days !== '' &&
       this.state.validcourseno === true &&
       this.state.validccred === true){

      Api.addStudyLoad({
        credits: this.state.ccred,
        courseno: this.state.courseno,
        start_time: this.state.time1,
        end_time: this.state.time2,
        school: this.state.school,
        days: this.state.days
      })
        .then(result => {
          this.props.history.push('./view'); //change to profile later!!
          alert('Studylooad successfully added!');
        })
        .catch(e => alert('Error adding new Study Load!'));
    } else alert('Invalid input');
  }

  render() {
    return (
      <div className="App-header">
        <div>
          <NavBar {...this.props} Label="FSR" subLabel="studyload" />
        </div>
        <div className="bodyDiv">
          <div
            className="ui piled very padded text left aligned container segment"
            color="teal">
            <div>
            <style> {`.input {padding: 10px 0px 10px 0px;}`} </style>
              <h2 className="ui blue header">ADD STUDY LOAD</h2>
            </div>
            <Divider hidden="true" />

            <div className = "field">
            <label> <h3>Course Number
              {
              this.state.courseno === '' ?
                <div className = "ui left pointing red basic label">
                  Required
                </div>
                :
                [
                  this.state.courseno.match(numRegex) ?
                  <div className = "ui left pointing green basic label">
                    is valid!
                  </div>
                  :
                  <div className = "ui left pointing red basic label">
                  Invalid Input
                  </div>
                ]
              }
              </h3>
              </label>
              <div className="ui input fluid mini focus">
                <input type="text" onChange={this.handleChangeCourseno} />
              </div>
          </div>

          

            <div className = "field">
            <label> <h3>Course Credit
              {
              this.state.ccred === '' ?
                <div className = "ui left pointing red basic label">
                  Required
                </div>
                :
                [
                  this.state.ccred >= 0 && this.state.ccred <= 10 ?
                  <div className = "ui left pointing green basic label">
                    is valid!
                  </div>
                  :
                  <div className = "ui left pointing red basic label">
                  Invalid Input
                  </div>
                ]
              }
              </h3>
              </label>
              <div className="ui input fluid mini focus">
                <input type="number" onChange={this.handleChangeCcred} />
              </div>
            </div>

            <div className = "field">
              <label> <h3> Days
                {
                this.state.days.length === 0 ?
                <div className = "ui left pointing red basic label">
                  Required
                </div>
                :
                  <div className = "ui left pointing green basic label">
                    is valid!
                  </div>
                }
              </h3>
              </label>
              <p>
                <div className="ui checkbox">
                  <input
                    type="checkbox"
                    value="MON"
                    onClick={this.handleChangeDays.bind(this.state.days)}
                  />
                  <label> Monday </label>
                </div>
                <br />

                <div className="ui checkbox">
                  <input
                    type="checkbox"
                    value="TUE"
                    onClick={this.handleChangeDays.bind(this.state.days)}
                  />
                  <label> Tuesday </label>
                </div>
                <br />

                <div className="ui checkbox">
                  <input
                    type="checkbox"
                    value="WED"
                    onClick={this.handleChangeDays.bind(this.state.days)}
                  />
                  <label> Wednesday </label>
                </div>

                <br />
                <div className="ui checkbox">
                  <input
                    type="checkbox"
                    value="THU"
                    onClick={this.handleChangeDays.bind(this.state.days)}
                  />
                  <label> Thursday </label>
                </div>

                <br />
                <div className="ui checkbox">
                  <input
                    type="checkbox"
                    value="FRI"
                    onClick={this.handleChangeDays.bind(this.state.days)}
                  />
                  <label> Friday </label>
                </div>
              </p>
            </div> 

            <p>
              <a className="ui small header">Start time </a>
              <div className="ui input fluid mini focus">
                <input type="time" onChange={this.handleChangeTime} />
              </div>
            </p>

            <p>
              <a className="ui small header">End Time </a>
              <div className="ui input fluid mini focus">
                <input type="time" onChange={this.handleChangeTime2} />
              </div>
            </p>

            <div className = "field">
            <label> <h3>School
              {
              this.state.school === '' ?
                <div className = "ui left pointing red basic label">
                  Required
                </div>
                :
                [
                  this.state.school.match(schoolRegex) ?
                  <div className = "ui left pointing green basic label">
                    is valid!
                  </div>
                  :
                  <div className = "ui left pointing red basic label">
                  Invalid Input
                  </div>
                ]
              }
              </h3>
              </label>
              <div className="ui input fluid mini focus">
                <input type="text" onChange={this.handleChangeSchool} />
              </div>
            </div>

            <div className="ui center aligned container">
              <button className="ui blue button" onClick={this.uploadAttachment}>
                Upload Attachments
              </button>
              <button
                className="ui center aligned blue button"
                onClick={this.startAdd}>
                Add Study Load
              </button>
            </div>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
