import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Modal } from 'semantic-ui-react';

export default class ViewTeachingLoadRow extends Component {
  render() {
    //Link to Edit page
    //Modal for Delete, fix this one
    return (
      <tr>
        <td class="center aligned"> {this.props.profchair} </td>
        <td class="center aligned"> {this.props.grant} </td>
        <td class="center aligned"> {this.props.granttitle} </td>
        <td class="center aligned"> {this.props.startdate} </td>
        <td class="center aligned"> {this.props.enddate} </td>
        <td class="center aligned">
        </td>
      </tr>
    );
  }
}
