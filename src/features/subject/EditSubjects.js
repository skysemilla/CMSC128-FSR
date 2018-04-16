import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';
import GenerateFSR from './../GenerateFSR'
import SendtoAdmin from './../SendtoAdmin'

const dummySample = {
  subjid: '1',
  subjcode: 'CMSC 128',
  seccode: 'A',
  type: 'Lecture',
  gradcourse: 'No',
  units: '3',
  room: 'ICSMH',
  starttime: '7:00AM',
  endtime: '8:00AM'
};

export default class EditSubject extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   subjid: '',
    //   subjcode: '',
    //   seccode: '',
    //   type: '',
    //   gradcourse: '',
    //   units: '',
    //   room: '',
    //   starttime: '',
    //   endtime: ''
    // };

    //FOR DUMMY
    this.state = {
      subjid: dummySample.subjid,
      subjcode: dummySample.subjcode,
      seccode: dummySample.seccode,
      type: dummySample.type,
      gradcourse: dummySample.gradcourse,
      units: dummySample.units,
      room: dummySample.room,
      starttime: dummySample.starttime,
      endtime: dummySample.endtime
    };

    this.handleChangeSubjid = this.handleChangeSubjid.bind(this);
    this.handleChangeSubjcode = this.handleChangeSubjcode.bind(this);
    this.handleChangeSeccode = this.handleChangeSeccode.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
    this.handleChangeGradcourse = this.handleChangeGradcourse.bind(this);
    this.handleChangeUnits = this.handleChangeUnits.bind(this);
    this.handleChangeRoom = this.handleChangeRoom.bind(this);
    this.handleChangeStarttime = this.handleChangeStarttime.bind(this);
    this.handleChangeEndtime = this.handleChangeEndtime.bind(this);
    this.startAdd = this.startAdd.bind(this);
  }

  componentDidMount(){
    console.log(this.props.history);
    // if(typeof this.props.history!=='undefined'){
    //   this.setState({emp_id: this.props.history.location.state.emp_id});
    // }
  }

  handleChangeSubjid(e) {
    this.setState({ subjid: e.target.value });
  }

  handleChangeSubjcode(e) {
    this.setState({ subjcode: e.target.value });
  }

  handleChangeSeccode(e) {
    this.setState({ seccode: e.target.value });
  }

  handleChangeType(e) {
    this.setState({ type: e.target.value });
  }

  handleChangeGradcourse(e) {
    this.setState({ gradcourse: e.target.value });
  }

  handleChangeUnits(e) {
    this.setState({ units: e.target.value });
  }

  handleChangeRoom(e) {
    this.setState({ room: e.target.value });
  }

  handleChangeStarttime(e) {
    this.setState({ starttime: e.target.value });
  }

  handleChangeEndtime(e) {
    this.setState({ endtime: e.target.value });
  }

  startAdd(e) {
    e.preventDefault();
    // Api.addSubject({
    //     subjid: this.state.subjid,
    //     subjcode: this.state.subjcode,
    //     seccode: this.state.seccode,
    //     type: this.state.type,
    //     gradcourse: this.state.gradcourse,
    //     units: this.state.units,
    //     room: this.state.room,
    //     starttime: this.state.starttime,
    //     endtime: this.state.endtime
    // })
    //   .then(result =>{
    //     this.props.history.push('./Subjects/view');
    //     alert('Subject successfully added!');
    //   })
    //   // .catch(e => alert(e));
    //   .catch(e => alert('Error adding new Subject!'));
  }

  render() {
    return (
      <div className="App-header">
      <div>
        <NavBar {...this.props} Label="FSR" subLabel="Subjects"/>
        </div>
        <div className="bodyDiv">
        <div
          class="ui piled very padded text left aligned container segment mainDiv"
          color="teal">
          <div>
            <h2 class="ui blue header">
              EDIT SUBJECT
            </h2>
          </div>
          <Divider hidden="true" />

          <p>
            <a class="ui small header"> Subject ID</a>
            <div class="ui input fluid mini focus">
              <input
                type="number"
                onChange={this.handleChangeSubjid}
                value={this.state.subjid}
              />
            </div>
          </p>
          <p>
            <a class="ui small header"> Subject Code</a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                onChange={this.handleChangeSubjcode}
                value={this.state.subjcode}
              />
            </div>
          </p>
          <p>
            <a class="ui small header"> Section Code</a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                onChange={this.handleChangeSeccode}
                value={this.state.seccode}
              />
            </div>
          </p>
          <p>
            <div class="ui form" onChange={this.handleChangeType}>
              <div class="inline fields">
                <label>Type</label>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input type="radio" name="type" value="Lecture"/>
                    <label>Lecture</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input type="radio" name="type" value="Laboratory"/>
                    <label>Laboratory</label>
                  </div>
                </div>
              </div>
            </div>
          </p>
          <p>
            <div class="ui form" onChange={this.handleChangeGradcourse}>
              <div class="inline fields">
                <label>Graduate Course?</label>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input type="radio" name="gradcourse" value="Yes"/>
                    <label>Yes</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input type="radio" name="gradcourse" value="No"/>
                    <label>No</label>
                  </div>
                </div>
              </div>
            </div>
          </p>
          <p>
            <a class="ui small header">Units</a>
            <div class="ui input fluid mini focus">
              <input
                type="number"
                onChange={this.handleChangeUnits}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Room</a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                onChange={this.handleChangeRoom}
                value={this.state.room}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Start Time</a>
            <div class="ui input fluid mini focus">
              <input
                type="time"
                onChange={this.handleChangeStarttime}
                value={this.state.starttime}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">End Time</a>
            <div class="ui input fluid mini focus">
              <input
                type="time"
                onChange={this.handleChangeEndtime}
                value={this.state.endtime}
              />
            </div>
          </p>
          
          <div class="ui center aligned container">
            <button
              class="ui center aligned blue button"
              onClick={this.startAdd}>
              Add Subject
            </button>
          </div>
        </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
