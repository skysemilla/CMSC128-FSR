import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import DeleteModal from './DeleteModal';

export default class AdministrativeWorkRow extends Component {
  render() {
    return (
      <tr>
        <td className="center aligned"> {this.props.workPosition} </td>
        <td className="center aligned"> {this.props.officeUnit} </td>
        <td className="center aligned"> {this.props.approvedCreditUnits} </td>
        <td className="center aligned"> {this.props.totalAdministrativeLoadCredits} </td>
        
        <td className="center aligned">
          <DeleteModal {...this.props}/>
        </td>
        

      </tr>
    );
  }
}

 // <td className="center aligned">
        //   <button className="ui left attached compact icon button">
        //     <i className="edit icon"> </i>
        //   </button>

        //   <Modal
        //     trigger={
        //       <button
        //         className="ui right attached compact icon button"
        //         onClick={this.onClick} >
        //         <i className="trash alternate icon"> </i>
        //       </button> 
        //     }
        //     closeIcon
        //   />
        // </td>