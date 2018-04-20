import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider, Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';
import GenerateFSR from './../GenerateFSR';
import SendtoAdmin from './../SendtoAdmin';

export default class AddAdministrativeWork extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nature_of_work: '',
      office: '',
      credit_units: '',
      emp_id: '',
    };
    this.handleChangeNature_of_work = this.handleChangeNature_of_work.bind(this);
    this.handleChangeOffice = this.handleChangeOffice.bind(this);
    this.handleChangeCreditUnits = this.handleChangeCreditUnits.bind(this);
    this.startAdd = this.startAdd.bind(this);
  }

  componentDidMount() {
    Api.getSession().then(result => {
      console.log(result.data.data.emp_id);
      this.setState({ emp_id: result.data.data.emp_id });
    });
  }

  handleChangeNature_of_work(e) {
    this.setState({ nature_of_work: e.target.value });
  }
  handleChangeOffice(e) {
    this.setState({ office: e.target.value });
  }
  handleChangeCreditUnits(e) {
    this.setState({ credit_units: e.target.value });
  }

  startAdd(e) {
    e.preventDefault();
    Api.addPosition({
      nature_of_work: this.state.nature_of_work,
      office: this.state.office,
      credit_units: this.state.credit_units,
      emp_id: this.state.emp_id
    })
      .then(result => {
        this.props.history.push('./positions/view'); //change to profile later!!
        alert('Position successfully added!');
      })
      .catch(e => alert('Error adding new Position!'));
    console.log(this.state);
  }

  render() {
    return (
      <div className="App-header">
        <NavBar {...this.props} Label="FSR" subLabel="adminwork" />
        <div
          class="ui piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 class="ui blue header">ADD ADMINISTRATIVE WORK</h2>
          </div>
          <Divider hidden="true" />
          <p>
            <a class="ui small header">
              {' '}
              Position/Nature of Adminstrative Work{' '}
            </a>
            <div class="ui input fluid mini focus">
              <input type="text" onChange={this.handleChangeNature_of_work} />
            </div>
          </p>

          <p>
            <a class="ui small header"> Office </a>{' '}
            {/* Can change to dropdown? */}
            <div class="ui input fluid mini focus">
              <input type="text" onChange={this.handleChangeOffice} />
            </div>
          </p>

          <p>
            <a class="ui small header"> Credit Units </a>{' '}
            {/* Can change to number? */}
            <div class="ui input fluid mini focus">
              <input type="number" onChange={this.handleChangeCreditUnits} />
            </div>
          </p>

          <div class="ui center aligned container">
            <button class="ui blue button">Upload Attachment</button>
            <button class="ui blue button" onClick={this.startAdd}>
              Add Administrative Work
            </button>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
