import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import DeleteModal from '../GenericDelete';

export default class ViewConsultationHoursRow extends Component {
  render() {
    return (
      <tr>
        {console.log(this.props)}
        <td className="center aligned">{this.props.day}</td>
        <td className="center aligned"> {this.props.start_time} </td>
        <td className="center aligned"> {this.props.end_time} </td>
        <td className="center aligned"> {this.props.place} </td>
        <td className="center aligned">
          <DeleteModal {...this.props} />
        </td>
        <td className="center aligned">
          <button className="ui icon button">
            <i className="eye icon"> </i>
          </button>
        </td>
      </tr>
    );
  }
}
