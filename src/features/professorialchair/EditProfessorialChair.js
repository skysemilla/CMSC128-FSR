import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';

export default class EditProfessorialChair extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emp_id: '',
      nominee: '',
      nominated: '',
      profchair: '',
      grant: '',
      granttitle: '',
      startdate: '',
      enddate: '',

      validProfChair: true,
      validGrant: true,
      validGrantTitle: true,
      validStartDate: true,
      validEndDate: true,

      edit_trial_count: 0
    };

    this.handleChangeNominee = this.handleChangeNominee.bind(this);
    this.handleChangeNominated = this.handleChangeNominated.bind(this);
    this.handleChangeProfChair = this.handleChangeProfChair.bind(this);
    this.handleChangeGrant = this.handleChangeGrant.bind(this);
    this.handleChangeGrantTitle = this.handleChangeGrantTitle.bind(this);
    this.handleChangeStartdate = this.handleChangeStartdate.bind(this);
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
    this.startAdd = this.startAdd.bind(this);
  }
  componentDidMount() {
    Api.getSession().then(result => {
      if (result.data.data !== null) {
        this.setState({ emp_id: result.data.data.emp_id });

        // this...
        Api.viewFacultyGrant({ emp_id: result.data.data.emp_id }).then(res => {
          if (res.data.data !== null) {
            this.setState({
              ...this.state,
              profchair: res.data.data[0].professional_chair,
              grant: res.data.data[0].grants,
              granttitle: res.data.data[0].grant_title
            });
          }
        }); // ... is to populate the initial state variables, "sana"
      }
    });
  }
  handleChangeNominee(e) {
    this.setState({ nominee: e.target.value });
  }

  handleChangeNominated(e) {
    this.setState({ nominated: e.target.value });
  }

  handleChangeProfChair(e) {
    this.setState({ profchair: e.target.value });
    if (
      parseFloat(this.state.profchair) == this.state.profchair || // == not ===
      this.state.profchair === ''
    ) {
      // if input is plain numbers or blank
      this.setState({ validProfChair: false }); // input is invalid
    } else {
      // else valid
      this.setState({ validProfChair: true });
    }
  }

  handleChangeGrant(e) {
    this.setState({ grant: e.target.value });
    if (
      parseFloat(this.state.grant) == this.state.grant || // == not ===
      this.state.grant === ''
    ) {
      // if input is plain numbers or blank
      this.setState({ validGrant: false }); // input is invalid
    } else {
      // else valid
      this.setState({ validGrant: true });
    }
  }

  handleChangeGrantTitle(e) {
    this.setState({ granttitle: e.target.value });
    if (
      parseFloat(this.state.granttitle) == this.state.granttitle || // == not ===
      this.state.granttitle === ''
    ) {
      // if input is plain numbers or bank
      this.setState({ validGrantTitle: false }); // input is invalid
    } else {
      // else valid
      this.setState({ validGrantTitle: true });
    }
  }

  handleChangeStartdate(e) {
    // input date validation
    if (
      e.target.value === '' ||
      (this.state.enddate !== '' && e.target.value > this.state.enddate)
    ) {
      this.setState({ validStartDate: false });
    } else {
      this.setState({ validStartDate: true });
    }
    this.setState({ startdate: e.target.value }); // still, apply changes
  }

  handleChangeEndDate(e) {
    // input date validation
    if (
      e.target.value === '' ||
      (this.state.startdate !== '' && e.target.value < this.state.startdate)
    ) {
      this.setState({ validEndDate: false });
    } else {
      this.setState({ validEndDate: true });
      if (this.state.startdate !== '') {
        this.setState({ validStartDate: true }); // and so both are validz
      }
    }

    this.setState({ enddate: e.target.value }); // still, apply changes
  }

  startAdd(e) {
    this.setState({ edit_trial_count: 1 });

    // if date field is enabled
    if (
      this.state.nominee === 'No' ||
      (this.state.validGrantTitle !== false &&
        this.state.validStartDate !== false &&
        this.state.nominated !== '' &&
        // this.state.profchair !== '' &&
        // parseFloat(this.state.profchair) != this.state.profchair && // if input is not purely numbers
        // this.state.grant !== '' &&
        // parseFloat(this.state.grant) != this.state.grant && // if input is not purely numbers
        // this.state.granttitle !== '' &&
        // parseFloat(this.state.granttitle) != this.state.granttitle && // if input is not purely numbers
        this.state.validProfChair !== false &&
        this.state.validGrant !== false &&
        this.state.validGrantTitle !== false &&
        this.state.startdate < this.state.enddate)
      //&&
      // parseFloat(this.state.profchair) !== this.state.profchair &&
      // parseFloat(this.state.grant) !== this.state.grant &&
      // parseFloat(this.state.granttitle) !== this.state.granttitle
    ) {
      // other fields must have a valid input

      e.preventDefault();
      Api.editProfessorialChair({
        emp_id: this.state.emp_id,
        type: this.state.nominee,
        is_approved: this.state.nominated,
        professional_chair: this.state.profchair,
        grants: this.state.grant,
        grant_title: this.state.granttitle,
        start_date: this.state.startdate,
        end_date: this.state.enddate
      })
        .then(result => {
          this.props.history.push('./view');
          alert('Professorial Chair successfully edited!');
        })
        .catch(e => alert('Error editing Professorial Chair!'));
    } // if valid date
    else {
      // else invalid date
      alert('Invalid input!');
    }
  }

  render() {
    return (
      <div className="App-header">
        <div>
          <NavBar {...this.props} Label="FSR" subLabel="profchair" />
        </div>
        <div className="bodyDiv">
          <div
            className="ui piled very padded text left aligned container segment"
            color="teal">
            <div>
              <h2 className="ui blue header">EDIT PROFESSORIAL CHAIR</h2>
            </div>
            <Divider hidden="true" />
            <p>
              <div className="ui form">
                <div className="inline fields">
                  <label>Are you a receipient or a nominee?</label>
                  <div className="field">
                    <div className="ui radio checkbox">
                      <input
                        type="radio"
                        name="nominee"
                        value="Yes"
                        onClick={this.handleChangeNominee}
                      />
                      <label>Yes</label>
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui radio checkbox">
                      <input
                        type="radio"
                        name="nominee"
                        value="No"
                        onClick={this.handleChangeNominee}
                      />
                      <label>No</label>
                    </div>
                  </div>
                  {!this.state.nominee ? (
                    <div className="ui left pointing red basic label">
                      Required
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            </p>

            {this.state.nominee === 'Yes' ? (
              <div>
                <p>
                  <div className="ui form">
                    <div className="inline fields">
                      <label>
                        College has already nominated without appointment?
                      </label>
                      <div className="field">
                        <div className="ui radio checkbox">
                          <input
                            type="radio"
                            name="nominated"
                            value={1}
                            onClick={this.handleChangeNominated}
                          />
                          <label>Yes</label>
                        </div>
                      </div>
                      <div className="field">
                        <div className="ui radio checkbox">
                          <input
                            type="radio"
                            name="nominated"
                            value={0}
                            onClick={this.handleChangeNominated}
                          />
                          <label>No</label>
                        </div>
                      </div>
                      {this.state.nominated === '' ? (
                        <div className="ui left pointing red basic label">
                          Required
                        </div>
                      ) : (
                        <div className="ui left pointing green basic label">
                          Valid
                        </div>
                      )}
                    </div>
                  </div>
                </p>
                <p>
                  <a className="ui small header">
                    Professorial Chair{' '}
                    {!this.state.profchair ? (
                      <div className="ui left pointing red basic label">
                        Invalid input
                      </div>
                    ) : (
                      <div className="ui left pointing green basic label">
                        Valid
                      </div>
                    )}
                  </a>

                  <div className="ui input fluid mini focus">
                    <input
                      type="text"
                      onChange={this.handleChangeProfChair}
                      value={this.state.profchair}
                    />
                  </div>
                </p>
                <p>
                  <a className="ui small header">
                    Grant{' '}
                    {!this.state.grant ? (
                      <div className="ui left pointing red basic label">
                        Invalid input
                      </div>
                    ) : (
                      <div className="ui left pointing green basic label">
                        Valid
                      </div>
                    )}
                  </a>
                  <div className="ui input fluid mini focus">
                    <input
                      type="text"
                      onChange={this.handleChangeGrant}
                      value={this.state.grant}
                    />
                  </div>
                </p>
                <p>
                  <a className="ui small header">
                    Grant Title{' '}
                    {!this.state.granttitle ? (
                      <div className="ui left pointing red basic label">
                        Invalid input
                      </div>
                    ) : (
                      <div className="ui left pointing green basic label">
                        Valid
                      </div>
                    )}
                  </a>
                  <div className="ui input fluid mini focus">
                    <input
                      type="text"
                      onChange={this.handleChangeGrantTitle}
                      value={this.state.granttitle}
                    />
                  </div>
                </p>
                <p>
                  <a className="ui small header">
                    Start Date{' '}
                    {!this.state.startdate ? (
                      <div className="ui pointing red basic label">
                        Invalid start date!
                      </div>
                    ) : (
                      <div className="ui left pointing green basic label">
                        Valid
                      </div>
                    )}
                  </a>
                  <div className="ui input fluid mini focus">
                    <input type="date" onChange={this.handleChangeStartdate} />
                  </div>
                </p>
                <p>
                  <a className="ui small header">
                    End Date{' '}
                    {!this.state.enddate ? (
                      <div className="ui pointing red basic label">
                        Invalid end date!
                      </div>
                    ) : (
                      <div className="ui left pointing green basic label">
                        Valid
                      </div>
                    )}
                  </a>
                  <div className="ui input fluid mini focus">
                    <input type="date" onChange={this.handleChangeEndDate} />
                  </div>
                </p>

                <Divider hidden="true" />
              </div>
            ) : (
              <div>
                <p>
                  <div className="ui form">
                    <div className="inline fields">
                      <label>
                        College has already nominated without appointment?
                      </label>
                      <div className="field">
                        <div className="ui radio checkbox">
                          <input
                            disabled="disabled"
                            type="radio"
                            name="nominated"
                            value="Yes"
                            onClick={this.handleChangeNominated}
                          />
                          <label>Yes</label>
                        </div>
                      </div>
                      <div className="field">
                        <div className="ui radio checkbox">
                          <input
                            disabled="disabled"
                            type="radio"
                            name="nominated"
                            value="No"
                            onClick={this.handleChangeNominated}
                          />
                          <label>No</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </p>
                <p>
                  <a className="ui small header">Professorial Chair </a>
                  <div className="ui input fluid mini focus">
                    <input
                      disabled
                      type="text"
                      onChange={this.handleChangeProfChair}
                      placeholder={this.state.profchair}
                    />
                  </div>
                </p>
                <p>
                  <a className="ui small header">Grant </a>
                  <div className="ui input fluid mini focus">
                    <input
                      disabled
                      type="text"
                      onChange={this.handleChangeGrant}
                      placeholder={this.state.grant}
                    />
                  </div>
                </p>
                <p>
                  <a className="ui small header">Grant Title </a>
                  <div className="ui input fluid mini focus">
                    <input
                      disabled
                      type="text"
                      onChange={this.handleChangeGrantTitle}
                      placeholder={this.state.granttitle}
                    />
                  </div>
                </p>
                <p>
                  <a className="ui small header">Start Date </a>
                  <div className="ui input fluid mini focus">
                    <input
                      disabled
                      type="date"
                      onChange={this.handleChangeStartdate}
                    />
                  </div>
                </p>
                <p>
                  <a className="ui small header">End Date </a>
                  <div className="ui input fluid mini focus">
                    <input
                      disabled
                      type="date"
                      onChange={this.handleChangeEndDate}
                    />
                  </div>
                </p>
                <Divider hidden="true" />
              </div>
            )}

            <div className="ui center aligned container">
              <button className="ui blue button">Upload Attachment</button>
              <button
                className="ui center aligned blue button"
                onClick={this.startAdd}>
                Edit Professorial Chair
              </button>
            </div>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
