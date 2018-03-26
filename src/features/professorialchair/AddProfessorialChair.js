import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';
import GenerateFSR from './../GenerateFSR'
import SendtoAdmin from './../SendtoAdmin'

export default class AddProfessorialChair extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profchair: '',
      grant: '',
      granttitle: '',
      startdate: '',
      enddate: ''
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
    // Api.addprofchair({
        // profchair: this.state.profchair,
        // grant: this.state.grant,
        // granttitle: this.state.granttitle,
        // startdate: this.state.startdate,
        // enddate: this.state.enddate
    // })
    //   .then(result => {
    //     this.props.history.push('./professorialchair/view');
    //     alert('Professorial Chair successfully added!');
    //   })
    //   .catch(e => alert('Error adding new Professorial Chair!'));
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
              ADD PROFESSORIAL CHAIR
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
          <div class="ui center aligned container">
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
ReactDOM.render(<AddProfessorialChair />, document.getElementById('root'));
