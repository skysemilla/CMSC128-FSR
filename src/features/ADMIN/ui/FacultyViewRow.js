import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import GenericDisable from './../ui/GenericDisable';

export default class ViewTeachingLoadRow extends Component {
  render() {
    return (
      <tr>
        <td className="center aligned"> {this.props.id} </td>
        <td className="center aligned">
          {' '}
          {this.props.fname} {this.props.mname} {this.props.lname}
        </td>
        <td className="center aligned"> {this.props.college} </td>
        <td className="center aligned"> {this.props.dept} </td>
        <td className="center aligned">
          <GenericDisable {...this.props} />
        </td>
      </tr>
    );
  }
}
