import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';

export default class EditStudyLoad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courseno: '',
      credits: 0,
      start_time: '',
      end_time: '',
      school: '',
      day1: '',
      day2: ''
    };

    this.handleChangeCourseno = this.handleChangeCourseno.bind(this);
    this.handleChangeCcred = this.handleChangeCcred.bind(this);
    this.handleChangeDay = this.handleChangeDay.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleChangeDay2 = this.handleChangeDay2.bind(this);
    this.handleChangeTime2 = this.handleChangeTime2.bind(this);
    this.handleChangeSchool = this.handleChangeSchool.bind(this);
    this.uploadAttachment = this.uploadAttachment.bind(this);

    this.handleLogout = this.handleLogout.bind(this);
    this.startEdit = this.startEdit.bind(this);
  }

  handleChangeCourseno(e) {
    this.setState({ courseno: e.target.value });
  }

  handleChangeCcred(e) {
    this.setState({ credits: e.target.value });
  }

  handleChangeDay(e) {
    this.setState({ day1: e.target.value });
  }

  handleChangeTime(e) {
    this.setState({ start_time: e.target.value });
  }
  
  handleChangeDay2(e) {
    this.setState({ day2: e.target.value });
  }

  handleChangeTime2(e) {
    this.setState({ end_time: e.target.value });
  }

  handleChangeSchool(e) {
    this.setState({ school: e.target.value });
  }



  uploadAttachment(e) {
    //this.setState({ attachmentLink: ???});
  }

  componentDidMount() {
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
           school: response.data.data[0].school ,
           day1: response.data.data[0].day1 ,
           day2: response.data.data[0].day2}
        ,
        console.log(response.data.data));
      }
    )
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
      day1: this.state.day1,
      day2: this.state.day2
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
            <p>
              <a className="ui small header">Course Number </a>
              <div className="ui input fluid mini focus">
                <input
                  type="text"
                  value={this.state.courseno}
                  placeholder={this.state.courseno}
                  onChange={this.handleChangeCourseno}
                />
              </div>
            </p>
            <p>
              <a className="ui small header">Course Credit </a>
              <div className="ui input fluid mini focus">
                <input
                  type="number"
                  value={this.state.credits}
                  placeholder={this.state.credits}
                  onChange={this.handleChangeCcred}
                />
              </div>
            </p>
            <p>
              <a className="ui small header">Days 1 </a>
              <div className="ui input fluid mini focus">
                <input
                  type="text"
                  value={this.state.day1}
                  placeholder={this.state.day1}
                  onChange={this.handleChangeDay}
                />
              </div>
            </p>
            <p>
              <a className="ui small header">Day 2 </a>
              <div className="ui input fluid mini focus">
                <input
                  type="text"
                  value={this.state.day2}
                  placeholder={this.state.day2}
                  onChange={this.handleChangeDay2}
                />
              </div>
            </p>

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

            <p>
              <a className="ui small header">School </a>
              <div className="ui input fluid mini focus">
                <input
                  type="text"
                  value={this.state.school}
                  placeholder={this.state.school}
                  onChange={this.handleChangeSchool}
                />
              </div>
            </p>
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
