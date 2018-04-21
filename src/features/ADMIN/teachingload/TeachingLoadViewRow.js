import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import GenericDelete from './../../GenericDelete';

export default class ViewTeachingLoadRow extends Component {
  render() {
    return (
      <tr>
        <td classNameName="center aligned"> {this.props.seccode} </td>
        <td classNameName="center aligned"> {this.props.room} </td>
        <td classNameName="center aligned"> {this.props.days} </td>
        <td classNameName="center aligned"> {this.props.starttime} </td>
        <td classNameName="center aligned"> {this.props.endtime} </td>
        <td classNameName="center aligned"> {this.props.hours} </td>
        <td classNameName="center aligned"> {this.props.studnum} </td>
        <td classNameName="center aligned"> {this.props.creditwo} </td>
        <td classNameName="center aligned"> {this.props.studcred} </td>
        <td classNameName="center aligned"> {this.props.creditw} </td>
        <td classNameName="center aligned">
        <GenericDelete {...this.props}/>
        </td>
      </tr>
    );
  }
}
