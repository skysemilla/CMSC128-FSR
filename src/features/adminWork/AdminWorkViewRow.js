import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import GenericDelete from './../GenericDelete';
import ViewAttachments from './../ViewAttachments';

export default class ViewTeachingLoadRow extends Component {
  render() {
    return (
      <tr>
        <td className="center aligned"> {this.props.nature_of_work} </td>
        <td className="center aligned"> {this.props.office} </td>
        <td className="center aligned"> {this.props.credit_units} </td>
        <td className="center aligned">
          <ViewAttachments {...this.props} />
        </td>
        <td className="center aligned">
          <GenericDelete {...this.props} />
        </td>
      </tr>
    );
  }
}
