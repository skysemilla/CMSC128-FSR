import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
//import CellItem from './CellItem'
import { Modal } from 'semantic-ui-react';
import DeleteModal from './GenericDelete';
import ViewAttachments from './../ViewAttachments';

export default class ViewTeachingLoadRow extends Component {
  render() {
    //Link to Edit page
    //Modal for Delete, fix this one
    return (
      <tr>
        <td class="center aligned"> {this.props.subj} </td>
        <td class="center aligned"> {this.props.seccode} </td>
        <td class="center aligned"> {this.props.room} </td>
        {/*} <td class="center aligned"> {this.props.days} </td>*/}
        <td class="center aligned"> {this.props.starttime} </td>
        <td class="center aligned"> {this.props.endtime} </td>
        {/*<td class="center aligned"> {this.props.hours} </td>*/}
        <td class="center aligned"> {this.props.studnum} </td>
        {/*<td class="center aligned"> {this.props.creditwo} </td>*/}
        {/*<td class="center aligned"> {this.props.studcred} </td>*/}
        {/*<td class="center aligned"> {this.props.creditw} </td>*/}
        <td class="center aligned">
          <ViewAttachments {...this.props} />
        </td>
        <td class="center aligned">
          <DeleteModal {...this.props} />
        </td>
      </tr>
    );
  }
}
