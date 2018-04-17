import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Dropdown, Form,
  Button,
  Container,
  Tab,
  Segment,
  Image,
  Label,
  Icon,
  Divider,
  Grid,
  Menu} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import GenericDropdown from './../GenericDropdown';
import NavBar from './../ui/NavBar';
import GenerateFSR from './../GenerateFSR';
import SendtoAdmin from './../SendtoAdmin';

const optionsMain = [
  { id: 0, text: 'Trainings' },
  { id: 1, text: 'Information Dissemination' },
  { id: 2, text: 'Workshops' },
  { id: 3, text: 'Symposium' },
  { id: 4, text: 'Others' }
];
const error = { 
  color: 'red'
};

var messageClass = 'ui negative message';

const errorTexts = [
  <span style={error}> {' is required'}</span>, //0
]

var formError = {
  text: {
    emp_id: '',
    type: '',
    title: '',
    noOfHours: '',
    noOfParticipants: '',
    startDate: '',
    endDate: '',
    role: '',
    fundingAgency: '',
    approvedCreditUnits: ''
  },
  bool: {
    emp_id: false,
    type: false,
    title: false,
    noOfHours: false,
    noOfParticipants: false,
    startDate: false,
    endDate: false,
    role: false,
    fundingAgency: false,
    approvedCreditUnits: false
  }
};


export default class AddExtension extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emp_id: '',
      type: '',
      title: '',
      noOfHours: '',
      noOfParticipants: '',
      startDate: '',
      endDate: '',
      role: '',
      fundingAgency: '',
      approvedCreditUnits: ''
    };

    this.handleChangeType = this.handleChangeType.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeNoOfHours = this.handleChangeNoOfHours.bind(this);
    this.handleChangeNoOfParticipants = this.handleChangeNoOfParticipants.bind(
      this
    );
    this.checkAdd = this.checkAdd.bind(this);
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
    this.handleChangeRole = this.handleChangeRole.bind(this);
    this.handleChangeFundingAgency = this.handleChangeFundingAgency.bind(this);
    this.handleChangeApprovedCreditUnits = this.handleChangeApprovedCreditUnits.bind(
      this
    );
    this.handleLogout = this.handleLogout.bind(this);
    this.startAdd = this.startAdd.bind(this);
  }
  componentDidMount() {
    Api.getSession().then(result => {
      if (result.data.data !== null) {
        this.setState({ emp_id: result.data.data.emp_id });
        console.log(this.state.emp_id)
      }
    });
  }

  handleChangeType(e) {
    this.setState({ type: e.target.value });
    // console.log(e.target.value);
  }

  handleChangeTitle(e) {
    this.setState({ title: e.target.value });
  }

  handleChangeNoOfHours(e) {
    this.setState({ noOfHours: e.target.value });
  }

  handleChangeNoOfParticipants(e) {
    this.setState({ noOfParticipants: e.target.value });
  }

  handleChangeStartDate(e) {
    this.setState({ startDate: e.target.value });
  }

  handleChangeEndDate(e) {
    this.setState({ endDate: e.target.value });
  }

  handleChangeRole(e) {
    this.setState({ role: e.target.value });
  }

  handleChangeFundingAgency(e) {
    this.setState({ fundingAgency: e.target.value });
  }

  handleChangeApprovedCreditUnits(e) {
    this.setState({ approvedCreditUnits: e.target.value });
  }

  handleLogout(e) {
    e.preventDefault();
    Api.logout();
    this.props.history.push('../..');
  }

  startAdd(e) {
    e.preventDefault();
    console.log("thsi")
    Api.addExtension({
      credit_unit: this.state.approvedCreditUnits,
      extension_name: this.state.title,
      extension_type: this.state.type,
      no_of_hours: this.state.noOfHours,
      no_of_participants: this.state.noOfParticipants,
      extension_role: this.state.role,
      start_time: this.state.startDate,
      end_time: this.state.endDate,
      funding_agency: this.state.fundingAgency,
      emp_id: this.state.emp_id
    })
      .then(result => {
        this.props.history.push('./view');
        alert('Extension successfully added!');
      })
      .catch(e => alert('Error adding new Extension!'));
  }

  checkAdd(e){
    e.preventDefault();
    if(!this.state.approvedCreditUnits){
      formError.text.approvedCreditUnits = errorTexts[0];
      formError.bool.approvedCreditUnits = false;
    }else{
      formError.text.approvedCreditUnits = '';
      formError.bool.approvedCreditUnits = true;
    }

    if(!this.state.emp_id){
      formError.text.emp_id = errorTexts[0];
      formError.bool.emp_id = false;
    }else{
      formError.text.emp_id = '';
      formError.bool.emp_id = true;
    }

    if(!this.state.type){
      formError.text.type = errorTexts[0];
      formError.bool.type = false;
    }else{
      formError.text.type = '';
      formError.bool.type = true;
    }

    if(!this.state.title){
      formError.text.title = errorTexts[0];
      formError.bool.title = false;
    }else{
      formError.text.title = '';
      formError.bool.title = true;
    }

    if(!this.state.noOfHours){
      formError.text.noOfHours = errorTexts[0];
      formError.bool.noOfHours = false;
    }else{
      formError.text.noOfHours = '';
      formError.bool.noOfHours = true;
    }

    if(!this.state.noOfParticipants){
      formError.text.noOfParticipants = errorTexts[0];
      formError.bool.noOfParticipants = false;
    }else{
      formError.text.noOfParticipants = '';
      formError.bool.noOfParticipants = true;
    }

    if(!this.state.startDate){
      formError.text.startDate = errorTexts[0];
      formError.bool.startDate = false;
    }else{
      formError.text.startDate = '';
      formError.bool.startDate = true;
    }


    if(!this.state.endDate){
      formError.text.endDate = errorTexts[0];
      formError.bool.endDate = false;
    }else{
      formError.text.endDate = '';
      formError.bool.endDate = true;
    }

    if(!this.state.role){
      formError.text.role = errorTexts[0];
      formError.bool.role = false;
    }else{
      formError.text.role = '';
      formError.bool.role = true;
    }

    if(!this.state.fundingAgency){
      formError.text.fundingAgency = errorTexts[0];
      formError.bool.fundingAgency = false;
    }else{
      formError.text.fundingAgency = '';
      formError.bool.fundingAgency = true;
    }

    if(
      formError.bool.emp_id &&
      formError.bool.type &&
      formError.bool.title &&
      formError.bool.noOfHours &&
      formError.bool.noOfParticipants &&
      formError.bool.startDate &&
      formError.bool.endDate &&
      formError.bool.role &&
      formError.bool.fundingAgency &&
      formError.bool.approvedCreditUnits
    ){
      this.startAdd(e);
    }else{
      console.log("Basta");
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div className="App-header">
        <div>
          <NavBar {...this.props} Label="FSR" subLabel="extension" />
        </div>
        <div className="bodyDiv">
          <div
            class="ui piled very padded text left aligned container segment"
            color="teal">
            <div>
              <h2 class="ui blue header">ADD EXTENSION</h2>
            </div>
            <Divider hidden="true" />
            <p>
              <div>
                <GenericDropdown
                  labelHeader="Extension Type "
                  labelProper="Choose Extension Type"
                  value={this.state.type}
                  handler={this.handleChangeType}
                  options={optionsMain}
                />
              </div>
            </p>
            <p>
              <a class="ui small header"><label><span>Title{formError.text.title}</span></label> </a>
              <div class="ui input fluid mini focus">
                <input type="text" onChange={this.handleChangeTitle} />
              </div>
            </p>
            <p>
              <a class="ui small header"><label><span>No of Hours{formError.text.noOfHours}</span></label> </a>
              <div class="ui input fluid mini focus">
                <input
                  type="number"
                  onChange={this.handleChangeNoOfHours}
                />
              </div>
            </p>
            <p>
              <a class="ui small header"><label><span>No of Participants{formError.text.noOfParticipants}</span></label></a>
              <div class="ui input fluid mini focus">
                <input
                  type="number"
                  onChange={this.handleChangeNoOfParticipants}
                />
              </div>
            </p>

            <p>
              <a class="ui small header"> Duration </a>
              <div class="equal width fields">
                <div class="field">
                  <a class="ui small header"><label><span>Start Date{formError.text.startDate}</span></label></a>
                  <div class="ui input fluid mini focus">
                    <input
                      type="date"
                      onChange={this.handleChangeStartDate}
                      style={{ width: '100px' }}
                    />
                  </div>
                </div>
                <div class="field">
                  <a class="ui small header"><label><span>End Date{formError.text.endDate}</span></label></a>
                  <div class="ui input fluid mini focus">
                    <input
                      type="date"
                      onChange={this.handleChangeEndDate}
                      style={{ width: '100px' }}
                    />
                  </div>
                </div>
              </div>
            </p>

            <p>
              <a class="ui small header"><label><span>Role{formError.text.role}</span></label></a>
              <div class="ui input fluid mini focus">
                <input type="text" onChange={this.handleChangeRole} />
              </div>
            </p>
            <p>
              <a class="ui small header"><label><span>Funding Agency{formError.text.fundingAgency}</span></label></a>
              <div class="ui input fluid mini focus">
                <input type="text" onChange={this.handleChangeFundingAgency} />
              </div>
            </p>
            <p>
              <a class="ui small header"><label><span>Approved Credit Units{formError.text.approvedCreditUnits}</span></label></a>
              <div class="ui input fluid mini focus">
                <input
                  type="number"
                  onChange={this.handleChangeApprovedCreditUnits}
                />
              </div>
            </p>
            <div class="ui center aligned container">
              <button
                class="ui center aligned blue button"
                onClick={this.checkAdd}>
                Add Extension
              </button>
            </div>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}