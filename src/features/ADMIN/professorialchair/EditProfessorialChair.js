import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../../api';
import ProfessorialChairViewRow from './ProfessorialChairViewRow';
import GenerateFSR from './../../GenerateFSR';
import SendtoAdmin from './../../SendtoAdmin';
import NavBar from './../ui/NavBarAdmin';

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
      profchair: dummySample.profchair,
      grant: dummySample.grant,
      granttitle: dummySample.granttitle,
      startdate: dummySample.startdate,
      enddate: dummySample.enddate
    };

    this.handleChangeProfChair = this.handleChangeProfChair.bind(this);
    this.handleChangeGrant = this.handleChangeGrant.bind(this);
    this.handleChangeGrantTitle = this.handleChangeGrantTitle.bind(this);
    this.handleChangeStartdate = this.handleChangeStartdate.bind(this);
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
    this.startAdd = this.startAdd.bind(this);
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
        <NavBar {...this.props} Label="edit" subLabel="profchair"/>
        <div
          class="ui piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 class="ui blue header">
              EDIT PROFESSORIAL CHAIR
              <GenerateFSR/>
              <SendtoAdmin/>
            </h2>
          </div>
          <Divider hidden="true" />
          <Divider hidden="true" />
          <Divider hidden="true" />
          <p>
            <a class="ui small header">Professorial Chair </a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                onChange={this.handleChangeProfChair}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Grant </a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                onChange={this.handleChangeGrant}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Grant Title </a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                onChange={this.handleChangeGrantTitle}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Approve Start Date </a>
            <div class="ui input mini focus">
              <input
                type="date"
                style={{ width: '155px' }}
                value={this.state.time}
                onChange={this.handleChangeTime}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">End Date </a>
            <div class="ui input mini focus">
              <input
                type="date"
                style={{ width: '155px' }}
                value={this.state.time}
                onChange={this.handleChangeTime}
              />
            </div>
          </p>
          
          <div class="ui center aligned container">
            <button
              class="ui center aligned blue button"
              onClick={this.startEdit}>
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
ReactDOM.render(<EditProfessorialChair />, document.getElementById('root'));
