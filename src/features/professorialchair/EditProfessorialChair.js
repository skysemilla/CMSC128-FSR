import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import ProfessorialChairViewRow from './ProfessorialChairViewRow';
import GenerateFSR from './../GenerateFSR';
import SendtoAdmin from './../SendtoAdmin';
import NavBar from './../ui/NavBar';

const dummySample = {
  profchair: 'CMSC 128',
  grant: 'CAS B04',
  granttitle: 'T-Th',
  startdate: '03/26/18',
  enddate: '03/27/18'
};

export default class EditProfessorialChair extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nominee: '',
      nominated: '',
      profchair: dummySample.profchair,
      grant: dummySample.grant,
      granttitle: dummySample.granttitle,
      startdate: dummySample.startdate,
      enddate: dummySample.enddate
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
    this.setState({ startdate: e.target.value });
  }

  handleChangeEndDate(e) {
    this.setState({ enddate: e.target.value });
  }

  startAdd(e) {
    // e.preventDefault();
    // Api.editprofchair({
        // profchair: this.state.profchair,
        // grant: this.state.grant,
        // granttitle: this.state.granttitle,
        // startdate: this.state.startdate,
        // enddate: this.state.enddate
    // })
    //   .then(result => {
    //     this.props.history.push('./professorialchair/view');
    //     alert('Professorial Chair successfully edited!');
    //   })
    //   .catch(e => alert('Error editing Professorial Chair!'));
  }

  render() {
    return (
      <div className="App-header">
        <NavBar {...this.props} Label="FSR" subLabel="profchair"/>
        <div
          class="ui piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 class="ui blue header">
              EDIT PROFESSORIAL CHAIR
            </h2>
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
                </div>
              </div>
            </div>
          </p>

          {this.state.nominee === 'Yes' ?
          <div>
          <p>
            <div class="ui form">
              <div class="inline fields">
                <label>College has already nominated without appointment?</label>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
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
                type="date"
                onChange={this.handleChangeStartdate}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">End Date </a>
            <div class="ui input fluid mini focus">
              <input
                type="date"
                onChange={this.handleChangeEndDate}
              />
            </div>
          </p>
          <Divider hidden="true" />
          </div>
          :
          <div>
          <p>
            <div class="ui form">
              <div class="inline fields">
                <label>College has already nominated without appointment?</label>
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
              <input disabled
                type="text"
                onChange={this.handleChangeProfChair}
                placeholder={this.state.profchair}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Grant </a>
            <div class="ui input fluid mini focus">
              <input disabled
                type="text"
                onChange={this.handleChangeGrant}
                placeholder={this.state.grant}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Grant Title </a>
            <div class="ui input fluid mini focus">
              <input disabled
                type="text"
                onChange={this.handleChangeGrantTitle}
                placeholder={this.state.granttitle}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Start Date </a>
            <div class="ui input fluid mini focus">
              <input disabled
                type="date"
                onChange={this.handleChangeStartdate}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">End Date </a>
            <div class="ui input fluid mini focus">
              <input disabled
                type="date"
                onChange={this.handleChangeEndDate}
              />
            </div>
          </p>
          <Divider hidden="true" />
          </div>
          }

          <div class="ui center aligned container">
            <button class="ui blue button">Upload Attachment</button>
            <button
              class="ui center aligned blue button"
              onClick={this.startAdd}>
              Add Professorial Chair
            </button>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
//=========================
ReactDOM.render(<EditProfessorialChair />, document.getElementById('root'));
