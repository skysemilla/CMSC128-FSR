import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import ViewConsultationHoursRow from './ViewConsultationHoursRow';
import NavBar from './../ui/NavBar';

export default class ViewConsultationHours extends Component {
  componentDidMount() {
    Api.getSession().then(res => {
      Api.viewConsultation({ id: res.data.data.emp_id }).then(result => {
        this.setState({ data: result.data.data });
      });
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

    this.startAdd = this.startAdd.bind(this);
  }

  startAdd(e) {
    e.preventDefault();
    this.props.history.push('/consultationhours/add');
  }

  render() {
    if (typeof this.state.data !== 'undefined') {
      return (
        <div className="App-header">
          <NavBar {...this.props} Label="FSR" subLabel="consultationhours" />
          <div className="bodyDiv">
            <div
              className="ui compact piled very padded text left aligned container segment mainDiv"
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
                      <th className="center aligned"> Start Time </th>
                      <th className="center aligned"> End Time </th>
                      <th className="center aligned"> Place </th>
                      <th className="center aligned"> Edit/Delete </th>
                      <th className="center aligned"> Attachments </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.data.map(item => {
                      return (
                        <ViewConsultationHoursRow
                          {...this.props}
                          id={item.emp_id}
                          day={item.day}
                          start_time={item.consultation_start_time}
                          end_time={item.consultation_end_time}
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
            </div>
            <Divider hidden="true" />
          </div>
        </div>
      );
    }
  }
}
