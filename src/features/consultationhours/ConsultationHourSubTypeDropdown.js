import React, { Component } from 'react';
import './../SignUpForm.css';

export default class ConsultationHoursSubTypeDropdown extends Component {
  render() {
    return (
      <div>
        <style> {` select {margin: 1vh 1vw 1vh 1vh; font-size: 14px;}`} </style>
        <p>
          <a className="ui small header">
            <select
              className="dropdown"
              value={this.props.value}
              onChange={this.props.handler}>
              <option value="" disabled selected hidden>
                {' '}
                Choose End Time of Consultation
              </option>
              {this.props.options.map(item => {
                if (item.value >= this.props.timeFromValue) {
                  return <option value={item.text}> {item.label} </option>;
                }
              })}
            </select>
          </a>
        </p>
      </div>
    );
  }
}
