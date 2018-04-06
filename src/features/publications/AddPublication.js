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

const optionsMain = [ {id : 0, text : 'Research', Subtype : ["Research Proposal", "Research Implementation"]},
                      {id : 1, text : 'Creative Work', Subtype : ["Oral/Poster Papers","Papers for Conferences"
                      ,"Monographs","Articles in referred journals","Chapters in a book","Books","Others"]}]

const dummy1={
  fname: 'Hi',
  lname: 'Hello',
  emp_id: 1
  };

const dummy2={
  fname: 'Hi2',
  lname: 'Hello2',
  emp_id: 2
  };

const dummy3={
  fname: 'Hi3',
  lname: 'Hello3',
  emp_id: 3
  };

export default class AddPublication extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posCoworkers: [dummy1, dummy2, dummy3], //!!!
      researchType : '',
      researchSubtype : '',
      completeTitle: '',
      Role: '',
      Coworkers: [],   //!!!
      Funding: 'N/A',
      StartDate: '',
      EndDate: '',
      ApprovedCreditUnits: ''
    };

    this.handleChangeType = this.handleChangeType.bind(this);
    this.handleChangeSubtype = this.handleChangeSubtype.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeRole = this.handleChangeRole.bind(this);
    this.addCoworker = this.addCoworker.bind(this);  //!!!
    this.handleChangeFunding = this.handleChangeFunding.bind(this);
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
    this.handleChangeApprovedCreditUnits = this.handleChangeApprovedCreditUnits.bind(this);

    this.startAdd = this.startAdd.bind(this);
  }

  handleChangeType(e) {
    this.setState({ researchType: e.target.value });
    console.log(e.target.value);
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

  addCoworker(e){  //!!!
    if(this.state.Coworkers.includes(e.target.value)){
      for(var index = 0; index < this.state.Coworkers.length; index++){
        if(this.state.Coworkers[index] === e.target.value) 
          this.state.Coworkers.splice(index,1);
      }
      this.setState({Coworkers : this.state.Coworkers});
      console.log("Deleted " + e.target.value);
    }
    else{
      var newArray = this.state.Coworkers;
      newArray.push(e.target.value);
      this.setState({Coworkers : newArray});
      console.log("Added " + e.target.value);
    }
    console.log(this.state.Coworkers);
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
      <div className="App-header" class="wholediv">
        <NavBar {...this.props} Label="FSR" subLabel="publications"/>
        <div
          class="ui piled very padded text left aligned container segment mainDiv"
          color="teal">
          <div>
            <h2 class="ui blue header">
              ADD PUBLICATION
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
            <div class="ui input fluid mini focus">
              <input
                type="text"
                onChange={this.handleChangeTitle}
              />
            </div>
          </p>
          {
            this.state.researchType !== 'Research' ?
              <p>
                <a class="ui small header"> Role </a>
                <div class="ui input fluid mini focus">
                  <input
                    disabled
                    type="text"
                    onChange={this.handleChangeRole}
                  />
                </div>
              </p>
               :
              <p>
                <a class="ui small header"> Role </a>
                  <div class="ui input fluid mini focus">
                    <input
                      type="text"
                      onChange={this.handleChangeRole}
                    />
                </div>
              </p>
          }
          <p>
            <a class="ui small header"> Co-workers </a>
            {this.state.posCoworkers.map((item) =>{
                return(
                    <p>
                    <div class="ui checked checkbox">
                      <input type="checkbox" value={item.emp_id} onClick={this.addCoworker}/>
                      <label>{item.fname} {item.lname}</label>
                    </div>
                    </p>
                )
            })}
          </p>
          {
            this.state.researchSubtype !== 'Research Proposal' ?
              <p>
                <a class="ui small header"> Funding </a>
                <div class="ui input fluid mini focus">
                  <input
                    disabled
                    type="text"
                    onChange={this.handleChangeFunding}
                  />
                </div>
              </p>
               :
              <p>
                <a class="ui small header"> Funding </a>
                  <div class="ui input fluid mini focus">
                    <input
                      type="number"
                      onChange={this.handleChangeFunding}
                    />
                </div>
              </p>
          }

          {
            this.state.researchSubtype === 'Research Proposal' ?
              <p>
                <a class="ui small header"> Start Date </a>
                <div class="ui input fluid mini focus">
                  <input
                    disabled
                    type="date"
                    onChange={this.handleChangeStartDate}
                  />
                </div>
              </p>
               :
              <p>
                <a class="ui small header"> Start Date </a>
                  <div class="ui input fluid mini focus">
                    <input
                      type="date"
                      onChange={this.handleChangeStartDate}
                    />
                </div>
              </p>
          }

          {
            this.state.researchSubtype === 'Research Proposal' ?
              <p>
                <a class="ui small header"> End Date </a>
                <div class="ui input fluid mini focus">
                  <input
                    disabled
                    type="date"
                    onChange={this.handleChangeEndDate}
                  />
                </div>
              </p>
               :
              <p>
                <a class="ui small header"> End Date </a>
                  <div class="ui input fluid mini focus">
                    <input
                      type="date"
                      onChange={this.handleChangeEndDate}
                    />
                </div>
              </p>
          }

          <p>
            <a class="ui small header"> Approved Credit Units </a>
            <div class="ui input fluid mini focus">
              <input
                type="number"
                onChange={this.handleChangeApprovedCreditUnits}
              />
            </div>
          </p>

          <div class="ui center aligned container">
            <button class="ui blue button">Upload Attachments</button>
            <button
              class="ui blue button"
              onClick={this.startAdd}>
              Add Publication
            </button>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}

//=========================
ReactDOM.render(<AddPublication />, document.getElementById('root'));
