import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import NavBar from './../ui/NavBarAdmin'

export default class AddAdministrativeWork extends Component {
  constructor(props) {
    super(props);

    this.state = {
      positionOfWork : '',
      officeUnit : '',
      approvedCreditUnits : '',
      totalAdminLoadCredits : ''
    };

    this.handlePositionOfWork = this.handlePositionOfWork.bind(this);
    this.handleOfficeUnit = this.handleOfficeUnit.bind(this);
    this.handleApprovedCreditUnits = this.handleApprovedCreditUnits.bind(this);
    this.handleTotalAdminCredits = this.handleTotalAdminCredits.bind(this);

    this.startAdd = this.startAdd.bind(this);
  }

  handlePositionOfWork(e){
    this.setState({positionOfWork : e.target.value});
  }

  handleOfficeUnit(e){
    this.setState({officeUnit : e.target.value});
  }

  handleApprovedCreditUnits(e){
    this.setState({approvedCreditUnits : e.target.value});
  }

  handleTotalAdminCredits(e){
    this.setState({totalAdminLoadCredits : e.target.value});
  }

  startAdd(e) {
    // e.preventDefault();
    // Api.addteachingload({
    //   subj: this.state.subj,
    //   seccode: this.state.seccode,
    //   room: this.state.room,
    //   days: this.state.days,
    //   time: this.state.time,
    //   hours: this.state.hours,
    //   studnum: this.state.studnum,
    //   creditwo: this.state.creditwo,
    //   studcred: this.state.studcred,
    //   creditw: this.state.creditw
    // })
    //   .then(result => {
    //     this.props.history.push('./publications/view');  //change to profile later!!
    //     alert('Publication successfully added!');
    //   })
    //   .catch(e => alert('Error adding new Publication!'));
  }

  render() {

    return (
      <div classNameName="App-header">
        <div>
        <NavBar {...this.props}  Label="edit" subLabel="adminwork"/>
        </div>
        <div classNameName="bodydiv">
        <div
          className="ui piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 className="ui blue header">
              ADD ADMINISTRATIVE WORK
            </h2>
          </div>
          <Divider hidden="true" />
          <p>
            <a className="ui small header"> Position/Nature of Adminstrative Work </a>
            <div className="ui input fluid mini focus">
              <input
                type="text"
                onChange={this.handlePositionOfWork}
              />
            </div>
          </p>

          <p>
            <a className="ui small header"> Office Unit </a> {/* Can change to dropdown? */}
            <div className="ui input fluid mini focus">
              <input
                type="text"
                onChange={this.handleOfficeUnit}
              />
            </div>
          </p>

           <p>
            <a className="ui small header"> Approved Credit Units </a> {/* Can change to number? */}
            <div className="ui input fluid mini focus">
              <input
                type="number"
                onChange={this.handleApprovedCreditUnits}
              />
            </div>
          </p>

           <p>
            <a className="ui small header"> Total Administrative Load Credits </a> {/* Can change to dropdown? */}
            <div className="ui input fluid mini focus">
              <input
                type="number"
                onChange={this.handleTotalAdminCredits}
              />
            </div>
          </p>

          <div className="ui center aligned container">
            <button
              className="ui blue button"
              onClick={this.startAdd}>
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
