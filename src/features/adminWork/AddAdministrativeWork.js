import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';

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
        this.props.history.push('./view'); //change to profile later!!
        alert('Position successfully added!');
      })
      .catch(e => alert('Error adding new Position!'));
    console.log(this.state);
  }

  render() {
    return (
      <div className="App-header">
        <div><NavBar {...this.props} Label="FSR" subLabel="adminwork" /></div>
        <div className="bodyDiv">
        <div
          className="ui piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 className="ui blue header">ADD ADMINISTRATIVE WORK</h2>
          </div>
          <Divider hidden="true" />
          <p>
            <a className="ui small header">
              {' '}
              Position/Nature of Adminstrative Work{' '}
            </a>
            <div className="ui input fluid mini focus">
              <input type="text" onChange={this.handleChangeNature_of_work} />
            </div>
          </p>

          <p>
            <a className="ui small header"> Office </a>{' '}
            {/* Can change to dropdown? */}
            <div className="ui input fluid mini focus">
              <input type="text" onChange={this.handleChangeOffice} />
            </div>
          </p>

          <p>
            <a className="ui small header"> Credit Units </a>{' '}
            {/* Can change to number? */}
            <div className="ui input fluid mini focus">
              <input type="number" onChange={this.handleChangeCreditUnits} />
            </div>
          </p>

          <div className="ui center aligned container">
            <button className="ui blue button">Upload Attachment</button>
            <button className="ui blue button" onClick={this.startAdd}>
              Add Administrative Work
            </button>
          </div>
        </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
