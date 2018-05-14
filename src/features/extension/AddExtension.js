import React, { Component } from 'react';
import {Divider} from 'semantic-ui-react';
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
    this.startAdd = this.startAdd.bind(this);
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this);

  }
  componentDidMount() {
    Api.getSession().then(result => {
      console.log("here");
      if (result.data.data !== null) {
        this.setState({ emp_id: result.data.data.emp_id });
        console.log(this.state.emp_id)
      }
    });
  }

  handleChangeType(e) {
    this.setState({ type: e.target.value });
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
    console.log("Magbabago");
    if (e.currentTarget.value === '' || ( this.state.endDate !== '' && e.currentTarget.value > this.state.endDate) ) {
      console.log("Mali")
      this.setState({ validStartDate: false });
    } else {
      this.setState({ validStartDate: true });
    }
    this.setState({ startDate: e.currentTarget.value });
  }

  handleChangeEndDate(e) {
    if (e.currentTarget.value === '' || ( this.state.startDate !== '' && e.currentTarget.value < this.state.startDate) ) {
      console.log("Mali din")
      this.setState({ validEndDate: false });
    } else {
      this.setState({ validEndDate: true });
    }
    this.setState({ endDate: e.currentTarget.value });
  }

  startAdd(e) {
    e.preventDefault();
    console.log("this jnafn" + this.state.validStartDate + " " + this.state.validEndDate)
    if(this.state.validStartDate === true && this.state.validEndDate === true){
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
              <h2 className="ui blue header">ADD EXTENSION</h2>
            </div>
            <Divider hidden="true" />
            <p>
              <div className="field">
                <GenericDropdown
                  labelHeader="Extension Type "
                  labelProper="Choose Extension Type"
                  value={this.state.type}
                  handler={this.handleChangeType}
                  options={optionsMain}
                />
                {this.state.type === '' ?
                  (
                    <div className="ui left pointing red basic label">
                    Required
                    </div>
                  ) : (<div></div>)
                }
              </div>
            </p>
            <p>
              <a className="ui small header">Title</a>
              <div className="ui input fluid mini focus">
                <input type="text" onChange={this.handleChangeTitle} />
                {this.state.title === '' ?
                  (
                    <div className="ui left pointing red basic label">
                    Required
                    </div>
                  ) : (<div></div>)
                }
              </div>
            </p>
            <p>
              <a className="ui small header">No of Hours</a>
              <div className="ui input fluid mini focus">
                <input
                  type="number"
                  min="0"
                  onChange={this.handleChangeNoOfHours}
                />
                {this.state.noOfHours === '' ?
                  (
                    <div className="ui left pointing red basic label">
                    Required
                    </div>
                  ) : (<div></div>)
                }
              </div>
            </p>
            <p>
              <a className="ui small header">No of Participants</a>
              <div className="ui input fluid mini focus">
                <input
                  type="number"
                  min="0"
                  onChange={this.handleChangeNoOfParticipants}
                />
                {this.state.noOfParticipants === '' ?
                  (
                    <div className="ui left pointing red basic label">
                    Required
                    </div>
                  ) : (<div></div>)
                }
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
                    />
                  </div>
                </div>
                <div className="field">
                  <a className="ui small header">End Date</a>
                  <div className="ui input fluid mini focus">
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
              <a className="ui small header">Role</a>
              <div className="ui input fluid mini focus">
                <input type="text" onChange={this.handleChangeRole} />
                {this.state.role === '' ?
                  (
                    <div className="ui left pointing red basic label">
                    Required
                    </div>
                  ) : (<div></div>)
                }
              </div>
            </p>
            <p>
              <a className="ui small header">Funding Agency</a>
              <div className="ui input fluid mini focus">
                <input type="text" onChange={this.handleChangeFundingAgency} />
                {this.state.fundingAgency === '' ?
                  (
                    <div className="ui left pointing red basic label">
                    Required
                    </div>
                  ) : (<div></div>)
                }
              </div>
            </p>
            <p>
              <a className="ui small header">Approved Credit Units</a>
              <div className="ui input fluid mini focus">
                <input
                  type="number"
                  min="0"
                  onChange={this.handleChangeApprovedCreditUnits}
                />
                {this.state.approvedCreditUnits === '' ?
                  (
                    <div className="ui left pointing red basic label">
                    Required
                    </div>
                  ) : (<div></div>)
                }
              </div>
            </p>
            <div className="ui center aligned container">
              <button
                className="ui blue button">
                Upload Attachments
              </button>
              <button
                className="ui center aligned blue button"
                onClick={this.startAdd}
                >
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
