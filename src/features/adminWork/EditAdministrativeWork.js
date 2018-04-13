import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider, Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';
import GenerateFSR from './../GenerateFSR';
import SendtoAdmin from './../SendtoAdmin';

export default class EditAdministrativeWork extends Component {
  constructor(props) {
    super(props);

    this.state = {
      positionOfWork: '',
      officeUnit: '',
      approvedCreditUnits: '',
      totalAdminLoadCredits: ''
    };

    this.handlePositionOfWork = this.handlePositionOfWork.bind(this);
    this.handleOfficeUnit = this.handleOfficeUnit.bind(this);
    this.handleApprovedCreditUnits = this.handleApprovedCreditUnits.bind(this);

    this.startAdd = this.startAdd.bind(this);
  }

  handlePositionOfWork(e) {
    this.setState({ positionOfWork: e.target.value });
  }

  handleOfficeUnit(e) {
    this.setState({ officeUnit: e.target.value });
  }

  handleApprovedCreditUnits(e) {
    this.setState({ approvedCreditUnits: e.target.value });
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
        <NavBar {...this.props} Label="FSR" subLabel="adminwork" />
        <div
          class="ui piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 class="ui blue header">EDIT ADMINISTRATIVE WORK</h2>
          </div>
          <Divider hidden="true" />
          <p>
            <a class="ui small header">
              {' '}
              Position/Nature of Adminstrative Work{' '}
            </a>
            <div class="ui input fluid mini focus">
              <input type="text" onChange={this.handlePositionOfWork} />
            </div>
          </p>

          <p>
            <a class="ui small header"> Office Unit </a>{' '}
            {/* Can change to dropdown? */}
            <div class="ui input fluid mini focus">
              <input type="text" onChange={this.handleOfficeUnit} />
            </div>
          </p>

          <p>
            <a class="ui small header"> Approved Credit Units </a>{' '}
            {/* Can change to number? */}
            <div class="ui input fluid mini focus">
              <input type="number" onChange={this.handleApprovedCreditUnits} />
            </div>
          </p>

          <table class="ui unstackable table" style={{ border: 0 }}>
            <tr>
              <td>
                <p class="ui segment">
                  Total Load Credits: {this.state.totalAdminLoadCredits}
                </p>
              </td>
              <td class="right aligned">
                <button class="ui blue button">Upload Attachment</button>
                <button class="ui blue button" onClick={this.startAdd}>
                  Edit Administrative Work
                </button>
              </td>
            </tr>
          </table>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
