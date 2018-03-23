import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider, Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import GenericDropdown from './../GenericDropdown'
import PublicationSubTypeDropdown from './PublicationSubTypeDropdown'
import NavBar from './../ui/NavBar'
import GenerateFSR from './../GenerateFSR'
import SendtoAdmin from './../SendtoAdmin'
import GenericDisabledInput from './../GenericDisabledInput'

const optionsMain = [ {id : 0, text : 'Research', Subtype : ["Research Proposal", "Research Implementation"]},
                      {id : 1, text : 'Creative Work', Subtype : ["Oral/Poster Papers","Papers for Conferences"
                      ,"Monographs","Articles in referred journals","Chapters in a book","Books","Others"]}]

export default class EditPublication extends Component {
  constructor(props) {
    super(props);

    this.state = {
      researchType: '',
      researchSubtype : '',
      completeTitle: '',
      Role: '',
      Coworkers: '',
      Funding: 'N/A',
      StartDate: '',
      EndDate: '',
      ApprovedCreditUnits: '',
      TotalWorkLoadUnits: ''
    };

    this.handleChangeType = this.handleChangeType.bind(this);
    this.handleChangeSubtype = this.handleChangeSubtype.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeRole = this.handleChangeRole.bind(this);
    this.handleChangeCoworkers = this.handleChangeCoworkers.bind(this);
    this.handleChangeFunding = this.handleChangeFunding.bind(this);
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
    this.handleChangeApprovedCreditUnits = this.handleChangeApprovedCreditUnits.bind(this);
    this.handleChangeTotalWorkLoadUnits = this.handleChangeTotalWorkLoadUnits.bind(this);

    this.startAdd = this.startAdd.bind(this);
  }

  handleChangeType(e) {
    this.setState({ researchType: e.target.value });
  }

  handleChangeSubtype(e) {
    this.setState({ researchSubtype: e.target.value });
  }

  handleChangeTitle(e) {
    this.setState({ completeTitle: e.target.value });
  }

  handleChangeRole(e) {
    this.setState({ Role: e.target.value });
  }

  handleChangeCoworkers(e) {
    this.setState({ Coworkers: e.target.value });
  }

  handleChangeFunding(e) {
    this.setState({ Funding: e.target.value });
  }

  handleChangeStartDate(e) {
    this.setState({ StartDate: e.target.value });
  }

  handleChangeEndDate(e) {
    this.setState({ EndDate: e.target.value });
  }

  handleChangeApprovedCreditUnits(e) {
    this.setState({ ApprovedCreditUnits: e.target.value });
  }

  handleChangeTotalWorkLoadUnits(e) {
    this.setState({ TotalWorkLoadUnits: e.target.value });
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
              View Publications
              <GenerateFSR/>
              <SendtoAdmin/>
            </h2>
          </div>
          <Divider hidden="true" />
          <div>
            <GenericDropdown
              labelHeader = "Publication Type"
              labelProper = "Choose Publication Type"
              value = {this.state.researchType}
              handler = {this.handleChangeType}
              options = {optionsMain}/>
          </div>
          <div>
            <PublicationSubTypeDropdown
              value = {this.state.researchSubtype}
              handler = {this.handleChangeSubtype}
              options = {optionsMain}
              research = {this.state.researchType} />
          </div>
          <p>
            <a class="ui small header"> Complete Title </a>
            <div class="ui input mini focus">
              <input
                type="text"
                style={{ width: '432px' }}
                onChange={this.handleChangeTitle}
                placeHolder={this.state.completeTitle}
              />
            </div>
          </p>
          <GenericDisabledInput
            compareState = {this.state.researchType}
            compareString = "Research"
            operation = "!=="
            label = "Role"
            type = "text"
            length = "432 px"
            handler = {this.handleChangeRole} />
          <p>
            <a class="ui small header"> Co-workers / Co-authors </a>
            <div class="ui input mini focus">
              <input
                type="text"
                style={{ width: '300px' }}
                onChange={this.handleChangeCoworkers}
              />
            </div>
          </p>
          <GenericDisabledInput
            compareState = {this.state.researchSubtype}
            compareString = "Research Proposal"
            operation = "!=="
            label = "Funding"
            type = "text"
            length = "432 px"
            handler = {this.handleChangeFunding} />

          <GenericDisabledInput
            compareState = {this.state.researchSubtype}
            compareString = "Research Proposal"
            operation = "==="
            label = "Start Date"
            type = "date"
            length = "150 px"
            handler = {this.handleChangeStartDate} />

          <GenericDisabledInput
            compareState = {this.state.researchSubtype}
            compareString = "Research Proposal"
            operation = "==="
            label = "End Date"
            type = "date"
            length = "150 px"
            handler = {this.handleChangeEndDate} />

          <p>
            <a class="ui small header"> Approved Credit Units </a>
            <div class="ui input mini focus">
              <input
                type="number"
                style={{ width: '100px' }}
                onChange={this.handleChangeApprovedCreditUnits}
              />
            </div>
          </p>

          <p>
            <a class="ui small header"> Total Work Load Units </a>
            <div class="ui input mini focus">
              <input
                type="number"
                style={{ width: '100px' }}
                onChange={this.handleChangeTotalWorkLoadUnits}
              />
            </div>
          </p>

          <div class="ui center aligned container">
            <button class="ui blue button">Upload Attachments</button>
            <button
              class="ui blue button"
              onClick={this.startAdd}>
              Save changes
            </button>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}

//=========================
ReactDOM.render(<EditPublication />, document.getElementById('root'));
