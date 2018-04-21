import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import DeleteModal from './../../GenericDelete';

export default class ViewPublicationsRow extends Component {
  render() {
    return (
      <tr>
        <td className="center aligned">{this.props.permission}</td>
        <td className="center aligned">{this.props.date}</td>
        <td className="center aligned">
          <DeleteModal {...this.props} />
        </td>
      </tr>
    );
  }
}
