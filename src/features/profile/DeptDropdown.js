import React, { Component } from 'react';
import './../SignUpForm.css';

export default class PublicationSubTypeDropdown extends Component {
  render() {
    return (
      <div>
        <style> {` select {margin: 1vh 1vw 1vh 1vh; font-size: 14px;}`} </style>
        <p>
          <a className="ui small header">
            <p>
              <select
                className="dropdown"
                value={this.props.value}
                onChange={this.props.handler}>
                <option value="" disabled selected hidden>
                  {' '}
                  Select Department{' '}
                </option>
                {this.props.options.map(item => {
                  if (item.text === this.props.college) {
                    return item.Subtype.map((sub, i) => {
                      return <option key={i}> {sub} </option>;
                    });
                  }
                })}
              </select>
            </p>
          </a>
        </p>
      </div>
    );
  }
}
