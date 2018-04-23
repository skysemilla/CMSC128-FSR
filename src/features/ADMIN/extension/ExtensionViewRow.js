import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import GenericDelete from './../../GenericDelete';

export default class ViewTeachingLoadRow extends Component {
  render() {
    return (
      <tr>
        <td classNameName="center aligned"> {this.props.type} </td>
        <td classNameName="center aligned"> {this.props.title} </td>
        <td classNameName="center aligned"> {this.props.noOfHours} </td>
        <td classNameName="center aligned"> {this.props.noOfParticipants} </td>
        <td classNameName="center aligned"> {this.props.startDate} </td>
        <td classNameName="center aligned"> {this.props.endDate} </td>
        <td classNameName="center aligned"> {this.props.role} </td>
        <td classNameName="center aligned"> {this.props.approvedCreditUnits} </td>
        <td classNameName="center aligned"> {this.props.totalExtandCommUnits} </td>
        <td classNameName="center aligned">
        <GenericDelete {...this.props}/>
        </td>
      </tr>
    );
  }
}
