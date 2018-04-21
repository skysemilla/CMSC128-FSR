import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
//import CellItem from './CellItem'
import { Modal } from 'semantic-ui-react';
import GenericDelete from './../../GenericDelete';

export default class ViewTeachingLoadRow extends Component {
  render() {
    //Link to Edit page
    //Modal for Delete, fix this one
    return (
      <tr>
        <td className="center aligned"> {this.props.positionOfWork} </td>
        <td className="center aligned"> {this.props.officeUnit} </td>
        <td className="center aligned"> {this.props.approvedCreditUnits} </td>
        <td className="center aligned"> {this.props.totalAdminLoadCredits} </td>
        <td className="center aligned">
        <GenericDelete {...this.props}/>
        </td>
      </tr>
    );
  }
}
