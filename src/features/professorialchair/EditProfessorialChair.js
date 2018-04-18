import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import ProfessorialChairViewRow from './ProfessorialChairViewRow';
import GenerateFSR from './../GenerateFSR';
import SendtoAdmin from './../SendtoAdmin';
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

      validStartDate: false,
      validEndDate: false
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
        
        this.setState({emp_id: result.data.data.emp_id})
        
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
  }

  handleChangeGrant(e) {
    this.setState({ grant: e.target.value });
  }

  handleChangeGrantTitle(e) {
    this.setState({ granttitle: e.target.value });
  }

  handleChangeStartdate(e) {
    console.log("start date changed");
    console.log('from ' + this.state.startdate + ' to ' + e.target.value);

    // input date validation
    if (e.target.value == '' || ( this.state.enddate != '' && e.target.value > this.state.enddate) ) {
      console.log('new start date is after end date');
      this.setState({ validStartDate: false });
      //this.setState({ validEndDate: false }); // and vice-versa
    } else {
      console.log('new start date is before end date');
      this.setState({ validStartDate: true });
      //this.setState({ validEndDate: true }); // and so both are valid
    }

    console.log('e.target.value: ');
    console.log(e.target.value)
    this.setState({ startdate: e.target.value }); // still, apply changes
  }

  handleChangeEndDate(e) {
    console.log("end date changed");
    console.log('from ' + this.state.enddate + ' to ' + e.target.value);

    // input date validation
    if (e.target.value == '' || ( this.state.startdate != '' && e.target.value < this.state.startdate) ) {
      console.log('new end date is before start date');
      this.setState({ validEndDate: false });
      //this.setState({ validStartDate: false }); // and vice-versa
    } else {
      console.log('new end date is after start date');
      this.setState({ validEndDate: true });
      //this.setState({ validStartDate: true }); // and so both are valid
    }

    console.log('e.target.value: ');
    console.log(e.target.value)
    this.setState({ enddate: e.target.value }); // still, apply changes
  }

  startAdd(e) {
    // if date field is enabled
    if ( ( this.state.nominee === 'No' ) ||
    ( this.state.validGrantTitle !== false && this.state.validStartDate !== false && 
      this.state.nominated !== '' && this.state.profchair !== '' && 
      this.state.grant !== '' && this.state.granttitle !== '' )
    ) {
    // other fields must have a valid input

        e.preventDefault();
        console.log(this.state.emp_id)
        console.log(this.state.nominee)
        console.log(this.state.nominated)
        console.log(this.state.profchair)
        console.log(this.state.grant)
        console.log(this.state.granttitle)
        console.log(this.state.startdate)
        console.log(this.state.enddate)
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
    else { // else invalid date
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
            class="ui piled very padded text left aligned container segment"
            color="teal">
            <div>
              <h2 class="ui blue header">EDIT PROFESSORIAL CHAIR</h2>
            </div>
            <Divider hidden="true" />
            <p>
              <div class="ui form">
                <div class="inline fields">
                  <label>Are you a receipient or a nominee?</label>
                  <div class="field">
                    <div class="ui radio checkbox">
                      <input
                        type="radio"
                        name="nominee"
                        value="Yes"
                        onClick={this.handleChangeNominee}
                      />
                      <label>Yes</label>
                    </div>
                  </div>
                  <div class="field">
                    <div class="ui radio checkbox">
                      <input
                        type="radio"
                        name="nominee"
                        value="No"
                        onClick={this.handleChangeNominee}
                      />
                      <label>No</label>
                    </div>
                    {this.state.nominee === '' ?
                        (
                          <div class="ui left pointing red basic label">
                            Required
                          </div>
                        ) : (<div></div>)
                      }
                  </div>
                </div>
              </div>
            </p>

            {this.state.nominee === 'Yes' ? (
              <div>
                <p>
                  <div class="ui form">
                    <div class="inline fields">
                      <label>
                        College has already nominated without appointment?
                      </label>
                      <div class="field">
                        <div class="ui radio checkbox">
                          <input
                            type="radio"
                            name="nominated"
                            value={1}
                            onClick={this.handleChangeNominated}
                          />
                          <label>Yes</label>
                        </div>
                      </div>
                      <div class="field">
                        <div class="ui radio checkbox">
                          <input
                            type="radio"
                            name="nominated"
                            value={0}
                            onClick={this.handleChangeNominated}
                          />
                          <label>No</label>
                        </div>
                      </div>
                      {this.state.nominated === '' ?
                        (
                          <div class="ui left pointing red basic label">
                            Required
                          </div>
                        ) : (<div></div>)
                      }
                    </div>
                  </div>
                </p>
                <p>
                  <a class="ui small header">Professorial Chair </a>
                  <div class="ui input fluid mini focus">
                    <input
                      type="text"
                      onChange={this.handleChangeProfChair}
                      placeholder={this.state.profchair}
                    />
                    {this.state.profchair === '' ?
                      (
                        <div class="ui left pointing red basic label">
                          Required
                        </div>
                      ) : (<div></div>)
                    }
                  </div>
                </p>
                <p>
                  <a class="ui small header">Grant </a>
                  <div class="ui input fluid mini focus">
                    <input
                      type="text"
                      onChange={this.handleChangeGrant}
                      placeholder={this.state.grant}
                    />
                    {this.state.grant === '' ?
                      (
                        <div class="ui left pointing red basic label">
                          Required
                        </div>
                      ) : (<div></div>)
                    }
                  </div>
                </p>
                <p>
                  <a class="ui small header">Grant Title </a>
                  <div class="ui input fluid mini focus">
                    <input
                      type="text"
                      onChange={this.handleChangeGrantTitle}
                      placeholder={this.state.granttitle}
                    />
                    {this.state.granttitle === '' ?
                      (
                        <div class="ui left pointing red basic label">
                          Required
                        </div>
                      ) : (<div></div>)
                    }
                  </div>
                </p>
                <p>
                  <a class="ui small header">Start Date </a>
                  <div class="ui input fluid mini focus">
                    <input type="date" onChange={this.handleChangeStartdate} />
                  </div>
                  {this.state.validStartDate === false ?
                    (
                      <div class="ui pointing red basic label">
                        Invalid start date!
                      </div>
                    ) : (<div></div>)
                  }
                </p>
                <p>
                  <a class="ui small header">End Date </a>
                  <div class="ui input fluid mini focus">
                    <input type="date" onChange={this.handleChangeEndDate} />
                  </div>
                </p>
                {this.state.validEndDate === false ?
                    (
                      <div class="ui pointing red basic label">
                        Invalid end date!
                      </div>
                    ) : (<div></div>)
                  }
                <Divider hidden="true" />
              </div>
            ) : (
              <div>
                <p>
                  <div class="ui form">
                    <div class="inline fields">
                      <label>
                        College has already nominated without appointment?
                      </label>
                      <div class="field">
                        <div class="ui radio checkbox">
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
                      <div class="field">
                        <div class="ui radio checkbox">
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
                  <a class="ui small header">Professorial Chair </a>
                  <div class="ui input fluid mini focus">
                    <input
                      disabled
                      type="text"
                      onChange={this.handleChangeProfChair}
                      placeholder={this.state.profchair}
                    />
                  </div>
                </p>
                <p>
                  <a class="ui small header">Grant </a>
                  <div class="ui input fluid mini focus">
                    <input
                      disabled
                      type="text"
                      onChange={this.handleChangeGrant}
                      placeholder={this.state.grant}
                    />
                  </div>
                </p>
                <p>
                  <a class="ui small header">Grant Title </a>
                  <div class="ui input fluid mini focus">
                    <input
                      disabled
                      type="text"
                      onChange={this.handleChangeGrantTitle}
                      placeholder={this.state.granttitle}
                    />
                  </div>
                </p>
                <p>
                  <a class="ui small header">Start Date </a>
                  <div class="ui input fluid mini focus">
                    <input
                      disabled
                      type="date"
                      onChange={this.handleChangeStartdate}
                    />
                  </div>
                </p>
                <p>
                  <a class="ui small header">End Date </a>
                  <div class="ui input fluid mini focus">
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

            <div class="ui center aligned container">
              <button class="ui blue button">Upload Attachment</button>
              <button
                class="ui center aligned blue button"
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
