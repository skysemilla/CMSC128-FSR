import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import NavBar from './../ui/NavBarAdmin';

const dummySample={permission: 'YES', date: ''};

export default class EditProfession extends Component {
  constructor(props) {
    super(props);

    this.state = {
        permission: dummySample.permission,
        date: dummySample.date
    };

    this.handleChangePermission = this.handleChangePermission.bind(this);
  }

  handleChangePermission(e) {
    this.setState({ permission: e.target.value });
  }

  handleChangeDate(e){
    this.setState({ date: e.target.value });
  }

  startAdd() {
    this.props.history.push('../profession/edit');
  }

  render() {
    return (
      <div classNameName="App-header">
        <div>
        <NavBar {...this.props} Label="edit" subLabel="profession"/>
        </div>
        <div classNameName="bodydiv">
        <div
          className="ui piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 className="ui blue header">
              EDIT LIMITED PRACTICE OF PROFESSION
            </h2>
          </div>
          <Divider hidden="true" />
          <p>
            <div className="ui form">
              <div className="inline fields">
                <label>Have you applied for official permission for limited practice of profession?</label>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="studyleave"
                      value="YES"
                      onClick={this.handleChangePermission}
                    />
                    <label>Yes</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="studyleave"
                      value="NO"
                      onClick={this.handleChangePermission}
                    />
                    <label>No</label>
                  </div>
                </div>
              </div>
            </div>
          </p>
          {
            this.state.permission !== 'YES' ?
              <p>
                <a className="ui small header">Date submitted </a>
                <div className="ui input fluid mini focus">
                  <input
                    disabled
                    type="date"
                    onChange={this.handleChangeDate}
                  />
                </div>
              </p>
               :
              <p>
                <a className="ui small header">Date submitted </a>
                  <div className="ui input fluid mini focus">
                    <input
                      type="date"
                      onChange={this.handleChangeDate}
                    />
                </div>
              </p>
          }
          <div className="ui center aligned container">
            <button
              className="ui center aligned blue button"
              onClick={this.startAdd}>
              Edit Profession
            </button>
          </div>
        </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}