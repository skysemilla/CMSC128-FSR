import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
//import CellItem from './CellItem'
import { Modal } from 'semantic-ui-react';
import DeleteModal from './DeleteModal'; // reusing

export default class AdministrativeWorkRow extends Component {
  render() {
    //Link to Edit page
    //Modal for Delete, fix this one
    return (
      <tr>
        <td class="center aligned"> {this.props.workPosition} </td>
        <td class="center aligned"> {this.props.officeUnit} </td>
        <td class="center aligned"> {this.props.approvedCreditUnits} </td>
        <td class="center aligned"> {this.props.totalAdministrativeLoadCredits} </td>
        
        <td class="center aligned">
          <DeleteModal {...this.props}/>
        </td>
        

      </tr>
    );
  }
}

 // <td class="center aligned">
        //   <button class="ui left attached compact icon button">
        //     <i class="edit icon"> </i>
        //   </button>

        //   <Modal
        //     trigger={
        //       <button
        //         class="ui right attached compact icon button"
        //         onClick={this.onClick} >
        //         <i class="trash alternate icon"> </i>
        //       </button> 
        //     }
        //     closeIcon
        //   />
        // </td>