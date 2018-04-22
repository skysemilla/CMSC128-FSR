import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';

const numRegex = /^[A-Z]{1,}\s[0-9]{1,3}$/;
const schoolRegex = /^[A-Za-z0-9][A-Za-z0-9\.-\s]+$/;
export default class EditStudyLoad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courseno: '',
      credits: 0,
      start_time: '',
      end_time: '',
      school: '',
      days:[]
    };

    this.handleChangeCourseno = this.handleChangeCourseno.bind(this);
    this.handleChangeCcred = this.handleChangeCcred.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleChangeTime2 = this.handleChangeTime2.bind(this);
    this.handleChangeSchool = this.handleChangeSchool.bind(this);
    this.uploadAttachment = this.uploadAttachment.bind(this);
    this.handleChangeDays = this.handleChangeDays.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.startEdit = this.startEdit.bind(this);
  }

  handleChangeCourseno(e) {
    this.setState({ courseno: e.target.value });
  }

  handleChangeCcred(e) {
    this.setState({ credits: e.target.value });
  }



  handleChangeTime(e) {
    this.setState({ start_time: e.target.value });
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

  handleChangeTime2(e) {
    this.setState({ end_time: e.target.value });
  }

  handleChangeSchool(e) {
    this.setState({ school: e.target.value });
    if(e.target.value === '' || !e.target.value.match(schoolRegex)){
      this.setState({ validschool: false});
    } else this.setState({ validschool: true });
  }



  uploadAttachment(e) {
    //this.setState({ attachmentLink: ???});
  }

  componentDidMount() {
    var temparr=[];
    if (typeof this.props.history !== 'undefined') {
      console.log(this.props.history.location.state.id);
    }
    Api.viewByStudyloadId(this.props.history.location.state.id)
      .then(response => {
        this.setState(
          { courseno: response.data.data[0].course_no ,
           credits: response.data.data[0].credits ,
           start_time: response.data.data[0].start_time ,
           end_time: response.data.data[0].end_time ,
           school: response.data.data[0].school
          }
        ,
        console.log(response.data.data));
      }
    )
    // Api.getDays(this.props.history.location.state.id).then((results)=>{
    //   results.data.data.forEach(json=>{
    //     temparr.push(json.day);
    //   })
    // }).then(()=>{
    //   this.setState({days: temparr});
    // }
    // )
  }

  handleLogout(e) {
    e.preventDefault();
    Api.logout();
    this.props.history.push('../..');
  }

  startEdit(e) {
    console.log(this.props.location.state);
    e.preventDefault();
    Api.editStudyLoad({
      studyload_id: this.props.history.location.state.id,
      courseno: this.state.courseno,
      credits: this.state.credits,
      start_time: this.state.start_time,
      end_time:this.state.end_time,
      school: this.state.school,
      days:this.state.days
    })
      .then(result => {
        this.props.history.push('./view'); //change to profile later!!
        alert('Study load successfully edited!');
      })
      .catch(e => alert('Error editting new Study Load!'));
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
              <h2 className="ui blue header">EDIT STUDY LOAD</h2>
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
                <input type="text" value={this.state.courseno} onChange={this.handleChangeCourseno} />
              </div>
          </div>
          
          <div className = "field">
            <label> <h3>Course Credit
              {
              this.state.credits === '' ?
                <div className = "ui left pointing red basic label">
                  Required
                </div>
                :
                [
                  this.state.credits >= 0 && this.state.credits <= 10 ?
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
                <input type="number" value={this.state.credits} onChange={this.handleChangeCcred} />
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
              <a className="ui small header">Start Time </a>
              <div className="ui input fluid mini focus">
                <input
                  type="time"
                  value={this.state.start_time}
                  placeholder={this.state.start_time}
                  onChange={this.handleChangeTime}
                />
              </div>
            </p>
            <p>
              <a className="ui small header">End Time </a>
              <div className="ui input fluid mini focus">
                <input
                  type="time"
                  value={this.state.end_time}
                  placeholder={this.state.end_time}
                  onChange={this.handleChangeTime2}
                />
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
                <input type="text" value={this.state.school} onChange={this.handleChangeSchool} />
              </div>
            </div>

            <div className="ui center aligned container">
              <button className="ui blue button" onClick={this.uploadAttachment}>
                Upload Attachments
              </button>
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
