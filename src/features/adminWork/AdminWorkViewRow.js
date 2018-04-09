import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
//import CellItem from './CellItem'
import { Modal } from 'semantic-ui-react';
import GenericDelete from './../GenericDelete';
import ViewAttachments from './../ViewAttachments';

export default class ViewTeachingLoadRow extends Component {
  render() {
    //Link to Edit page
    //Modal for Delete, fix this one
    return (
      <tr>
        <td class="center aligned"> {this.props.positionOfWork} </td>
        <td class="center aligned"> {this.props.officeUnit} </td>
        <td class="center aligned"> {this.props.approvedCreditUnits} </td>
        <td class="center aligned">
          <ViewAttachments {...this.props} />
        </td>
        <td class="center aligned">
          <GenericDelete {...this.props}/>
        </td>
      </tr>

    );
  }
}
