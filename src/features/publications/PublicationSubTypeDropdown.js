import React, { Component } from 'react';
import './../SignUpForm.css';

export default class PublicationSubTypeDropdown extends Component {
  render() {
    return (
      <div>
        <style> {` select {margin: 1vh 1vw 1vh 1vh; font-size: 14px;}`} </style>
        <p>
          <a className="ui small header">
            {' '}
            Publication Subtype
            <select
              className="dropdown"
              value={this.props.value}
              onChange={this.props.handler}>
              <option value="" disabled selected hidden>
                {' '}
                Choose Publication Subtype{' '}
              </option>
              {this.props.options.map(item => {
                if (item.text === this.props.research) {
                  return item.Subtype.map((sub, i) => {
                    return <option key={i}> {sub} </option>;
                  });
                }
              })}
            </select>
            {this.props.formError}
          </a>
        </p>
      </div>
    );
  }
}

