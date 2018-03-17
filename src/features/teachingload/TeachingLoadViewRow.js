import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
//import CellItem from './CellItem'
import { Modal } from 'semantic-ui-react';

export default class ViewTeachingLoadRow extends Component {
  render() {
    //Link to Edit page
    //Modal for Delete, fix this one
    return (
      <tr>
        <td class="center aligned"> {this.props.seccode} </td>
        <td class="center aligned"> {this.props.room} </td>
        <td class="center aligned"> {this.props.days} </td>
        <td class="center aligned"> {this.props.time} </td>
        <td class="center aligned"> {this.props.hours} </td>
        <td class="center aligned"> {this.props.studnum} </td>
        <td class="center aligned"> {this.props.creditwo} </td>
        <td class="center aligned"> {this.props.studcred} </td>
        <td class="center aligned"> {this.props.creditw} </td>
        <td class="center aligned">
          <button class="ui left attached compact icon button">
            <i class="edit icon"> </i>
          </button>

          <Modal
            trigger={
              <button
                class="ui right attached compact icon button"
                onClick={this.onButtonClick}>
                <i class="trash alternate icon"> </i>
              </button>
            }
            closeIcon
          />
        </td>
      </tr>
    );
  }
}
