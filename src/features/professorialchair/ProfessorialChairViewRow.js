import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import GenericDelete from './../GenericDelete';
import ViewAttachments from './../ViewAttachments';

export default class ViewTeachingLoadRow extends Component {
  
  render() {
    return (
      <tr>
        <td className="center aligned"> {this.props.professional_chair!=""?this.props.professional_chair:"N/A"} </td>
        <td className="center aligned"> {this.props.grants!=""?this.props.grants:"N/A"} </td>
        <td className="center aligned"> {this.props.grant_title!=""?this.props.grant_title:"N/A"} </td>
        <td className="center aligned"> {this.props.start_date!=""?this.props.start_date:"N/A"} </td>
        <td className="center aligned"> {this.props.end_date!=""?this.props.end_date:"N/A"} </td>
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
