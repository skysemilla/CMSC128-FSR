import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';

export default class EditAdministrativeWork extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: '',
      nature_of_work: '',
      office: '',
      credit_units: '',
      emp_id: '',

      position_is_valid: true,
      nature_of_work_is_valid: true,
      office_is_valid: true,
      credit_units_is_valid: true,
      edit_trial_count: 0
    };
    this.handleChangePosition = this.handleChangePosition.bind(this);
    this.handleChangeNature_of_work = this.handleChangeNature_of_work.bind(
      this
    );
    this.handleChangeOffice = this.handleChangeOffice.bind(this);
    this.handleChangeCreditUnits = this.handleChangeCreditUnits.bind(this);
    this.startAdd = this.startAdd.bind(this);
  }

  componentDidMount() {
    Api.getSession().then(result => {
      if (result.data.data !== null) {
        this.setState({ emp_id: result.data.data.emp_id });
        if (typeof this.props.history !== 'undefined') {
          Api.viewHisPosition({
            id: result.data.data.emp_id
          }).then(result => {
            this.setState({
              nature_of_work: result.data.data[0].nature_of_work,
              office: result.data.data[0].office,
              credit_units: result.data.data[0].credit_units,
              position: result.data.data[0].work_position
            });
          });
        }
      }
    });
  }

  handleChangePosition(e) {
    this.setState({ position: e.target.value });

    if (e.target.value === '') {
      this.setState({ position_is_valid: 'empty' });
    } else if (parseFloat(e.target.value) === e.target.value) {
      this.setState({ position_is_valid: 'number' });
    } else {
      this.setState({ position_is_valid: true });
    }
  }
  handleChangeNature_of_work(e) {
    this.setState({ nature_of_work: e.target.value });

    if (e.target.value === '') {
      this.setState({ nature_of_work_is_valid: 'empty' });
    } else if (parseFloat(e.target.value) === e.target.value) {
      this.setState({ nature_of_work_is_valid: 'number' });
    } else {
      this.setState({ nature_of_work_is_valid: true });
    }
  }
  handleChangeOffice(e) {
    this.setState({ office: e.target.value });

    if (e.target.value === '') {
      this.setState({ office_is_valid: 'empty' });
    } else if (parseFloat(e.target.value) === e.target.value) {
      this.setState({ office_is_valid: 'number' });
    } else {
      this.setState({ office_is_valid: true });
    }
  }
  handleChangeCreditUnits(e) {
    this.setState({ credit_units: e.target.value });

    this.setState({ credit_units_is_valid: e.target.value });
    if (e.target.value === '') {
      this.setState({ credit_units_is_valid: 'empty' });
    } else if (e.target.value < 0) {
      this.setState({ credit_units_is_valid: 'negative' });
    } else {
      this.setState({ credit_units_is_valid: true });
    }
  }

  isInputValid() {
    if (
      this.state.position_is_valid === true &&
      this.state.nature_of_work_is_valid === true &&
      this.state.office_is_valid === true &&
      this.state.credit_units_is_valid === true
    ) {
      return true;
    } else {
      return false;
    }
  }

  startAdd(e) {
    this.setState({ edit_trial_count: 1 });
    if (this.isInputValid()) {
      e.preventDefault();
      Api.editPosition({
        position_id: this.props.history.location.state.id,
        work_position: this.state.position,
        emp_id: this.state.emp_id,
        nature_of_work: this.state.nature_of_work,
        office: this.state.office,
        credit_units: this.state.credit_units
      })
        .then(result => {
          this.props.history.push('./view');
        })
        .catch(e);
    }
  }

  //save in state
  render() {
    return (
      <div className="App-header">
        <div>
          <NavBar {...this.props} Label="FSR" subLabel="adminwork" />
        </div>
        <div className="bodyDiv">
          <div
            className="ui piled very padded text left aligned container segment"
            color="teal">
            <div>
              <h2 className="ui blue header">EDIT ADMINISTRATIVE WORK</h2>
            </div>
            <Divider hidden="true" />
            <p>
              <a className="ui small header"> Position </a>
              {this.state.edit_trial_count > 0 ? (
                this.state.position === '' ? (
                  <div className="ui left pointing red basic label">
                    Required
                  </div>
                ) : this.state.position_is_valid === 'empty' ? (
                  <div className="ui left pointing red basic label">
                    Required
                  </div>
                ) : this.state.position_is_valid === 'number' ? (
                  <div className="ui left pointing red basic label">
                    Must contain letters
                  </div>
                ) : this.state.position_is_valid === true ? (
                  <div className="ui left pointing green basic label">
                    valid
                  </div>
                ) : (
                  <div />
                )
              ) : (
                <div />
              )}
              <div className="ui input fluid mini focus">
                <input
                  type="text"
                  value={this.state.position}
                  onChange={this.handleChangePosition}
                />
              </div>
            </p>
            <p>
              <a className="ui small header"> Nature of Adminstrative Work </a>
              {this.state.edit_trial_count > 0 ? (
                this.state.credit_units === '' ? (
                  <div className="ui left pointing red basic label">
                    Required
                  </div>
                ) : this.state.nature_of_work_is_valid === 'empty' ? (
                  <div className="ui left pointing red basic label">
                    Required
                  </div>
                ) : this.state.nature_of_work_is_valid === 'number' ? (
                  <div className="ui left pointing red basic label">
                    Must contain letters
                  </div>
                ) : this.state.nature_of_work_is_valid === true ? (
                  <div className="ui left pointing green basic label">
                    valid
                  </div>
                ) : (
                  <div />
                )
              ) : (
                <div />
              )}
              <div className="ui input fluid mini focus">
                <input
                  type="text"
                  value={this.state.nature_of_work}
                  onChange={this.handleChangeNature_of_work}
                />
              </div>
            </p>

            <p>
              <a className="ui small header"> Office </a>{' '}
              {/* Can change to dropdown? */}
              {this.state.edit_trial_count > 0 ? (
                this.state.office === '' ? (
                  <div className="ui left pointing red basic label">
                    Required
                  </div>
                ) : this.state.office_is_valid === 'empty' ? (
                  <div className="ui left pointing red basic label">
                    Required
                  </div>
                ) : this.state.office_is_valid === 'number' ? (
                  <div className="ui left pointing red basic label">
                    Must contain letters
                  </div>
                ) : this.state.office_is_valid === true ? (
                  <div className="ui left pointing green basic label">
                    valid
                  </div>
                ) : (
                  <div />
                )
              ) : (
                <div />
              )}
              <div className="ui input fluid mini focus">
                <input
                  type="text"
                  value={this.state.office}
                  onChange={this.handleChangeOffice}
                />
              </div>
            </p>

            <p>
              <a className="ui small header"> Credit Units </a>{' '}
              {/* Can change to number? */}
              {this.state.edit_trial_count > 0 ? (
                this.state.credit_units === '' ? (
                  <div className="ui left pointing red basic label">
                    Required
                  </div>
                ) : this.state.credit_units_is_valid === 'empty' ? (
                  <div className="ui left pointing red basic label">
                    Required
                  </div>
                ) : this.state.credit_units_is_valid === 'negative' ? (
                  <div className="ui left pointing red basic label">
                    Must not be negative
                  </div>
                ) : this.state.credit_units_is_valid === true ? (
                  <div className="ui left pointing green basic label">
                    valid
                  </div>
                ) : (
                  <div />
                )
              ) : (
                <div />
              )}
              <div className="ui input fluid mini focus">
                <input
                  type="number"
                  value={this.state.credit_units}
                  onChange={this.handleChangeCreditUnits}
                />
              </div>
            </p>

            <div className="ui center aligned container">
              <button className="ui blue button">Upload Attachment</button>
              <button className="ui blue button" onClick={this.startAdd}>
                Edit Administrative Work
              </button>
            </div>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
