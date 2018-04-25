import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import GenericApproved from './../ui/GenericApproved';
import GenericPending from './../ui/GenericPending';

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
          {' '}
          {this.props.semester ? this.props.semester : 'New'}{' '}
        </td>
        <td className="center aligned">
          {' '}
          {this.props.year
            ? this.props.year + '-' + (parseInt(this.props.year) + 1)
            : 'New'}{' '}
        </td>
        <td className="center aligned">
          {this.props.approved === 'YES' ? (
            <GenericApproved {...this.props} id={this.props.id} />
          ) : (
            <GenericPending {...this.props} id={this.props.id} />
          )}
        </td>
      </tr>
    );
  }
}
