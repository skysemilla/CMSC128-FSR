import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import GenericDropdown from './../GenericDropdown';
import NavBar from './../ui/NavBar';

const optionsMain = [
  { id: 0, text: 'Trainings' },
  { id: 1, text: 'Information Dissemination' },
  { id: 2, text: 'Workshops' },
  { id: 3, text: 'Symposium' },
  { id: 4, text: 'Others' }
];

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
      approvedCreditUnits: '',

      validStartDate: false,
      validEndDate: false
    };

    this.handleChangeType = this.handleChangeType.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeNoOfHours = this.handleChangeNoOfHours.bind(this);
    this.handleChangeNoOfParticipants = this.handleChangeNoOfParticipants.bind(
      this
    );
    this.handleChangeRole = this.handleChangeRole.bind(this);
    this.handleChangeFundingAgency = this.handleChangeFundingAgency.bind(this);
    this.handleChangeApprovedCreditUnits = this.handleChangeApprovedCreditUnits.bind(
      this
    );
    this.handleLogout = this.handleLogout.bind(this);
    this.startEdit = this.startEdit.bind(this);
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
  }
  componentDidMount() {
    if (this.props.history.location.state === undefined)
      this.props.history.push('/extension/view');
    else {
      Api.getSession().then(result => {
        if (result.data.data !== null) {
          this.setState({ emp_id: result.data.data.emp_id });
          if (typeof this.props.history !== 'undefined') {
            Api.viewExtensionByID({
              id: this.props.history.location.state.id
            }).then(result => {
              console.log(result.data.data);
              this.setState({
                emp_id: result.data.data[0].emp_id,
                type: result.data.data[0].extension_type,
                title: result.data.data[0].extension_name,
                noOfHours: result.data.data[0].no_of_hours,
                noOfParticipants: result.data.data[0].no_of_participants,
                startDate: result.data.data[0].start_time,
                endDate: result.data.data[0].end_time,
                role: result.data.data[0].extension_role,
                fundingAgency: result.data.data[0].funding_agency,
                approvedCreditUnits: result.data.data[0].credit_unit
              });
            });
          }
        }
      });
    }
  }

  handleChangeType(e) {
    this.setState({ type: e.target.value });
    console.log(e.target.value);
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

  handleChangeStartDate(e) {
    if (
      e.target.value === '' ||
      (this.state.enddate !== '' && e.target.value > this.state.enddate)
    ) {
      this.setState({ validStartDate: false });
    } else {
      this.setState({ validStartDate: true });
    }
    this.setState({ startDate: e.target.value });
  }

  handleChangeEndDate(e) {
    if (
      e.target.value === '' ||
      (this.state.startdate !== '' && e.target.value < this.state.startdate)
    ) {
      this.setState({ validEndDate: false });
    } else {
      this.setState({ validEndDate: true });
    }
    this.setState({ endDate: e.target.value });
  }

  startEdit(e) {
    e.preventDefault();
    Api.editExtension({
      extension_id_update: this.props.history.location.state.id,
      extension_type_update: this.state.type,
      extension_name_update: this.state.title,
      no_of_hours_update: this.state.noOfHours,
      no_of_participants_update: this.state.noOfParticipants,
      start_time_update: this.state.startDate,
      end_time_update: this.state.endDate,
      funding_agency_update: this.state.fundingAgency,
      extension_role_update: this.state.role,
      credit_unit_update: this.state.approvedCreditUnits,
      emp_id_update: this.state.emp_id
    })
      .then(result => {
        this.props.history.push('./view');
        alert('Extension successfully edited!');
      })
      .catch(e => alert('Error editing Extension!'));
  }

  render() {
    return (
      <div className="App-header">
        <div>
          <NavBar {...this.props} Label="FSR" subLabel="extension" />
        </div>
        <div className="bodyDiv">
          <div
            className="ui piled very padded text left aligned container segment"
            color="teal">
            <div>
              <h2 className="ui blue header">EDIT EXTENSION</h2>
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
                {this.state.type === '' ? (
                  <div className="ui left pointing red basic label">
                    Required
                  </div>
                ) : (
                  <div />
                )}
              </div>
            </p>
            <p>
              <a className="ui small header">Title</a>
              <div className="ui input fluid mini focus">
                <input
                  type="text"
                  onChange={this.handleChangeTitle}
                  value={this.state.title}
                />
                {this.state.title === '' ? (
                  <div className="ui left pointing red basic label">
                    Required
                  </div>
                ) : (
                  <div />
                )}
              </div>
            </p>
            <p>
              <a className="ui small header">No of Hours</a>
              <div className="ui input fluid mini focus">
                <input
                  type="number"
                  onChange={this.handleChangeNoOfHours}
                  value={this.state.noOfHours}
                />
                {this.state.noOfHours === '' ? (
                  <div className="ui left pointing red basic label">
                    Required
                  </div>
                ) : (
                  <div />
                )}
              </div>
            </p>
            <p>
              <a className="ui small header">No of Participants</a>
              <div className="ui input fluid mini focus">
                <input
                  type="number"
                  onChange={this.handleChangeNoOfParticipants}
                  value={this.state.noOfParticipants}
                />
                {this.state.noOfParticipants === '' ? (
                  <div className="ui left pointing red basic label">
                    Required
                  </div>
                ) : (
                  <div />
                )}
              </div>
            </p>
            <p>
              <a className="ui small header"> Duration </a>
              <div className="equal width fields">
                <div className="field">
                  <a className="ui small header">Start Date</a>
                  <div className="ui input fluid mini focus">
                    <input
                      type="date"
                      onChange={this.handleChangeStartDate}
                      style={{ width: '100px' }}
                      value={this.state.startDate}
                    />
                    {this.state.startDate === '' ? (
                      <div className="ui left pointing red basic label">
                        Required
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>
                </div>
                <div className="field">
                  <a className="ui small header">End Date</a>
                  <div className="ui input fluid mini focus">
                    <input
                      type="date"
                      onChange={this.handleChangeEndDate}
                      style={{ width: '100px' }}
                      value={this.state.endDate}
                    />
                    {this.state.endDate === '' ? (
                      <div className="ui left pointing red basic label">
                        Required
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>
                </div>
              </div>
            </p>
            <p>
              <a className="ui small header">Role</a>
              <div className="ui input fluid mini focus">
                <input
                  type="text"
                  onChange={this.handleChangeRole}
                  value={this.state.role}
                />
                {this.state.role === '' ? (
                  <div className="ui left pointing red basic label">
                    Required
                  </div>
                ) : (
                  <div />
                )}
              </div>
            </p>
            <p>
              <a className="ui small header">Funding Agency</a>
              <div className="ui input fluid mini focus">
                <input
                  type="text"
                  onChange={this.handleChangeFundingAgency}
                  value={this.state.fundingAgency}
                />
                {this.state.fundingAgency === '' ? (
                  <div className="ui left pointing red basic label">
                    Required
                  </div>
                ) : (
                  <div />
                )}
              </div>
            </p>
            <p>
              <a className="ui small header">Approved Credit Units</a>
              <div className="ui input fluid mini focus">
                <input
                  type="number"
                  onChange={this.handleChangeApprovedCreditUnits}
                  value={this.state.approvedCreditUnits}
                />
                {this.state.approvedCreditUnits === '' ? (
                  <div className="ui left pointing red basic label">
                    Required
                  </div>
                ) : (
                  <div />
                )}
              </div>
            </p>
            <div className="ui center aligned container">
              <button
                className="ui center aligned blue button"
                onClick={this.startEdit}>
                Edit Extension
                </button>
            </div>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
