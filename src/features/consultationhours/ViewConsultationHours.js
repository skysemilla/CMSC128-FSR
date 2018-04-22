import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import ViewConsultationHoursRow from './ViewConsultationHoursRow';
import NavBar from './../ui/NavBar';

export default class ViewConsultationHours extends Component {
  componentDidMount() {
    Api.viewAllConsultations()
      .then(result => {
        console.log(result);
        this.setState({ data: result.data.data });
      })
      .catch(err => alert(err));
  }

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

    this.startAdd = this.startAdd.bind(this);
  }

  startAdd(e) {
    console.log('hi suckers');
    e.preventDefault();
    this.props.history.push('../consultationhours/add');
  }

  render() {
    if (typeof this.state.data !== 'undefined') {
      return (
        <div className="App-header">
          <NavBar {...this.props} Label="FSR" subLabel="consultationhours" />

          <div
            className="ui compact piled very padded text left aligned container segment"
            color="teal">
            <div>
              <h1 className="ui blue header">CONSULTATION HOURS</h1>
            </div>
            <Divider hidden="true" />

            <style>
              {' '}
              {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`}{' '}
            </style>
            <div className="scrollTable">
            <table className="ui celled table">
              <thead>
                <tr>
                  <th className="center aligned"> Days </th>
                  <th className="center aligned"> Time </th>
                  <th className="center aligned"> Place </th>
                  <th className="center aligned"> Edit/Delete </th>
                  <th className="center aligned"> Attachments </th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map(item => {
                  return (
                    <ViewConsultationHoursRow
                      {...this.props.data}
                      id={item.emp_id}
                      day={item.day}
                      time={item.consultation_start_time}
                      place={item.consultation_place}
                      editURL="../consultationhours/edit"
                      label="Consultation Hours"
                      subLabel="Consultation Hours"
                    />
                  );
                })}
              </tbody>
            </table>
            </div>
            <Divider hidden="true" />
            <button
              className="ui blue right floated button"
              onClick={this.startAdd}>
              Add Consultation Hours
            </button>
            <Divider hidden="true" />
          </div>
        </div>
      );
    }
  }
}
