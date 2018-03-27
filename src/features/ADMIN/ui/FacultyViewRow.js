import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
//import CellItem from './CellItem'
import { Modal } from 'semantic-ui-react';
import GenericDisable from './../ui/GenericDisable';

export default class ViewTeachingLoadRow extends Component {
  render() {
    //Link to Edit page
    //Modal for Delete, fix this one
    return (
      <tr>
        <td class="center aligned"> {this.props.id} </td>
        <td class="center aligned"> {this.props.fname} {this.props.mname} {this.props.lname}</td>
        <td class="center aligned"> {this.props.college} </td>
        <td class="center aligned"> {this.props.dept} </td>
        <td class="center aligned">
        <GenericDisable {...this.props}/>
        </td>
      </tr>
    );
  }
}
