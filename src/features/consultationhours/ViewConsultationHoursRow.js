import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Modal } from 'semantic-ui-react';
import DeleteModal from '../GenericDelete';

export default class ViewConsultationHoursRow extends Component {
  render() {
    return (
      <tr>
        <td class="center aligned">{this.props.day}</td>
        <td class="center aligned"> {this.props.time} </td>
        <td class="center aligned"> {this.props.place} </td>
        <td class="center aligned">
          <DeleteModal {...this.props} />
        </td>
        <td class="center aligned">
          <button class="ui icon button">
            <i class="eye icon"> </i>
          </button>
        </td>
      </tr>
    );
  }
}
