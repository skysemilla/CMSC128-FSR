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
      totalAdminLoadCredits: '',
      office: '',
      credit_units: '',
      emp_id: ''
    };

    this.handlePositionOfWork = this.handlePositionOfWork.bind(this);
    this.handleOfficeUnit = this.handleOfficeUnit.bind(this);
    this.handleApprovedCreditUnits = this.handleApprovedCreditUnits.bind(this);
    this.handleTotalAdminCredits = this.handleTotalAdminCredits.bind(this);
    this.handleChangeOffice = this.handleChangeOffice.bind(this);
    this.handleChangeCreditUnits = this.handleChangeCreditUnits.bind(this);
    this.startAdd = this.startAdd.bind(this);
  }

  componentDidMount() {
    Api.getSession().then(result => {
      this.setState({ emp_id: result.data.data.emp_id });
    });
  }

  handleChangeOffice(e) {
    this.setState({ office: e.target.value });
  }

  handleChangeCreditUnits(e) {
    this.setState({ credit_units: e.target.value });
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

  handleTotalAdminCredits(e) {
    this.setState({ totalAdminLoadCredits: e.target.value });
  }

  startAdd(e) {
    e.preventDefault();
    Api.editPosition({
      position_id: this.props.history.location.state.id,
      // position_id: 3,
      office: this.state.officeUnit,
      credit_units: this.state.approvedCreditUnits,
      nature_of_work: this.state.positionOfWork,
      emp_id: this.state.emp_id
    })
      .then(result => {
        this.props.history.push('./publications/view'); //change to profile later!!
        alert('Position successfully added!');
      })
      .catch(e => alert('Error adding new Position!'));
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

          <p>
            <a class="ui small header"> Total Administrative Load Credits </a>{' '}
            {/* Can change to dropdown? */}
            <div class="ui input fluid mini focus">
              <input type="number" onChange={this.handleTotalAdminCredits} />
            </div>
          </p>

          <div class="ui center aligned container">
            <button class="ui blue button">Upload Attachment</button>
            <button class="ui blue button" onClick={this.startAdd}>
              Edit Administrative Work
            </button>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
