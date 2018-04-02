import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
//import CellItem from './CellItem'
import { Modal } from 'semantic-ui-react';
import GenericDelete from './../GenericDelete';

export default class ViewTeachingLoadRow extends Component {
  render() {
    //Link to Edit page
    //Modal for Delete, fix this one
    return (
      <tr>
        <td class="center aligned"> {this.props.type} </td>
        <td class="center aligned"> {this.props.title} </td>
        <td class="center aligned"> {this.props.noOfHours} </td>
        <td class="center aligned"> {this.props.noOfParticipants} </td>
        <td class="center aligned"> {this.props.duration} </td>
        <td class="center aligned"> {this.props.role} </td>
        <td class="center aligned"> {this.props.fundingAgency} </td>
        <td class="center aligned"> {this.props.approvedCreditUnits} </td>
        <td class="center aligned">
        <GenericDelete {...this.props}/>
        </td>
      </tr>
    );
  }
}
