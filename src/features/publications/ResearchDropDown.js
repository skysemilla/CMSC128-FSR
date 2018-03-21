import React, { Component } from 'react';
import './SignUpForm.css';

export default class ResearchDropDown extends Component {
  render() {
    return (
      <div>
        <p>
          <a class="ui small header">
            {' '}
            Publication Type
            <select
              class="dropdown"
              value={this.props.value}
              onChange={this.props.handler}>
              <option value="" disabled selected hidden>
                {' '}
                Choose Publication Type{' '}
              </option>
              {this.props.options.map(item => {
                return (
                  <option value={item.text} key={item.id}>
                    {item.text}
                  </option>
                );
              })}
            </select>
          </a>
        </p>
      </div>
    );
  }
}
