import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import GenericDelete from './../GenericDelete';
import ViewAttachments from './../ViewAttachments';

export default class ViewTeachingLoadRow extends Component {
  render() {
    return (
      <tr>
        <td className="center aligned"> {this.props.profchair} </td>
        <td className="center aligned"> {this.props.grant} </td>
        <td className="center aligned"> {this.props.granttitle} </td>
        <td className="center aligned"> {this.props.startdate} </td>
        <td className="center aligned"> {this.props.enddate} </td>
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
