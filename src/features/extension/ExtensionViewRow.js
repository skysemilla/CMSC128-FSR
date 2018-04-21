import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import GenericDelete from './../GenericDelete';

export default class ViewTeachingLoadRow extends Component {
  render() {
    return (
      <tr>
        <td className="center aligned"> {this.props.type} </td>
        <td className="center aligned"> {this.props.title} </td>
        <td className="center aligned"> {this.props.noOfHours} </td>
        <td className="center aligned"> {this.props.noOfParticipants} </td>
        <td className="center aligned"> {this.props.startDate} </td>
        <td className="center aligned"> {this.props.endDate} </td>
        <td className="center aligned"> {this.props.role} </td>
        <td className="center aligned"> {this.props.fundingAgency} </td>
        <td className="center aligned"> {this.props.approvedCreditUnits} </td>
        <td className="center aligned">
          <GenericDelete {...this.props} />
        </td>
      </tr>
    );
  }
}
