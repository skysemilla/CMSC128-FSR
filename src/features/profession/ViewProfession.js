import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import ViewProfessionsRow from './ProfessionsViewRow';
import NavBar from './../ui/NavBar';

export default class ViewProfession extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    this.startAdd = this.startAdd.bind(this);
  }

  componentDidMount = () => {
        Api.getSession().then(res => {
          if (res.data.data !== null) {
            Api.viewLimitedPractice({ emp_id: res.data.data.emp_id }).then(result => {
              if (result.data.data !== null) {
                console.log({data: result.data.data[0]})
                this.setState({ data: result.data.data});
              }
            });
          }
        });


  };

  startAdd() {
    this.props.history.push('./add');
  }

  render() {
    return (
      <div className="App-header">
        <div>
          <NavBar {...this.props} Label="FSR" subLabel="profession" />
        </div>
        <div className="bodyDiv">
          <div
            className="ui compact piled very padded text left aligned container segment"
            color="teal">
            <div>
              <h1 className="ui blue header">LIMITED PRACTICE OF PROFESSION</h1>
            </div>
            <Divider hidden="true" />
            <div>
              <style>
                {' '}
                {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`}{' '}
              </style>
              <table className="ui celled table">
                <thead>
                  <tr>
                    <th className="center aligned">Official permission?</th>
                    <th className="center aligned">Date</th>
                    <th className="center aligned">Attachments</th>
                    <th className="center aligned">Edit/Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map(item => {
                    return (
                      <ViewProfessionsRow
                        {...this.props}
                        id={item.limited_practice_id}
                        haveApplied = {item.haveApplied}
                        date_submitted = {item.date_submitted}
                        label="Profession"
                        subLabel="profession"
                        editURL="../profession/edit"
                      />
                    );
                  })}
                </tbody>
              </table>
              <button
                className="ui right floated blue button"
                onClick={this.startAdd}>
                Add new Profession
              </button>
            </div>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
